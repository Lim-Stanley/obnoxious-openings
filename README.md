# Obnoxious Openings

This repository provides Obnoxious Openings, a user-friendly chess application designed to supply users with an efficient way to learn and review chess openings, removing the dreaded hassle of learning openings that players from all skill levels experience.

## Table of Contents
1. [Organization](#organization)
2. [Installation](#installation)
3. [Opening and Using](#opening-and-using)
4. [Features](#features)
5. [Future Plans](#future-plans)

## Organization
- [`src/opening_proc`](src/opening_proc) Contains the files used to scrape opening data from the [Chess Tempo Opening Database](https://old.chesstempo.com/chess-openings.html)
- [`src/index.js`](src/index.js) Contains the class component that the application is built upon
- [`src/commons`](src/commons) Contains many of the functions used for the application, organized by different components
- [`src/pieces`](src/images) Contains the images used for the application
- [`src/sounds`](src/sounds) Contains the sounds used for the application
## Installation

1. Install Git
2. Create a folder on your computer where you can download this repository
3. Clone this repository to your computer: `git clone https://github.com/Lim-Stanley/obnoxious-openings`
4. Download [Node.js](https://nodejs.org/en/)

## Opening and Usage

To open the application, in the project directory, run:
### `npm start`

##### Usage
In order to move a piece, simply left click on it. An indicator on the square will display the currently selected square. Then, left click on where you intend to place it.

<img width="1300" alt="Chess-Move" src="https://user-images.githubusercontent.com/92659795/185159496-4f0f8152-2249-4348-9914-8dfa0cd596ae.png">

To go back in history and review past board positions, click on the respective move in the move list on the right of the board.
<img width="1700" alt="Chess-History" src="https://user-images.githubusercontent.com/92659795/185165864-4f0428ad-907c-432e-ba50-7548757745a1.png">

To rotate the board and play from the other color's perspective, click the "flip board" button on the right side of the board.
<img width="1700" alt="Flip-Board" src="https://user-images.githubusercontent.com/92659795/185199031-d6901a32-1853-47dd-9b58-b0f7c3d530cd.png">

To learn/review an opening, search for the opening name on the left side of the board, and click the respective opening. The status bar at the top left will update to indicate which opening you are currently studying.
<img width="1153" alt="Choose-Opening" src="https://user-images.githubusercontent.com/92659795/185199576-c4d38f94-78e6-43af-8d63-5543a5f22079.png">

## Features
##### Openings
This application consists of 1978 unique chess openings to learn and study, scraped from the [Chess Tempo Opening Database](https://old.chesstempo.com/chess-openings.html). To find out more information regarding the scraping process, see [`src/opening_proc`](/src/opening_proc)

##### Multisensory Learning
[Studies](https://en.wikipedia.org/wiki/Multisensory_integration) have shown that the benefits of multisensory learning are greatest if the senses are engaged concurrently and the instruction is direct and systematic. Along with efficiency, multisensory learning has also been found to keeps students more [engaged in their learning](https://dera.ioe.ac.uk/5551/2/report.pdf). In fact, the U.K. Department for Education established a requirement in 2010 that the material in schools "uses a multi-sensory approach so that children learn variously from simultaneous visual, auditory and kinesthetic activities which are designed to secure essential phonic knowledge and skills" (https://www.gov.uk/government/publications/phonics-teaching-materials-core-criteria-and-self-assessment).

This application combines visual, auditory, and kinesthetic stimulation with learning new openings under a direct and systematic approach to provide an optimal learning environment for students trying to learn new openings. The visual portion comes from the difference in the state of board after each move. The auditory effect comes from unique sounds that play everytime a move is played. The kinesthetic stimulation comes from the act of clicking and moving the pieces. Meanwhile, the direct and systematic approach comes from the list of openings being paired with an immediate feedback from the system, indicating whether a player has succeeded or failed in playing the next move of the respective opening.

Each rank on the chess board corresponds to a musical pitch. Along with this, each of the different pieces have a corresponding instrument to them, so that different pieces can be distinguished from one another. The combination of these two allows for auditory distinction between the openings, ensuring that two openings will not be confused by the learners for sounding identical.

## Future Plans
All plans can be found in [`plans.txt`](plans.txt).
A notable plan for the future includes integrating [stockfish](https://stockfishchess.org/), a chess analysis engine, which will allow users to get a deeper understanding of chess openings. Specifically, when learning an opening, a common question that occurs is "why isn't this move played instead of that move?" Stockfish will allow users to explore down these branches of play and really understand what makes a move so different from the other possible moves that can be played.

Another feature is a drag-and-drop feature, which will allow players to practice more swiftly.

Finally, an exciting future plan is to add a "create your own opening" feature, that will allow users to make their own variations into the application, allowing others to use in the future.
