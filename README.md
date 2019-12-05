Single page API Test
===

Important
---
This project will be based on your ability to create a frontend matching the design criteria, for a web based encyclopedia based on the popular franchise Pokémon - also known as a Pokédex.

You **must** fork this repository and submit your work via a Merge Request.


Instructions
---
This is a fairly basic front-end piece to give us a general idea of where you are as a developer.
You should complete this project with the Javascript framework of your choice. 
We don't expect you to spend several days creating a fully finished page, but try to spend **no more than three hours** on it and 
see how far you can get. If you're short on time we'd like to see the API interaction and search ability, rather than 
the whole page being rushed. You should use it to demonstrate the following:

- Version control: Ideally you will fork from this repo and provide us a link to your new repo containing the finished files, along with your commit history.
- Basic task runner workflow: There are instructions below for getting going in this very basic gulp project, but you should be comfortable using Gulp to compile SCSS and concatenate JS or the specific build process required for the Javascript framework you have chosen.
You must include a guide for compiling for development and production.
- Javascript: This design presents a couple of opportunities to use JS. Using the Javascript framework of choice to connect to the API and show the resulting data.
- SCSS: Make the most of the added functionality SCSS brings to the table.
- Responsive: Don't worry about coding for every possible device. All we ask is that it looks ok on screens larger than 1024px `design/pokedex-homepage.pdf` and smaller than 500px `design/pokedex-homepage-responsive.pdf` (Just desktop and mobile).
- Keen eye for detail: Your main priority here should be pixel perfect/close reproduction of the design in the PDF.
- API usage: That you are interacting with the API in an efficient way.
- Clean, readable code

Requirements
---

There should be;
- A working paginated list of pokemon on the left hand side of the page, as shown in the design and click through to browse all possible pokemon.
- Previous pagination button is not shown on the first page of pokemon and next page is not shown on the last
- A search box, which can be used to search for any valid pokemon that exists in the API. This should at least be complete word match i.e `Venusaur`, but can be improved using fuzzy/partial word search i.e. `saur` to list under the search box `Bulbasaur`, `Ivysaur`, `Venusaur` and `Venusaur-mega`.
- If no pokemon are found from the search then this should be clearly displayed to the user. 
- All the results of the search should be displayed below the search box. If more than one pokemon are returned in the results then these should all be listed in the style shown in the design for a Pokémon with their image and abilities.
- The image of the Pokémon should be as shown in the design.
- Update the readme to show the installation method, running a local development copy and compiling production. 
- Match the layout and styling included in the design folder.
- The page is responsive when viewed on Mobile and Desktop

Resources
---

This repo contains the follow resources you'll need to complete the task:

- Design: The one page design is available in PDF and PNG format in the design folder.
- SCSS Framework: We have included a basic gulp file which you can use but we are interested to see your choice of style framework, feel free to pick any that you want which allows you to match the design. 
- Images: The image urls of each Pokémon are included in the API response. 
- Fonts: This design uses Open Sans, which has already been included via their respective CDN's in the `<head>`
- Directory structure: Feel free to change this to suit the Javascript framework that you are using.

A RESTful API is available at [Pokéapi](https://pokeapi.co/) which will provide you with all the data that you will need. You do not need to create
an account nor authenticate in order to consume the API, however please be aware that this API is rate-limited.

Installation
---

1. Clone repo
2. Run npm install to install dependencies.
3. //TODO
4. //TODO


Build
---

Depending on your methodology and the Javascript framework (if any) that you choose to use. Please define how this web page should be compiled for development and production.
i.e. using `gulp`

Submission
---
To submit your solution, please fork this repository and provide us a link to your finished version.

Copyright
---
All trademarks as the property of their respective owners.
