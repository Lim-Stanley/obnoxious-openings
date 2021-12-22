import BR from './Chess_Pieces/Black Rook.png'
import BN from './Chess_Pieces/Black Knight.png'
import BB from './Chess_Pieces/Black Bishop.png'
import BQ from './Chess_Pieces/Black Queen.png'
import BK from './Chess_Pieces/Black King.png'
import BP from './Chess_Pieces/Black Pawn.png'

import WR from './Chess_Pieces/White Rook.png'
import WN from './Chess_Pieces/White Knight.png'
import WB from './Chess_Pieces/White Bishop.png'
import WQ from './Chess_Pieces/White Queen.png'
import WK from './Chess_Pieces/White King.png'
import WP from './Chess_Pieces/White Pawn.png'


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// GREEN COLOR: #769656
// CREAM COLOR: #eeeed2

/////////////////////////////////////////////////////////////
//////////       TO DO LIST   ///////////////////////////////
/////////////////////////////////////////////////////////////
// Find out how to render the squares different colors
// Find out how to get actual pieces to display instead of the text

function Square(props) {
  if (isLightSquare(props.squareNumber))
  {
    return (
      <button className="lightSquare" onClick={props.onClick}>
        {pieceImage(props.value)}
      </button>
    );
  }
  else
  {
    return (
      <button className="darkSquare" onClick={props.onClick}>
        {pieceImage(props.value)}
      </button>
    );
  }
}

// Checks if i is a light square
function isLightSquare(i)
{
  if (i === 0 ||
    i === 2 ||
    i === 4 ||
    i === 6 ||
    i === 9 ||
    i === 11 ||
    i === 13 ||
    i === 15 ||
    i === 16 ||
    i === 18 ||
    i === 20 ||
    i === 22 ||
    i === 25 ||
    i === 27 ||
    i === 29 ||
    i === 31 ||
    i === 32 ||
    i === 34 ||
    i === 36 ||
    i === 38 ||
    i === 41 ||
    i === 43 ||
    i === 45 ||
    i === 47 ||
    i === 48 ||
    i === 50 ||
    i === 52 ||
    i === 54 ||
    i === 57 ||
    i === 59 || 
    i === 61 ||
    i === 63
    )
  return true
  return false
}

// Given a piece code (BB, WW, etc...) return the image associated with that piece
function pieceImage(pieceCode)
{
  if (pieceCode === "BR")
    return <img src = {BR} alt = "Black Rook" />
  else if (pieceCode === "BN")
    return <img src = {BN} alt = "Black Knight" />
  else if (pieceCode === "BB")
    return <img src = {BB} alt = "Black Bishop" />
  else if (pieceCode === "BQ")
    return <img src = {BQ} alt = "Black Queen" />
  else if (pieceCode === "BK")
    return <img src = {BK} alt = "Black King" />
  else if (pieceCode === "BP")
    return <img src = {BP} alt = "Black Pawn" />
  else if (pieceCode === "WR")
    return <img src = {WR} alt = "White Rook" />
  else if (pieceCode === "WN")
    return <img src = {WN} alt = "White Knight" />
  else if (pieceCode === "WB")
    return <img src = {WB} alt = "White Bishop" />
  else if (pieceCode === "WQ")
    return <img src = {WQ} alt = "White Queen" />
  else if (pieceCode === "WK")
    return <img src = {WK} alt = "White King" />
  else if (pieceCode === "WP")
    return <img src = {WP} alt = "White Pawn" />
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        squareNumber={i}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
          </div>
          <div className="board-row">
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
          </div>
          <div className="board-row">
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            {this.renderSquare(18)}
            {this.renderSquare(19)}
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
          </div>
          <div className="board-row">
            {this.renderSquare(24)}
            {this.renderSquare(25)}
            {this.renderSquare(26)}
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
            {this.renderSquare(30)}
            {this.renderSquare(31)}
          </div>
          <div className="board-row">
            {this.renderSquare(32)}
            {this.renderSquare(33)}
            {this.renderSquare(34)}
            {this.renderSquare(35)}
            {this.renderSquare(36)}
            {this.renderSquare(37)}
            {this.renderSquare(38)}
            {this.renderSquare(39)}
          </div>
          <div className="board-row">
            {this.renderSquare(40)}
            {this.renderSquare(41)}
            {this.renderSquare(42)}
            {this.renderSquare(43)}
            {this.renderSquare(44)}
            {this.renderSquare(45)}
            {this.renderSquare(46)}
            {this.renderSquare(47)}
          </div>
          <div className="board-row">
            {this.renderSquare(48)}
            {this.renderSquare(49)}
            {this.renderSquare(50)}
            {this.renderSquare(51)}
            {this.renderSquare(52)}
            {this.renderSquare(53)}
            {this.renderSquare(54)}
            {this.renderSquare(55)}
          </div>
          <div className="board-row">
            {this.renderSquare(56)}
            {this.renderSquare(57)}
            {this.renderSquare(58)}
            {this.renderSquare(59)}
            {this.renderSquare(60)}
            {this.renderSquare(61)}
            {this.renderSquare(62)}
            {this.renderSquare(63)}
          </div>
      </div>
    );
  }
}


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: this.initializeBoard()
        }
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  initializeBoard(){
    let tempArray = Array(64).fill(null);
    tempArray[0] = "BR"
    tempArray[1] = "BN"
    tempArray[2] = "BB"
    tempArray[3] = "BQ"
    tempArray[4] = "BK"
    tempArray[5] = "BB"
    tempArray[6] = "BN"
    tempArray[7] = "BR"
    for (let i = 8; i < 16; i++)
    {
      tempArray[i] = "BP";
    }
    
    for (let i = 48; i < 56; i++)
    {
      tempArray[i] = "WP";
    }
    tempArray[56] = "WR"
    tempArray[57] = "WN"
    tempArray[58] = "WB"
    tempArray[59] = "WQ"
    tempArray[60] = "WK"
    tempArray[61] = "WB"
    tempArray[62] = "WN"
    tempArray[63] = "WR"
    return tempArray;
  }

  cMoveOneCheck(i){
    return;
  }

// Handles the second click, after a valid/successful first click
  cHandleClick(num, i) {
    return 0;
  }

  cUpdate(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    squares[i] = this.state.xIsNext ? "White" : "Black";
    squares[this.state.firstLocation] = null;
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      moveNumber: 1,
    });
    return;
  }

  handleClick(i) {
    // Main thing to start with!
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "White" : "Black");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

