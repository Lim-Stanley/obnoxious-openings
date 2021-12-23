import Button from '@mui/material/Button';

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
// Yellow on light square: #f6f669
// Yellow on dark square: #baca2b

/////////////////////////////////////////////////////////////
//////////       TO DO LIST   ///////////////////////////////
/////////////////////////////////////////////////////////////
// Make enpassant possible if you just got to the point in history where it is about to be played
// Implement checks
// Implement no castling out of checks
// Implement no castling through a square that is being controlled by opponent
// Implement a isControlled function that, given a coordinate, will tell if any opponent piece is controllling it
// Implement limiting king moves to not suicide itself
// Make black pawn and white pawn processing one function
// Implement a board switch (play from black side)
// Implement drag and drop


function Square(props) {
  if (isLightSquare(props.squareNumber))
  {
    if (props.selectedSquare != null && props.selectedSquare === props.squareNumber)
    return (
      <Button onClick={props.onClick} style={{
        backgroundColor: "#f6f669",
        alignItems: 'center',
        borderRadius: 0,
        width: '80px', 
        height: '80px'
      }}>
        {pieceImage(props.pieceCode)}
      </Button>
    );

    return (
      <Button onClick={props.onClick} style={{
        backgroundColor: "#eeeed2",
        alignItems: 'center',
        borderRadius: 0,
        width: '80px', 
        height: '80px'
      }}>
        {pieceImage(props.pieceCode)}
      </Button>
    );
  }
  else
  {
    if (props.selectedSquare != null && props.selectedSquare === props.squareNumber)
    return (
      <Button onClick={props.onClick} style={{
        backgroundColor: "#baca2b",
        alignItems: 'center',
        borderRadius: 0,
        width: '80px', 
        height: '80px'
      }}>
        {pieceImage(props.pieceCode)}
      </Button>
    );

    return (
      <Button onClick={props.onClick} style={{
        backgroundColor: "#769656",
        alignItems: 'center',
        borderRadius: 0,
        width: '80px', 
        height: '80px'
      }}>
        {pieceImage(props.pieceCode)}
      </Button>
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
  else
    return ""
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        pieceCode={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        squareNumber={i}
        selectedSquare= {this.props.selectedSquare}
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
      moveHistory: ["empty"],
      stepNumber: 0,
      whiteIsMoving: true,
      clickNumber: 1,
      movingPiece: null,
      pieceLocation: null,
      canEnPassant: false,
    };
  }

  initializeBoard(){
    let tempArray = Array(64).fill("empty");
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

  Update(i, pieceCode) {
    const moveHistory = this.state.moveHistory.slice(0, this.state.stepNumber + 1);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let moveLabel = ""
    // Make moveHistory label (e4, Bh5, etc..)
    if (pieceCode == "WP" || pieceCode == "BP")
      moveLabel = this.colOf(i) + this.rowOf(i)
    else if (squares[i] != "empty")
      moveLabel = pieceCode[1] + "x" + this.colOf(i) + this.rowOf(i)
    else
      moveLabel = pieceCode[1] + this.colOf(i) + this.rowOf(i)

    // Handling castling
    if (pieceCode === "oo")
    {
      if (i === 6)
      {
        squares[6] = "BK"
        squares[5] = "BR"
        squares[7] = "empty"
      }
      else if (i === 62)
      {
        squares[61] = "WR"
        squares[62] = "WK"
        squares[63] = "empty"
      }
    }
    else if (pieceCode === "ooo")
    {
      if (i === 2)
      {
        squares[0] = "empty"
        squares[2] = "BK"
        squares[3] = "BR"
      }
      else if (i === 62)
      {
        squares[56] = "empty"
        squares[58] = "WK"
        squares[59] = "WR"
      }
    }
    else
      squares[i] = pieceCode;
    squares[this.state.pieceLocation] = "empty";

    // If en passant just happened, clear out the other pawn too
    if ((pieceCode === "WP" && (i<24 && i >=16) && (this.colOf(this.state.pieceLocation) != this.colOf(i)) && (this.state.canEnPassant)) ||
        (pieceCode === "BP" && (i<48 && i >=40) && (this.colOf(this.state.pieceLocation) != this.colOf(i)) && (this.state.canEnPassant)))
    {
      if (this.state.whiteIsMoving)
        squares[i + 8] = "empty"
      else
        squares[i - 8] = "empty"
    }

    let pLocation = this.state.pieceLocation
    this.setState({
      history: history.concat([
        {
          squares: squares,
        }
      ]),
      moveHistory: moveHistory.concat([moveLabel]),
      stepNumber: history.length,
      whiteIsMoving: !this.state.whiteIsMoving,
      clickNumber: 1,
      movingPiece: null,
      pieceLocation: null,
      canEnPassant: false
    });

    // Checking if en passant is possible
    if ((pieceCode === "WP" || pieceCode === "BP") && 
      ((pLocation < 56 && pLocation >=48) || (pLocation < 16 && pLocation >= 8)) &&
      ((i<32 && i>=24) || (i <40 && i >= 32))) // If en passant happened
      this.setState({canEnPassant: true})
    return;
  }

  // Given a side and a square i, tells if that side controls square i
  isControlledBy(side, i)
  {

  }

  // Implement possible moves for white
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // Main thing!
    let turn = null;
    if (this.state.whiteIsMoving) {turn = "White"}
    else {turn = "Black"}
    console.log(i + " is the coordinate")
    console.log("click number is " + this.state.clickNumber)
    // Handle if this is the first click
    if (this.state.clickNumber == 1)
    {
      if (squares[i] === "empty")
      {
        // If the first click is on an empty square, ignore it!
        return;
      }
      // It's white's turn
      else if (turn === "White")
      {
        this.firstWhiteHandleClick(i)
        return;
      }
      else 
      {
        this.firstBlackHandleClick(i)
        return;
      }
    }
    else
    {
      if (turn === "White")
      {
        this.secondWhiteHandleClick(i)
        return;
      }
      else 
      {
        this.secondBlackHandleClick(i)
        return;
      }
    }
  }

  firstWhiteHandleClick(i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // If it's a black piece, return
    if (this.isWhitePiece(squares[i]) === false)
    {
      return;
    }
    // If not, update the state so that it's on click 2
    else
    {
      this.setState({
        clickNumber: 2,
        movingPiece: squares[i],
        pieceLocation: i
      })
      console.log("Setting clickNumber to 2")
    }
    return;
  }

  secondWhiteHandleClick(i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // Note that i is the square that the user wishes to move the selected piece

    // First, check if it is on a white piece
    // If so, return because white pieces cannot move onto white pieces
    // note that castling is going to be implemented like this
    if (this.isWhitePiece(squares[i]) === true)
    {
      this.returnToFirstClick();
      return;
    }

    // If not, call the appropriate WPmoveProcess, QmoveProcess, etc...
    if (this.state.movingPiece === "WP")
      this.WPmoveProcess(i)
    else if (this.state.movingPiece === "WR")
      this.RmoveProcess(i)
    else if (this.state.movingPiece === "WN")
      this.NmoveProcess(i)
    else if (this.state.movingPiece === "WB")
      this.BmoveProcess(i)
    else if (this.state.movingPiece === "WQ")
      this.QmoveProcess(i)
    else if (this.state.movingPiece === "WK")
      this.KmoveProcess(i)
    return;
  }

  firstBlackHandleClick(i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // If it's a white piece, return
    console.log("piece code is " + squares[i])
    if (this.isWhitePiece(squares[i]))
    {
      return;
    }
    // If not, update the state so that it's on click 2
    else
    {
      this.setState({
        clickNumber: 2,
        movingPiece: squares[i],
        pieceLocation: i
      })
      console.log("Setting clickNumber to 2")
    }
    return;
  }

  secondBlackHandleClick(i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // Note that i is the square that the user wishes to move the selected piece

    // First, check if it is on a black piece
    // If so, return because black pieces cannot move onto black pieces
    // note that castling is going to be implemented like this
    if (this.isWhitePiece(squares[i]) === false && squares[i] != "empty")
    {
      console.log("returning here")
      this.returnToFirstClick();
      return;
    }

    // If not, call the appropriate BPmoveProcess, QmoveProcess, etc...
    if (this.state.movingPiece === "BP")
      this.BPmoveProcess(i)
    else if (this.state.movingPiece === "BR")
      this.RmoveProcess(i)
    else if (this.state.movingPiece === "BN")
      this.NmoveProcess(i)
    else if (this.state.movingPiece === "BB")
      this.BmoveProcess(i)
    else if (this.state.movingPiece === "BQ")
      this.QmoveProcess(i)
    else if (this.state.movingPiece === "BK")
      this.KmoveProcess(i)
    return;
  }

  isWhitePiece(pieceCode)
  {
    if (pieceCode === "WR" || 
    pieceCode === "WN" ||
    pieceCode === "WB" ||
    pieceCode === "WQ" ||
    pieceCode === "WK" ||
    pieceCode === "WP")
    return true;
    return false;
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      whiteIsMoving: (step % 2) === 0
    });
  }

  //////////////////////////////////////////////////////////////////////////////////////
  //  Move processing below ////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  RmoveProcess(i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let movingColor = this.state.whiteIsMoving
    // movingColor is true if it is white, and false if it is black
    
  
    let moveList = []
    // make a list of all possible rook moves at a given pieceLocation
    // Going up
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (this.state.pieceLocation - (n*8) >= 64 || this.state.pieceLocation - (n*8) < 0 || 
        this.colOf(this.state.pieceLocation - (n*8)) != this.colOf(this.state.pieceLocation))
        break;
      // If empty square
      if (squares[this.state.pieceLocation - (n*8)] == "empty")
      {
        moveList.push(this.state.pieceLocation - (n*8))
        continue;
      }
      // if own piece
      else if (this.isWhitePiece(squares[this.state.pieceLocation - (n*8)]) === movingColor)
        break;
      // if opponent piece
      else
      {
        moveList.push(this.state.pieceLocation - (n*8))
        break;
      }
    }

    // Going down
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (this.state.pieceLocation + (n*8) >= 64 || this.state.pieceLocation + (n*8) < 0 ||
        this.colOf(this.state.pieceLocation + (n*8)) != this.colOf(this.state.pieceLocation))
        break;
      // If empty square
      if (squares[this.state.pieceLocation + (n*8)] == "empty")
      {
        moveList.push(this.state.pieceLocation + (n*8))
        continue;
      }
      // if own piece
      else if (this.isWhitePiece(squares[this.state.pieceLocation + (n*8)]) === movingColor)
        break;
      // if opponent piece
      else
      {
        moveList.push(this.state.pieceLocation + (n*8))
        break;
      }
    }

    // Going left
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (this.state.pieceLocation - (n) >= 64 || this.state.pieceLocation - (n) < 0 || 
        this.rowOf(this.state.pieceLocation - n) != this.rowOf(this.state.pieceLocation))
        break;
      // If empty square
      if (squares[this.state.pieceLocation - (n)] == "empty")
      {
        moveList.push(this.state.pieceLocation - (n))
        continue;
      }
      // if own piece
      else if (this.isWhitePiece(squares[this.state.pieceLocation - (n)]) === movingColor)
        break;
      // if black piece
      else
      {
        moveList.push(this.state.pieceLocation - (n))
        break;
      }
    }
    // Going right
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (this.state.pieceLocation + (n) >= 64 || this.state.pieceLocation + (n) < 0 || 
        this.rowOf(this.state.pieceLocation + n) != this.rowOf(this.state.pieceLocation))
        break;
      // If empty square
      if (squares[this.state.pieceLocation + (n)] == "empty")
      {
        moveList.push(this.state.pieceLocation + (n))
        continue;
      }
      // if white piece
      else if (this.isWhitePiece(squares[this.state.pieceLocation + (n)]) === movingColor)
        break;
      // if black piece
      else
      {
        moveList.push(this.state.pieceLocation + (n))
        break;
      }
    }
    // now movelist is filled
    for (let n = 0; n < moveList.length; n++)
    {
      if (moveList[n] == i)
      {
        if (movingColor)
          this.Update(i, "WR")
        else
          this.Update(i, "BR")
        return;
      }
    }
    this.returnToFirstClick()
    return;
  }

  NmoveProcess(i)
  {
    // make a list of all possible knight moves at a given pieceLocation
    let distanceList = [6, 10, 15, 17]
    let moveList = []
    for (let n = 0; n < 4; n++)
    {
      let coordinate = this.state.pieceLocation - distanceList[n]
      if (coordinate < 64 && coordinate >= 0)
      {
        // Check if move is a valid move 
        if (n < 2)
        {
          if (this.rowOf(coordinate) - 1 == this.rowOf(this.state.pieceLocation))
            moveList.push(coordinate)
        }
        else
        {
          if (this.rowOf(coordinate) - 2 == this.rowOf(this.state.pieceLocation))
            moveList.push(coordinate)
        }
      }
      coordinate = distanceList[n] + this.state.pieceLocation
      if (coordinate < 64 && coordinate >= 0)
      {
        if (n < 2)
        {
          if (this.rowOf(coordinate) + 1 == this.rowOf(this.state.pieceLocation))
            moveList.push(coordinate)
        }
        else
        {
          if (this.rowOf(coordinate) + 2 == this.rowOf(this.state.pieceLocation))
            moveList.push(coordinate)
        }
      }
    }
    // now, have a moveList
    console.log(moveList)
    for (let n = 0; n < moveList.length; n++)
    {
      if (moveList[n] == i)
      {
        if (this.state.whiteIsMoving)
          this.Update(i, "WN")
        else
          this.Update(i, "BN")
        return;
      }
    }
    this.returnToFirstClick();
    return;
  }

  BmoveProcess(i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let movingColor = this.state.whiteIsMoving
    // movingColor is true if it is white, and false if it is black

    let moveList = []
    // make a list of all possible bishop moves at a given pieceLocation
    // Going up-left
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (this.state.pieceLocation - (n*9) >= 64 || this.state.pieceLocation - (n*9) < 0 || 
        this.backSlashDiagOf(this.state.pieceLocation - (n*9)) != this.backSlashDiagOf(this.state.pieceLocation))
        break;
      // If empty square
      if (squares[this.state.pieceLocation - (n*9)] == "empty")
      {
        moveList.push(this.state.pieceLocation - (n*9))
        continue;
      }
      // if own color
      else if (this.isWhitePiece(squares[this.state.pieceLocation - (n*9)]) === movingColor)
        break;
      // if opponent color
      else
      {
        moveList.push(this.state.pieceLocation - (n*9))
        break;
      }
    }

    // Going down-right
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (this.state.pieceLocation + (n*9) >= 64 || this.state.pieceLocation + (n*9) < 0 || 
        this.backSlashDiagOf(this.state.pieceLocation + (n*9)) != this.backSlashDiagOf(this.state.pieceLocation))
        break;
      // If empty square
      if (squares[this.state.pieceLocation + (n*9)] == "empty")
      {
        moveList.push(this.state.pieceLocation + (n*9))
        continue;
      }
      // if own color
      else if (this.isWhitePiece(squares[this.state.pieceLocation + (n*9)]) === movingColor)
        break;
      // if other color
      else
      {
        moveList.push(this.state.pieceLocation + (n*9))
        break;
      }
    }

    // Going up-right
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (this.state.pieceLocation - (n*7) >= 64 || this.state.pieceLocation - (n*7) < 0 || 
        this.forwardSlashDiagOf(this.state.pieceLocation - (n*7)) != this.forwardSlashDiagOf(this.state.pieceLocation))
        break;
      // If empty square
      if (squares[this.state.pieceLocation - (n*7)] == "empty")
      {
        moveList.push(this.state.pieceLocation - (n*7))
        continue;
      }
      // if own color
      else if (this.isWhitePiece(squares[this.state.pieceLocation - (n*7)]) === movingColor)
        break;
      // if empty color
      else
      {
        moveList.push(this.state.pieceLocation - (n*7))
        break;
      }
    }
    // Going down-left
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (this.state.pieceLocation + (n*7) >= 64 || this.state.pieceLocation + (n*7) < 0 ||
        this.forwardSlashDiagOf(this.state.pieceLocation + (n*7)) != this.forwardSlashDiagOf(this.state.pieceLocation))
        break;
      // If empty square
      if (squares[this.state.pieceLocation + (n*7)] == "empty")
      {
        moveList.push(this.state.pieceLocation + (n*7))
        continue;
      }
      // if own color
      else if (this.isWhitePiece(squares[this.state.pieceLocation + (n*7)]) === movingColor)
        break;
      // if opponent color
      else
      {
        moveList.push(this.state.pieceLocation + (n*7))
        break;
      }
    }
    console.log(moveList)
    // now movelist is filled
    for (let n = 0; n < moveList.length; n++)
    {
      if (moveList[n] == i)
      {
        if (movingColor)
          this.Update(i, "WB")
        else
          this.Update(i, "BB")
        return;
      }
    }
    this.returnToFirstClick()
    return;
  }

  QmoveProcess(i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let movingColor = this.state.whiteIsMoving
    // movingColor is true if it is white, and false if it is black

    let moveList = []
    // make a list of all possible Queen moves at a given pieceLocation
    // Going up-left
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (this.state.pieceLocation - (n*9) >= 64 || this.state.pieceLocation - (n*9) < 0 || 
        this.backSlashDiagOf(this.state.pieceLocation - (n*9)) != this.backSlashDiagOf(this.state.pieceLocation))
        break;
      // If empty square
      if (squares[this.state.pieceLocation - (n*9)] == "empty")
      {
        moveList.push(this.state.pieceLocation - (n*9))
        continue;
      }
      // if own color
      else if (this.isWhitePiece(squares[this.state.pieceLocation - (n*9)]) === movingColor)
        break;
      // if opponent color
      else
      {
        moveList.push(this.state.pieceLocation - (n*9))
        break;
      }
    }

    // Going down-right
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (this.state.pieceLocation + (n*9) >= 64 || this.state.pieceLocation + (n*9) < 0 || 
        this.backSlashDiagOf(this.state.pieceLocation + (n*9)) != this.backSlashDiagOf(this.state.pieceLocation))
        break;
      // If empty square
      if (squares[this.state.pieceLocation + (n*9)] == "empty")
      {
        moveList.push(this.state.pieceLocation + (n*9))
        continue;
      }
      // if own color
      else if (this.isWhitePiece(squares[this.state.pieceLocation + (n*9)]) === movingColor)
        break;
      // if other color
      else
      {
        moveList.push(this.state.pieceLocation + (n*9))
        break;
      }
    }

    // Going up-right
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (this.state.pieceLocation - (n*7) >= 64 || this.state.pieceLocation - (n*7) < 0 || 
        this.forwardSlashDiagOf(this.state.pieceLocation - (n*7)) != this.forwardSlashDiagOf(this.state.pieceLocation))
        break;
      // If empty square
      if (squares[this.state.pieceLocation - (n*7)] == "empty")
      {
        moveList.push(this.state.pieceLocation - (n*7))
        continue;
      }
      // if own color
      else if (this.isWhitePiece(squares[this.state.pieceLocation - (n*7)]) === movingColor)
        break;
      // if empty color
      else
      {
        moveList.push(this.state.pieceLocation - (n*7))
        break;
      }
    }
    // Going down-left
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (this.state.pieceLocation + (n*7) >= 64 || this.state.pieceLocation + (n*7) < 0 ||
        this.forwardSlashDiagOf(this.state.pieceLocation + (n*7)) != this.forwardSlashDiagOf(this.state.pieceLocation))
        break;
      // If empty square
      if (squares[this.state.pieceLocation + (n*7)] == "empty")
      {
        moveList.push(this.state.pieceLocation + (n*7))
        continue;
      }
      // if own color
      else if (this.isWhitePiece(squares[this.state.pieceLocation + (n*7)]) === movingColor)
        break;
      // if opponent color
      else
      {
        moveList.push(this.state.pieceLocation + (n*7))
        break;
      }
    }
    // Going up
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (this.state.pieceLocation - (n*8) >= 64 || this.state.pieceLocation - (n*8) < 0 || 
        this.colOf(this.state.pieceLocation - (n*8)) != this.colOf(this.state.pieceLocation))
        break;
      // If empty square
      if (squares[this.state.pieceLocation - (n*8)] == "empty")
      {
        moveList.push(this.state.pieceLocation - (n*8))
        continue;
      }
      // if own piece
      else if (this.isWhitePiece(squares[this.state.pieceLocation - (n*8)]) === movingColor)
        break;
      // if opponent piece
      else
      {
        moveList.push(this.state.pieceLocation - (n*8))
        break;
      }
    }

    // Going down
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (this.state.pieceLocation + (n*8) >= 64 || this.state.pieceLocation + (n*8) < 0 ||
        this.colOf(this.state.pieceLocation + (n*8)) != this.colOf(this.state.pieceLocation))
        break;
      // If empty square
      if (squares[this.state.pieceLocation + (n*8)] == "empty")
      {
        moveList.push(this.state.pieceLocation + (n*8))
        continue;
      }
      // if own piece
      else if (this.isWhitePiece(squares[this.state.pieceLocation + (n*8)]) === movingColor)
        break;
      // if opponent piece
      else
      {
        moveList.push(this.state.pieceLocation + (n*8))
        break;
      }
    }

    // Going left
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (this.state.pieceLocation - (n) >= 64 || this.state.pieceLocation - (n) < 0 || 
        this.rowOf(this.state.pieceLocation - n) != this.rowOf(this.state.pieceLocation))
        break;
      // If empty square
      if (squares[this.state.pieceLocation - (n)] == "empty")
      {
        moveList.push(this.state.pieceLocation - (n))
        continue;
      }
      // if own piece
      else if (this.isWhitePiece(squares[this.state.pieceLocation - (n)]) === movingColor)
        break;
      // if black piece
      else
      {
        moveList.push(this.state.pieceLocation - (n))
        break;
      }
    }
    // Going right
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (this.state.pieceLocation + (n) >= 64 || this.state.pieceLocation + (n) < 0 || 
        this.rowOf(this.state.pieceLocation + n) != this.rowOf(this.state.pieceLocation))
        break;
      // If empty square
      if (squares[this.state.pieceLocation + (n)] == "empty")
      {
        moveList.push(this.state.pieceLocation + (n))
        continue;
      }
      // if white piece
      else if (this.isWhitePiece(squares[this.state.pieceLocation + (n)]) === movingColor)
        break;
      // if black piece
      else
      {
        moveList.push(this.state.pieceLocation + (n))
        break;
      }
    }
    // now movelist is filled
    for (let n = 0; n < moveList.length; n++)
    {
      if (moveList[n] == i)
      {
        if (movingColor)
          this.Update(i, "WQ")
        else
          this.Update(i, "BQ")
        return;
      }
    }
    this.returnToFirstClick()
    return;
  }

  KmoveProcess(i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let movingColor = this.state.whiteIsMoving
    // moving color tells what color king is moving

    let possibleDistances = [1, 7, 8, 9]
    let moveList = []
    // make a list of all possible King moves at a given pieceLocation
    for (let n = 0; n < 4; n++)
    {
      let coordinate = this.state.pieceLocation - possibleDistances[n]
      if (coordinate >= 0 && coordinate < 64)
        moveList.push(coordinate)
      coordinate = this.state.pieceLocation + possibleDistances[n]
      if (coordinate >= 0 && coordinate < 64)
        moveList.push(coordinate)
    }
    
    for (let n = 0; n < moveList.length; n++)
    {
      if (moveList[n] == i)
      {
        if (movingColor)
          this.Update(i, "WK")
        else
          this.Update(i, "BK")
        return;
      }
    }

    // Check for castling
    if (movingColor) // If the color is white
    {
      if (i === 58) // If queenside castling
      {
        if (squares[57] === "empty" && squares[58] === "empty" && squares[59] === "empty" && squares[56] === "WR")
        {
          this.Update(i, "ooo")
        }
      }
      else if (i === 62)
      {
        if (squares[61] === "empty" && squares[62] === "empty" && squares[63] === "WR")
        {
          this.Update(i, "oo")
        }
      }
    }
    else
    {
      if (i === 2) // If queenside castling
      {
        if (squares[1] === "empty" && squares[2] === "empty" && squares[3] === "empty" && squares[0] === "BR")
        {
          this.Update(i, "ooo")
        }
      }
      else if (i === 6)
      {
        if (squares[5] === "empty" && squares[6] === "empty" && squares[7] === "BR")
        {
          this.Update(i, "oo")
        }
      }
    }

    this.returnToFirstClick()
    return;
    
  }

  WPmoveProcess(i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // make a list of all possible pawn moves at a given pieceLocation, including captures
    //    Then, check if the clicked is in moveList
    //     if not, return to click one
    // if it is one of these, check if it is either 8 or 16
    //   if it is, make the move!
    //   if it is a capture, check if there is a black piece there
    //   if there is, capture!
    //   if not, return to click one
    let moveList = []
    if (this.state.pieceLocation < 56 && this.state.pieceLocation >= 48)
    {
      for (let n = 1; n < 3; n++)
      {
        if (squares[this.state.pieceLocation - (n*8)] == "empty")
          moveList.push(this.state.pieceLocation - (n*8))
        else
          break;
      }
    }
    else
    {
      if (squares[this.state.pieceLocation - 8] == "empty")
        moveList.push(this.state.pieceLocation - 8)
    }
    moveList.push(this.state.pieceLocation - 7)
    moveList.push(this.state.pieceLocation - 9)
    // Movelist is full of all possible moves, check if i is one of these
    let isValid = false
    console.log("i is " + i)
    console.log(moveList)
    for (let n = 0; n < moveList.length; n++)
    {
      if (moveList[n] === i)
      {
        isValid = true;
        break;
      }
    }
    // if the click is not a valid move, return!
    if (isValid === false)
    {
      this.returnToFirstClick()
      return;
    }

    // if the click is a move, do the move!
    if (i == (this.state.pieceLocation - 8) || i == (this.state.pieceLocation - 16))
    {
      this.Update(i, "WP")
      return;
    }

    // this means the click was a capture
    if (squares[i] != "empty")
    {
      this.Update(i, "WP")
    }
    else if (this.state.canEnPassant) // check for en passant
    {
      if (i < 24 && i >= 16 && squares[i + 8] === "BP")
        this.Update(i, "WP")
    }
    else // no piece to capture and no en passant
    {
      console.log("there is no piece to capture")
      this.returnToFirstClick()
      return;
    }
  }

  BPmoveProcess(i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // make a list of all possible pawn moves at a given pieceLocation, including captures
    //    Then, check if the clicked is in moveList
    //     if not, return to click one
    // if it is one of these, check if it is either 8 or 16
    //   if it is, make the move!
    //   if it is a capture, check if there is a black piece there
    //   if there is, capture!
    //   if not, return to click one
    let moveList = []
    if (this.state.pieceLocation < 16 && this.state.pieceLocation >= 8)
    {
      for (let n = 1; n < 3; n++)
      {
        if (squares[this.state.pieceLocation + (n*8)] == "empty")
          moveList.push(this.state.pieceLocation + (n*8))
        else
          break;
      }
    }
    else
    {
      if (squares[this.state.pieceLocation + 8] == "empty")
        moveList.push(this.state.pieceLocation + 8)
    }
    moveList.push(this.state.pieceLocation + 7)
    moveList.push(this.state.pieceLocation + 9)
    // Movelist is full of all possible moves, check if i is one of these
    let isValid = false
    console.log(moveList)
    for (let n = 0; n < moveList.length; n++)
    {
      if (moveList[n] === i)
      {
        isValid = true;
        break;
      }
    }
    // if the click is not a valid move, return!
    if (isValid === false)
    {
      this.returnToFirstClick()
      return;
    }

    // if the click is a move, do the move!
    if (i == (this.state.pieceLocation + 8) || i == (this.state.pieceLocation + 16))
    {
      this.Update(i, "BP")
      return;
    }

    // this means the click was a capture
    if (squares[i] != "empty")
    {
      this.Update(i, "BP")
    }
    else
    {
      console.log("there is no piece to capture")
      this.returnToFirstClick()
      return;
    }
  }

  colOf(i)
  {
    if (i % 8 == 0)
      return "a"
    else if (i % 8 == 1)
      return "b"
    else if (i % 8 == 2)
      return "c"
    else if (i % 8 == 3)
      return "d"
    else if (i % 8 == 4)
      return "e"
    else if (i % 8 == 5)
      return "f"
    else if (i % 8 == 6)
      return "g"
    else if (i % 8 == 7)
      return "h"
    else
      console.log("invalid piece location")
    return;
  }
  // Given a piece location, return the row it is in
  rowOf(i)
  {
    return (8 - Math.floor(i/8))
  }

  forwardSlashDiagOf(i)
  {
    if (i == 0)
      return "a8"
    if (i == 8 || i == 1)
      return "a7-b8"
    if (i == 16 || i == 9 || i == 2)
      return "a6-c8"
    if (i == 24 || i == 17 || i == 10 || i == 3)
      return "a5-d8"
    if (i == 32 || i == 25 || i == 18 || i == 11 || i == 4)
      return "a4-e8"
    if (i == 40 || i == 33 || i == 26 || i == 19 || i == 12 || i == 5)
      return "a3-f8"
    if (i == 48 || i == 41 || i == 34 || i == 27 || i == 20 || i == 13 || i == 6)
      return "a2-g8"
    if (i == 56 || i == 49 || i == 42 || i == 35 || i == 28 || i == 21 || i == 14 || i == 7)
      return "a1-h8"
    if (i == 57 || i == 50 || i == 43 || i == 36 || i == 29 || i == 22 || i == 15)
      return "b1-h7"
    if (i == 58 || i == 51 || i == 44 || i == 37 || i == 30 || i == 23)
      return "c1-h6"
    if (i == 59 || i == 52 || i == 45 || i == 38 || i == 31)
      return "d1-h5"
    if (i == 60 || i == 53 || i == 46 || i == 39)
      return "e1-h4"
    if (i == 61 || i == 54 || i == 47)
      return "f1-h3"
    if (i == 62 || i == 55)
      return "g1-h2"
    if (i == 63)
      return "h1"
  }

  backSlashDiagOf(i)
  {
    if (i == 7)
      return "h8"
    if (i == 6 || i == 15)
      return "g8-h7"
    if (i == 5 || i == 14 || i == 23)
      return "a6-c8"
    if (i == 4 || i == 13 || i == 22 || i == 31)
      return "a5-d8"
    if (i == 3 || i == 12 || i == 21 || i == 30 || i == 39)
      return "a4-e8"
    if (i == 2 || i == 11 || i == 20 || i == 29 || i == 38 || i == 47)
      return "a3-f8"
    if (i == 1 || i == 10 || i == 19 || i == 28 || i == 37 || i == 46 || i == 55)
      return "a2-g8"
    if (i == 0 || i == 9  || i == 18 || i == 27 || i == 36 || i == 45 || i == 54 || i == 63)
      return "a1-h8"
    if (i == 8 || i == 17 || i == 26 || i == 35 || i == 44 || i == 53 || i == 62)
      return "b1-h7"
    if (i == 16 || i == 25 || i == 34 || i == 43 || i == 52 || i == 61)
      return "c1-h6"
    if (i == 24 || i == 33 || i == 42 || i == 51 || i == 60)
      return "d1-h5"
    if (i == 32 || i == 41 || i == 50 || i == 59)
      return "e1-h4"
    if (i == 40 || i == 49 || i == 58)
      return "f1-h3"
    if (i == 48 || i == 57)
      return "g1-h2"
    if (i == 56)
      return "h1"
  }

  // Returns to the first click from the second
  returnToFirstClick()
  {
    this.setState({
      clickNumber: 1,
      movingPiece: null,
      pieceLocation: null
    })
    console.log("Setting clickNumber to 1")
  }

  ///////////////////////////////////////////////////////////////////////////////////////
  // End of move processsing ////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  render() {
    const moveHistory = this.state.moveHistory;
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      console.log("move is " + move)
      let desc = moveHistory[move]
      console.log(moveHistory +" is moveHistory")

      // Figure out how to get every new turn to be on a new line

      if (move === 0)
      {
        return <div><button onClick={() => this.jumpTo(move)}>Go to game start</button></div>
      }
      else
      {
        let moveNum = Math.ceil(move / 2)
        if (move % 2 === 1)
        {
          moveNum = moveNum + ". "
          desc = moveNum + desc
          if (typeof moveHistory[move + 1] != "string")
            return <div><button onClick={() => this.jumpTo(move)}>{desc}</button></div>
        }
        else
        {
          moveNum = moveNum + ". "
          let desc1 = moveNum + moveHistory[move-1]
          return (<div><button onClick={() => this.jumpTo(move - 1)}>{desc1}</button>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </div>)
        }
      }
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = (this.state.whiteIsMoving ? "White" : "Black") + " to move.";
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares}
            onClick={i => this.handleClick(i)}
            selectedSquare= {this.state.pieceLocation}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>{moves}</div>
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

