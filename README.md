# ConFusion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Intallation
After creating application, following are the dependencies which are installed.
1) npm install @angular/material @angular/cdk --save (Used for design)
2) npm i hammerjs --save  (Hammerjs supports gesture modes)
3) npm i @angular/flex-layout@latest --save  (for layout)
4) npm i font-awesome --save (after install, make font-awesome available for angular by adding its path in .agnular-cli.json file inside styles tag)

## Problem
There is a issue with metadata flex-layout version mismatch, which will occur on server start, but after server start open the any *.ts file in an IDE(e.g. Visual Studio Code) and save any *.ts file, this will kick start the application. 
This problem only comes at the first start of the server.
-- `Working on fixing the problem.`

