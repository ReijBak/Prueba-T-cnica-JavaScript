
### EventSeven

https://github.com/ReijBak/Prueba-T-cnica-JavaScript/tree/main/Prueba_tecnica_JavaScript

## Description

EventSeven is a website/app where you can get entrances to our events, we publish new events everyday.

## Installation

- You need to install an IDE (We recomend use Visual Studio Code).

- You need to install Nodejs with npm and json-server.

- If you are using VS Code, install Live Server extension. If not, you need a local server to run our app.

## Usage

- While you are in the project's folder, run in your terminal this comand: "npx json-server db.json"

- Using VS Code and Live Server, run index.html

## Project Structure

EventSeven/
│
├── index.html                  # You start the program here
│
├── app/
│   ├── assents/             
│   │   ├── css/                # Personalized styles(Colors)
│   │   └── img/                # Images gallery used in the project   
│   │   
│   ├── js/                     # Utils (auth.js, routes.js)
│   └── views/                  # Views: login, register, dashboard, create, edit   
│
├── index.js                    # Main script
├── db.json                     # json-server database
└── README.md

## Tecnologies used

- HTML 5/CSS 3 - Bootstrap 5.3.
- JavaScript.
- Json-server - npm

## Authors & Credits

- Juan Steven Cardona Grisales.
- Clan: van Rossum.
- stevencardona2001@gmail.com.
- CC. 1000540387

## Aditional notes

# Bugs known

- At time to create a event, it can be created twice.

- For PC users, dashboar can be wrongly displayed when you reduce the window size.