## About the project
This project applies some concepts like Monorepository, Angular lazy loading, third party API's and unit tests.

The main goal of this project is to apply these concepts in order to provide a simple SPA web application powered by its own back-end provider to display a list of the commits pushed to the `main` branch on this GitHub repository.

## Technologies
1. Nx framework to handle Monorepository features.
2. Angular for front-end development
3. NestJS for back-end development
4. Jest for unit test development
5. TailwindCSS for front-end layout and styling

## Project scaffolding
Main project folders and files are listed below.
- apps/
	- back-end/ (here is the entire NestJS application)
	- front-end/ (here is the entire Angular application)
-  interfaces/ (some common interfaces used around both applications)
- libs/
	- app-config/ (just a library to handle project config files)
- package.json (all the dependencies needed by the project, back-end and front-end included)

## Usage

1. Install the project dependencies by running: `npm install`
2. Run back-end tests: `nx test back-end`
3. Run front-end tests: `nx test front-end`
4. Start back-end app: `nx serve back-end` (back-end server will run at http://localhost:3000/api)
5. Start front-end app (run this one in a different shell or command line tab): `nx serve front-end` (front-end server will run at http://localhost:4200)
6. Take a look to the front end by visitting http://localhost:4200 on your browser.
