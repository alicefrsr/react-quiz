# React quiz

Simple React quiz with 15 questions, 4 possible answers for each.

Built to learn and practice: useReducer, the Context API, how to set up and
deploy a fake REST API Server using JSON-server.

### Functionalities:

#### Timer:

A 2 min 30 countdown automatically starts when clicking on the Start button.
Upon completion or if time runs out, user gets redirected to results screen
displaying total amount of points earned.

#### Score:

Points are allocated per difficulty level with a total possible score of 280
points. A highscore is saved and updated if latest score is higher than previous
highscore.

User can re-take the quiz as many times he/she wishes by clicking on the Restart
button, and can exit the quiz at any time by clicking on the Cancel button.

This project was bootstrapped with [Vite](https://vitejs.dev/).

### Available Scripts

In the project directory, you can run:

#### `npm install`

Downloads dependencies defined in the package.json file and generates the
node_modules folder with the installed modules

#### `npm run server`

Launches the quiz questions API on
[http://localhost:8000](http://localhost:8000).

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.
