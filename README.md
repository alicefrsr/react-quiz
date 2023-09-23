# React Quiz

> A simple React Quiz with 15 questions, each with 4 possible answers.

To learn and practice: useReducer, the Context API, set up a basic backend using
Express, deploy on Vercel.

### Live site:

https://react-quiz-6l23.vercel.app/

### Functionalities:

#### Timer:

A 2min30sec countdown automatically starts when clicking on the Start button.
Upon completion or if time runs out, user gets redirected to results screen
displaying total amount of points earned.

#### Score:

Points are allocated per difficulty level with a total possible score of 280
points. A highscore is saved and updated if latest score is higher than previous
highscore.

User can re-take the quiz as many times he/she wishes by clicking on the Restart
button, and can exit the quiz at any time by clicking on the Cancel button.

### Available Scripts

This project was bootstrapped with [Vite](https://vitejs.dev/).

#### `npm install`

Downloads dependencies defined in the package.json file and generates the
node_modules folder with the installed modules

In the server directory, you can run:

#### `npm install nodemon`
#### `npm run express-server`

Launches the quiz questions API on
[http://localhost:8000/api/v1/questions](http://localhost:8000).

In the client directory, you can run:

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.
