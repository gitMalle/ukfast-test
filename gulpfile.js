var gulp = require('gulp'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    reload = browserSync.stream;

var config = {
    scss: 'src/css/style.scss',
    js: [
        'src/js/vendor/*.js',
        'src/js/*js'
    ],
    production: !!util.env.production
};


// SASS
gulp.task("sass", function () {
    gulp.src(config.scss)
        .pipe(plumber())
        .pipe(config.production ? util.noop() : sourcemaps.init())
        .pipe(config.production ?
            sass({
                outputStyle: 'compressed'
            }).on('error', sass.logError) :
            sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 1%'],
            cascade: false
        }))
        .pipe(config.production ? util.noop() : sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(reload())
});

// JS
gulp.task('js', function () {
    gulp.src(config.js)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(config.production ? util.noop() : sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(config.production ? uglify() : util.noop())
        .pipe(config.production ? util.noop() : sourcemaps.write())
        .pipe(gulp.dest('dist/js'))
        .pipe(reload());
});

// BrowserSync
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

// Watching
gulp.task('watch', function () {
    gulp.watch('src/css/**/*.scss', ['sass'])
    gulp.watch('src/js/*.js', ['js'])
});


// Default Task
gulp.task('default', ['sass', 'js', 'browser-sync', 'watch']);
gulp.task('build', ['sass', 'js']);
