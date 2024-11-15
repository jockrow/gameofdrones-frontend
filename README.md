# Rock, Paper, Scissors Game

Visit the [Rock, Paper, Scissors Game Site](https://gameofdrones-frontend.vercel.app)


Enter to players:
<img width="661" alt="image" src="https://github.com/user-attachments/assets/74a6af94-fd80-46ef-a7f9-086df6d3e05a">

Game Option for Pedro Player: 
<img width="652" alt="image" src="https://github.com/user-attachments/assets/b0d5ac2e-f6c4-4f1c-97f1-0ab39e7636d1">

Game Option for Juana Player: 
<img width="658" alt="image" src="https://github.com/user-attachments/assets/3e76b93e-eb6f-4086-abf3-3f41f7ab79e7">

Game Option for Pedro Player registering the round: 
<img width="652" alt="image" src="https://github.com/user-attachments/assets/e913c0e9-3fdd-4dc1-8a02-d5d3176b1237">

Game Option for Juana Player registering the round: 
<img width="653" alt="image" src="https://github.com/user-attachments/assets/8b45e7e6-9dac-4950-8322-5637f05e8f00">

Show the winner:
<img width="660" alt="image" src="https://github.com/user-attachments/assets/0d41832b-6c5f-476a-bf85-040302c2d75f">

Retrieve all winners history.
```
GET https://gameofdronesapi-h7gshrfmc8g4cmbs.northeurope-01.azurewebsites.net/api/game/winners
```
Result:
```
[
    {
        "datePlayed": "2024-11-07T10:16:25.653",
        "winnerId": 1,
        "winnerName": "Pedro"
    }
]

```
---

## Config the game moves

Retrieve all moves:
```
GET https://gameofdronesapi-h7gshrfmc8g4cmbs.northeurope-01.azurewebsites.net/api/game/moves
```
Result:
```
[
    {
        "kills": "Rock",
        "moveId": 1,
        "name": "Paper"
    },
    {
        "kills": "Scissors",
        "moveId": 2,
        "name": "Rock"
    },
    {
        "kills": "Paper",
        "moveId": 3,
        "name": "Scissors"
    }
]
```
<img width="157" alt="image" src="https://github.com/user-attachments/assets/22c9e961-17bb-4bce-b610-fc23c6cf9391">


Create a new move:
```
POST https://gameofdronesapi-h7gshrfmc8g4cmbs.northeurope-01.azurewebsites.net/api/game/move
```
Example body:
```json
	{
		"Name": "String",
		"Kills": "Dog"
	}
```
Result:
```json
{
    "kills": "Dog",
    "moveId": 20,
    "name": "String"
}
```
<img width="149" alt="image" src="https://github.com/user-attachments/assets/5d49392f-9b3d-4e39-9602-c94e156a1fb3">


Update a move
```
PUT https://gameofdronesapi-h7gshrfmc8g4cmbs.northeurope-01.azurewebsites.net/api/game/move/{id}
```
Example:
```
PUT https://gameofdronesapi-h7gshrfmc8g4cmbs.northeurope-01.azurewebsites.net/api/game/move/20
```
Example body:
```json
	{
		"Name": "Cadena",
		"Kills": "Dog"
	}
```
Result:
```json
{
    "kills": "Dog",
    "moveId": 20,
    "name": "Cadena"
}
```
<img width="152" alt="image" src="https://github.com/user-attachments/assets/5c9dd362-a241-4298-bcd5-b10a94cd1fa2">


Delete a move by ID:
```
DELETE https://gameofdronesapi-h7gshrfmc8g4cmbs.northeurope-01.azurewebsites.net/api/game/move/{id}
```
Example
```
DELETE https://gameofdronesapi-h7gshrfmc8g4cmbs.northeurope-01.azurewebsites.net/api/game/move/20
```
<img width="141" alt="image" src="https://github.com/user-attachments/assets/02fec6b8-b317-4803-8cfd-80f004221397">


---

# Technical Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Install
```sh
npm install
```

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

# Config
To avoid troubles with cors, change the port in the target of the api in the src/proxy.conf.json file:
```json
{
  "/api": {
    "target": "http://localhost:5073",
    "secure": false
  }
}

```
Parametrize the url api on the src/environments/environment at apiUrl varieble:
Example:
```ts
export const environment = {
  apiUrl: 'http://localhost:5073/api/game'
};

```
