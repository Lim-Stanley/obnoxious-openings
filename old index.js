import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
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
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


// To implement chorus-lapilli, i implemented three variables, moveNumber, branchNumber, and firstLocation
// When it gets to the Chorus part, I first check the selection click with the function cMoveOneCheck, and if the selection click is valid, I check the
// Placement click with cHandleClick. If both are valid, I call cUpdate to update the board
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      moveNumber: 1,
// When at the chorus part, moveNumber tells if it is the first or second click
      branchNumber: 0,
// Branch number is used to tell cHandleClick, which is the second click check, which scenario 
// the player is in. The scenarios include:
// Has a piece in the center, and has selected a non center piece (branchNumber 1)
// Has a piece in the center, and has selected the center piece (branchNumber 2)
// Does not have a piece in the center (branchNumber 3)
      firstLocation: 9
// First location stores the location of the first click done by the player once in the chorus part
    };
  }

  cMoveOneCheck(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    var turn = null;
    if (this.state.xIsNext) {turn = 'X'}
    else {turn = 'O'}

// Check if they are selecting their own piece
    if (squares[i] !== turn){return;}

// Check if they have a piece in the center
    if (squares[4] === turn) {
// Check if they are selecting it
      if (i !== 4) {
        this.setState({
          branchNumber: 1,
	  moveNumber: 2,
          firstLocation: i
        });
        return;
      }
      else {
        console.log("this should be displayed - part 1");
        this.setState({
          branchNumber: 2,
	  moveNumber: 2,
          firstLocation: i
        });
        return;
      }
    }
// For if their selected piece is not in the center
    this.setState({
      branchNumber: 3,
      moveNumber: 2,
      firstLocation: i
    });
    return;
  }

// Handles the second click, after a valid/successful first click
  cHandleClick(num, i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    var turn = null;
    if (this.state.xIsNext) {turn = 'X'}
    else {turn = 'O'}

    var locLocation;
    locLocation = this.state.firstLocation;
    this.setState({
      branchNumber: 0,
      moveNumber: 1,
      firstLocation: 9
    });
    

// Check if the selected piece is empty
    if (squares[i] !== null) {
      return 1;
    }

// Case: if player has piece in the center & not selecting center piece
    if (num === 1){
      var winner;
      squares[i] = turn;
      winner = calculateWinner(squares);
      console.log("winner is " + winner);
      console.log("turn is " + turn);
      if (turn !== winner) {
        return 1;
      } 
    } else if (num === 2) {
// ^^ Case: player has piece in center and is selecting it
      if (i === 4) {
        return 1;
      }
      console.log("this should be displayed - part 2");
    } else if (num === 3) {
// ^^ Case: player has no piece in the center
// Check if the current i is right next to the first selected move
      var previ;
      previ = this.state.firstLocation;
      console.log("previ is " + previ);
      if (previ === 0) {
        if (i === 1 ||
            i === 3 ||
            i === 4) {
        } else {
          return 1;
        }
      } else if (previ === 1) {
        if (i === 0 ||
            i === 2 ||
            i === 3 ||
            i === 4 ||
            i === 5) {
        } else {
          return 1;
        }
      } else if (previ === 2) {
        if (i === 1 ||
            i === 4 ||
            i === 5) {
        } else {
          return 1;
        }
      } else if (previ === 3) {
        if (i === 0 ||
            i === 1 ||
            i === 4 ||
            i === 6 ||
            i === 7) {
        } else {
          return 1;
        }
      } else if (previ === 4) {
        if (i !== 4) {
        } else {
          return 1;
        } 
      } else if (previ === 5) {
        if (i === 1 ||
            i === 2 ||
            i === 4 ||
            i === 7 ||
            i === 8) {
        } else {
          return 1;
        }
      } else if (previ === 6) {
        if (i === 3 ||
            i === 4 ||
            i === 7) {
        } else {
          return 1;
        }
      } else if (previ === 7) {
        if (i === 3 ||
            i === 4 ||
            i === 5 ||
            i === 6 ||
            i === 8) {
        } else {
          return 1;
        }
      } else if (previ === 8) {
        if (i === 4 ||
            i === 5 ||
            i === 7) {
        } else {
          return 1;
        }
      } else {
        console.log("yeah don't do it");
        return 1;
      }
    } 
    this.setState({firstLocation: locLocation});
    return 0;
  }

  cUpdate(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O";
    console.log(this.state.firstLocation + " is firstlocation");
    squares[this.state.firstLocation] = null;
    console.log("squares 4 is " + squares[4]);
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      moveNumber: 1,
      branchNumber: 0,
      firstLocation: 9
    });
    return;
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    
// Use turn to check if the current selected square is a selectable square
// CAN DELETE THE NEXT FOUR LINES ONCE DONE :D
    var turn = null;
    if (this.state.xIsNext) {turn = 'X'}
    else {turn = 'O'}
    console.log(turn + " " + this.state.stepNumber)
// Want to check if it is the 7th move or  greater!
    if (this.state.stepNumber >= 6) {
// Checks for first click
      if (this.state.moveNumber === 1) {
        console.log("checking first move");
        this.cMoveOneCheck(i);
        return;
      }
// Checks for second click
      else if (this.state.moveNumber === 2) {
        console.log("checking second move");
        console.log("the branch number is " + this.state.branchNumber);
        var exitnum;
        exitnum = this.cHandleClick(this.state.branchNumber, i);
        if (exitnum === 1) {
          this.setState({moveNumber: 1});
          return;
        }
        console.log("i got here");
        this.cUpdate(i);
        return;
      }
    } else {
      if (calculateWinner(squares) || (squares[i])) {
        return;
      }
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      moveNumber: 1,
      branchNumber: 0,
      firstLocation: 9
    });
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
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
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

