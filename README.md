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

## Prerequisites
1. Have Node installed on the system.
2. Have npm installed on the system and use a version greater than or equal to 5.2.

## Usage

1. Install the project dependencies by running: `npm install`
2. Run back-end tests: `npx nx test back-end`
3. Run front-end tests: `npx nx test front-end`
4. Start back-end app: `npx nx serve back-end` (back-end server will run at http://localhost:3000/api)
5. Start front-end app (run this one in a different shell or command line tab): `npx nx serve front-end` (front-end server will run at http://localhost:4200)
6. Take a look to the front end by visitting http://localhost:4200 on your browser.

## Troubleshooting
If you are using a version of `npm` lower than version 5.2 you will notice that you do not have npx installed on your system (unless you have installed it manually before) and therefore the commands listed in the Instructions section will not work.

Using npx prevents you from having to install the Nx framework on your system, so its use is recommended.

If upgrading your npm version is not an option for you, you can manually install npx on your system:

to install npx in the project folder:

`npm i npx`

to install npx globally:

`npm i -g npx`
