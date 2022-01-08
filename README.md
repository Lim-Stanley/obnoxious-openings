# Chess Opening Trainer

A chess opening trainer to aid in learning and analysis of openings, built with React.

To run the app, run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Organization
'index.html' is where the body is loaded
'src/' contains all the processes for the chess game
### src/index.js

This is where the mechanics of the game are programmed. 
It is split into a Game class, which renders all other subcomponents and processes the clicks and moves.
The Board class renders each individual square.
The setMode() function is where the individual data for each opening is returned to the Game class.

