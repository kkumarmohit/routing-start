# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## routerLink
Using direct routes in href property reloads the whole application and app data gets lost.
Passing the routes in routerLink property, parses the string and render the specific component only with no reload of the appllication.

## relative path
Relative path appends the current path.
relative path: defining route without "/" or with "./" (add to current path) or with "../" (go up one level)
absolute path: defining route with "/"

## Point for navigation
routerLink knows what is the current component on which we are at and hence the relative paths should be carefully defined.
router.Navigate("") doesn't know the current place where we are at. An extra argument can be passed for the above purpose.

## snapshot
the snapshot property of the activated route gets updated when the component has been loaded for the first time only.
It won't re-render the component on which we already are on to fetch the new values.

## **
Wildcard routes: if none of the routes defined matches, then "**" path gets used which renders or redirects the request.
Note: wildcard route must be defined as the last element of the array. 