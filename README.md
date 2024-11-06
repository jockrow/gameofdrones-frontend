# GameOfDronesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

----
## Install
```sh
npm install
```

## execute
```sh
ng serve
```

## Config
To avoid troubles with cors, change the port in the target of the api in the src/proxy.conf.json file:
```json
{
  "/api": {
    "target": "http://localhost:5073",
    "secure": false
  }
}

```
Parametrize the url api on the app.config.ts file at APP_CONFIG constant:
Example:
```ts
export const APP_CONFIG = {
  gameMovesUrl: 'http://localhost:5073/api/game'
};

```
