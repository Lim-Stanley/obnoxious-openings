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
//     (easy, just make canEnpassant an array)
// Implement calculateWinner
// Implement pawn promotion
// Implement checks
// Implement no castling out of checks
// Implement no castling through a square that is being controlled by opponent
// Implement limiting king moves to not suicide itself
// Implement a board switch (play from black side)
// Implement drag and drop
// BUG: have a piece selected, go back in history to the other color's turn, and that piece turns into the other color's piece when
//    you move it


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
      inCheck: [false],
      blackKingLocation: 4,
      whiteKingLocation: 60
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
    const inCheck = this.state.inCheck.slice(0, this.state.stepNumber + 1);
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
      moveLabel = "O-O"
      if (i === 6)
      {
        squares[6] = "BK"
        squares[5] = "BR"
        squares[7] = "empty"
        this.setState({blackKingLocation: 6})
      }
      else if (i === 62)
      {
        console.log("i'm in here")
        squares[61] = "WR"
        squares[62] = "WK"
        squares[63] = "empty"
        this.setState({whiteKingLocation: 62})
      }
    }
    else if (pieceCode === "ooo")
    {
      moveLabel = "O-O-O"
      if (i === 2)
      {
        squares[0] = "empty"
        squares[2] = "BK"
        squares[3] = "BR"
        this.setState({blackKingLocation: 2})
      }
      else if (i === 58)
      {
        squares[56] = "empty"
        squares[58] = "WK"
        squares[59] = "WR"
        this.setState({whiteKingLocation: 58})
      }
    }
    else if (pieceCode === "WK")
    {
      this.setState({whiteKingLocation: i})
      squares[i] = pieceCode;
    }
    else if (pieceCode === "BK")
    {
      this.setState({blackKingLocation: i})
      squares[i] = pieceCode;
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

    let inCheckBool = false;
    // Check if in check
    if (this.state.whiteIsMoving)
    {
      if (this.controlledBy("White", this.state.blackKingLocation, squares).length !== 0)
      {
        inCheckBool = true;
        console.log("Black is in Check")
      }
    }
    else
    {
      if (this.controlledBy("Black", this.state.whiteKingLocation, squares).length !== 0)
      {
        inCheckBool = true;
        console.log("White is in Check")
      }
    }

    let pLocation = this.state.pieceLocation
    this.setState({
      history: history.concat([
        {
          squares: squares,
        }
      ]),
      moveHistory: moveHistory.concat([moveLabel]),
      inCheck: inCheck.concat([inCheckBool]),
      stepNumber: history.length,
      whiteIsMoving: !this.state.whiteIsMoving,
      clickNumber: 1,
      movingPiece: null,
      pieceLocation: null,
      canEnPassant: false,
    });

    // Checking if en passant is possible
    if ((pieceCode === "WP" || pieceCode === "BP") && 
      ((pLocation < 56 && pLocation >=48) || (pLocation < 16 && pLocation >= 8)) &&
      ((i<32 && i>=24) || (i <40 && i >= 32))) // If en passant happened
      this.setState({canEnPassant: true})
    return;
  }

  // Given a side (white/black) and a square i, tells if that side controls square i
  controlledBy(side, i, squares)
  {
    let color = side[0]
    let colorBool = false
    if (color === "W")
      colorBool = true
    let controllingList = []
    // For every piece on the board, if it is on the side, calculate the squares it controls
    for (let n = 0; n < 64; n++)
    {
      if (squares[n][0] !== color)
        continue;
      let controlList = []
      // console.log("looking at square " + n)
      // Now, we know squares[n] is of the specified color
      switch(squares[n][1]){
        case 'P':
          controlList = controlList.concat(this.PcontrolList(n, colorBool))
          break;
        case 'R':
          controlList = controlList.concat(this.RcontrolList(n, colorBool, squares))
          break;
        case 'B':
          controlList = controlList.concat(this.BcontrolList(n, colorBool, squares))
          break;
        case 'Q':
          controlList = controlList.concat(this.QcontrolList(n, colorBool, squares))
          break;
        case 'K':
          controlList = controlList.concat(this.KcontrolList(n))
          break;
        case 'N':
          controlList = controlList.concat(this.NcontrolList(n))
          break;
      }
      for (let h = 0; h < controlList.length; h++)
      {
        if (controlList[h] === i)
        {
          controllingList.push(n)
          break;
        }
      }
    }
    return controllingList;
  }

  // Implement possible moves for white
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (this.calculateWinner(current.squares, this.state.whiteIsMoving))
      return;
    // Main thing!
    let turn = null;
    if (this.state.whiteIsMoving) {turn = "White"}
    else {turn = "Black"}
    console.log(i + " is the coordinate")
    // Handle if this is the first click
    if (this.state.clickNumber == 1)
    {
      if (squares[i] === "empty")
      {
        // If the first click is on an empty square, ignore it!
        return;
      }
      else 
      {
        this.firstHandleClick(i)
        return;
      }
    }
    else
    {
      this.secondHandleClick(i)
      return;
    }
  }

  firstHandleClick(i)
  {
    const inCheck = this.state.inCheck.slice(0, this.state.stepNumber + 1);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // If the first piece doesn't match the turn, return
    if (this.isWhitePiece(squares[i]) && this.state.whiteIsMoving === false)
      return;
    else if (this.isWhitePiece(squares[i]) === false && this.state.whiteIsMoving)
      return;
    else if (inCheck.at(-1) && !((this.state.whiteIsMoving && i === this.state.whiteKingLocation) || 
      (!this.state.whiteIsMoving && i === this.state.blackKingLocation)))
      return;
    // If not, update the state so that it's on click 2
    else
    {
      this.setState({
        clickNumber: 2,
        movingPiece: squares[i],
        pieceLocation: i
      })
    }
    return;
  }

  secondHandleClick(i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // Note that i is the square that the user wishes to move the selected piece

    // First, check if it is on the same color piece. If so, return, because 
    // pieces cannot move on their own pieces
    if (this.isWhitePiece(squares[i]) && this.state.whiteIsMoving)
    {
      this.returnToFirstClick();
      return;
    }
    else if (!this.isWhitePiece(squares[i]) && !this.state.whiteIsMoving && squares[i] != "empty")
    {
      this.returnToFirstClick();
      return;
    }
    // If not, call the appropriate PmoveProcess, QmoveProcess, etc...
    if (this.state.movingPiece[1] === "P")
      this.PmoveProcess(i)
    else if (this.state.movingPiece[1] === "R")
      this.RmoveProcess(i)
    else if (this.state.movingPiece[1] === "N")
      this.NmoveProcess(i)
    else if (this.state.movingPiece[1] === "B")
      this.BmoveProcess(i)
    else if (this.state.movingPiece[1] === "Q")
      this.QmoveProcess(i)
    else if (this.state.movingPiece[1] === "K")
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
      whiteIsMoving: (step % 2) === 0,
      clickNumber: 1
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
    
    let moveList = this.RcontrolList(this.state.pieceLocation, movingColor, squares)

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

  // make a list of all possible rook moves at a given pieceLocation
  RcontrolList(i, movingColor, squares)
  {
    let moveList = []
    // Going up
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (i - (n*8) >= 64 || i - (n*8) < 0 || 
        this.colOf(i - (n*8)) != this.colOf(i))
        break;
      // If empty square
      if (squares[i - (n*8)] == "empty")
      {
        moveList.push(i - (n*8))
        continue;
      }
      // if own piece
      else if (this.isWhitePiece(squares[i - (n*8)]) === movingColor)
        break;
      // if opponent piece
      else
      {
        moveList.push(i - (n*8))
        break;
      }
    }

    // Going down
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (i + (n*8) >= 64 || i + (n*8) < 0 ||
        this.colOf(i + (n*8)) != this.colOf(i))
        break;
      // If empty square
      if (squares[i + (n*8)] == "empty")
      {
        moveList.push(i + (n*8))
        continue;
      }
      // if own piece
      else if (this.isWhitePiece(squares[i + (n*8)]) === movingColor)
        break;
      // if opponent piece
      else
      {
        moveList.push(i + (n*8))
        break;
      }
    }

    // Going left
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (i - (n) >= 64 || i - (n) < 0 || 
        this.rowOf(i - n) != this.rowOf(i))
        break;
      // If empty square
      if (squares[i - (n)] == "empty")
      {
        moveList.push(i - (n))
        continue;
      }
      // if own piece
      else if (this.isWhitePiece(squares[i - (n)]) === movingColor)
        break;
      // if black piece
      else
      {
        moveList.push(i - (n))
        break;
      }
    }
    // Going right
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (i + (n) >= 64 || i + (n) < 0 || 
        this.rowOf(i + n) != this.rowOf(i))
        break;
      // If empty square
      if (squares[i + (n)] == "empty")
      {
        moveList.push(i + (n))
        continue;
      }
      // if white piece
      else if (this.isWhitePiece(squares[i + (n)]) === movingColor)
        break;
      // if black piece
      else
      {
        moveList.push(i + (n))
        break;
      }
    }
    return moveList
  }

  NmoveProcess(i)
  {
    // make a list of all possible knight moves at a given pieceLocation
    let moveList = this.NcontrolList(this.state.pieceLocation)

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

  NcontrolList(i)
  {
    let distanceList = [6, 10, 15, 17]
    let moveList = []
    for (let n = 0; n < 4; n++)
    {
      let coordinate = i - distanceList[n]
      if (coordinate < 64 && coordinate >= 0)
      {
        // Check if move is a valid move 
        if (n < 2)
        {
          if (this.rowOf(coordinate) - 1 == this.rowOf(i))
            moveList.push(coordinate)
        }
        else
        {
          if (this.rowOf(coordinate) - 2 == this.rowOf(i))
            moveList.push(coordinate)
        }
      }
      coordinate = distanceList[n] + i
      if (coordinate < 64 && coordinate >= 0)
      {
        if (n < 2)
        {
          if (this.rowOf(coordinate) + 1 == this.rowOf(i))
            moveList.push(coordinate)
        }
        else
        {
          if (this.rowOf(coordinate) + 2 == this.rowOf(i))
            moveList.push(coordinate)
        }
      }
    }
    return moveList
  }

  BmoveProcess(i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let movingColor = this.state.whiteIsMoving
    // movingColor is true if it is white, and false if it is black

    let moveList = this.BcontrolList(this.state.pieceLocation, movingColor, squares)
    // make a list of all possible bishop moves at a given pieceLocation
    
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

  BcontrolList(i, movingColor, squares)
  {
    let moveList = []
    // Going up-left
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (i - (n*9) >= 64 || i - (n*9) < 0 || 
        this.backSlashDiagOf(i - (n*9)) != this.backSlashDiagOf(i))
        break;
      // If empty square
      if (squares[i - (n*9)] == "empty")
      {
        moveList.push(i - (n*9))
        continue;
      }
      // if own color
      else if (this.isWhitePiece(squares[i - (n*9)]) === movingColor)
        break;
      // if opponent color
      else
      {
        moveList.push(i - (n*9))
        break;
      }
    }

    // Going down-right
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (i + (n*9) >= 64 || i + (n*9) < 0 || 
        this.backSlashDiagOf(i + (n*9)) != this.backSlashDiagOf(i))
        break;
      // If empty square
      if (squares[i + (n*9)] == "empty")
      {
        moveList.push(i + (n*9))
        continue;
      }
      // if own color
      else if (this.isWhitePiece(squares[i + (n*9)]) === movingColor)
        break;
      // if other color
      else
      {
        moveList.push(i + (n*9))
        break;
      }
    }

    // Going up-right
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (i - (n*7) >= 64 || i - (n*7) < 0 || 
        this.forwardSlashDiagOf(i - (n*7)) != this.forwardSlashDiagOf(i))
        break;
      // If empty square
      if (squares[i - (n*7)] == "empty")
      {
        moveList.push(i - (n*7))
        continue;
      }
      // if own color
      else if (this.isWhitePiece(squares[i - (n*7)]) === movingColor)
        break;
      // if empty color
      else
      {
        moveList.push(i - (n*7))
        break;
      }
    }
    // Going down-left
    for (let n = 1; n < 8; n++)
    {
      // If off the board, break
      if (i + (n*7) >= 64 || i + (n*7) < 0 ||
        this.forwardSlashDiagOf(i + (n*7)) != this.forwardSlashDiagOf(i))
        break;
      // If empty square
      if (squares[i + (n*7)] == "empty")
      {
        moveList.push(i + (n*7))
        continue;
      }
      // if own color
      else if (this.isWhitePiece(squares[i + (n*7)]) === movingColor)
        break;
      // if opponent color
      else
      {
        moveList.push(i + (n*7))
        break;
      }
    }
    return moveList
  }

  QmoveProcess(i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let movingColor = this.state.whiteIsMoving
    // movingColor is true if it is white, and false if it is black

    let moveList = this.QcontrolList(this.state.pieceLocation, movingColor, squares)
    // make a list of all possible Queen moves at a given pieceLocation
    console.log(moveList)
    
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

  QcontrolList(i, movingColor, squares)
  {
    let tempList = []
    tempList = tempList.concat(this.BcontrolList(i, movingColor, squares))
    tempList = tempList.concat(this.RcontrolList(i, movingColor, squares))
    return tempList
  }

  KmoveProcess(i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let movingColor = this.state.whiteIsMoving
    // moving color tells what color king is moving

    // Makes a list of possible moves
    let moveList = this.KcontrolList(this.state.pieceLocation)
    console.log(moveList)
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

  KcontrolList(i)
  {
    let possibleDistances = [1, 7, 8, 9]
    let moveList =[]
    for (let n = 0; n < 4; n++)
    {
      let coordinate = i - possibleDistances[n]
      if (coordinate >= 0 && coordinate < 64)
        moveList.push(coordinate)
      coordinate = i + possibleDistances[n]
      if (coordinate >= 0 && coordinate < 64)
        moveList.push(coordinate)
    }
    return moveList
  }

  PmoveProcess(i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let movingColor = this.state.whiteIsMoving
    // moving color tells what color pawn is moving

    // make a list of all possible pawn moves at a given pieceLocation, including captures
    //    Then, check if the clicked is in moveList
    //     if not, return to click one
    // if it is one of these, check if it is either 8 or 16
    //   if it is, make the move!
    //   if it is a capture, check if there is a black piece there
    //   if there is, capture!
    //   if not, return to click one
    let moveList = []
    if (movingColor)
    {
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
    }
    else
    {
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
    }
    moveList = moveList.concat(this.PcontrolList(this.state.pieceLocation, movingColor))
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
    if (movingColor)
    {
      if (i == (this.state.pieceLocation - 8) || i == (this.state.pieceLocation - 16))
      {
        this.Update(i, "WP")
        return;
      }
    }
    else
    {
      if (i == (this.state.pieceLocation + 8) || i == (this.state.pieceLocation + 16))
      {
        this.Update(i, "BP")
        return;
      }
    }

    // this means the click was a capture
    if (squares[i] != "empty" && movingColor)
    {
      this.Update(i, "WP")
    }
    else if (this.state.canEnPassant && movingColor) // check for en passant
    {
      if (i < 24 && i >= 16 && squares[i + 8] === "BP")
        this.Update(i, "WP")
    }
    else if (squares[i] != "empty" && movingColor === false)
    {
      this.Update(i, "BP")
    }
    else if (this.state.canEnPassant && movingColor === false)
    {
      if (i < 48 && i >= 40 && squares[i - 8] === "WP")
        this.Update(i, "BP")
    }
    else // no piece to capture and no en passant
    {
      console.log("there is no piece to capture")
      this.returnToFirstClick()
    }
    return;
  }

  PcontrolList(i, movingColor)
  {
    if (movingColor)
      return [i-7, i-9]
    else
      return [i+7, i+9]
  }

  PmoveList(i, movingColor)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let moveList = []
    if (movingColor)
    {
      if (i < 56 && i >= 48)
      {
        for (let n = 1; n < 3; n++)
        {
          if (squares[i - (n*8)] == "empty")
            moveList.push(i - (n*8))
          else
            break;
        }
      }
      else
      {
        if (squares[i - 8] == "empty")
          moveList.push(i - 8)
      }
    }
    else
    {
      if (i < 16 && i >= 8)
      {
        for (let n = 1; n < 3; n++)
        {
          if (squares[i + (n*8)] == "empty")
            moveList.push(i + (n*8))
          else
            break;
        }
      }
      else
      {
        if (squares[i + 8] == "empty")
          moveList.push(i + 8)
      }
    }
    return moveList
  }

  //  A function that, given two piece locations, a color, and a row, column, or diagonal, 
  //             determines if the color can block the check between the two pieces
  // Color is string
  canBeBlocked(location1, location2, color, direction)
  {
    // Determine all squares between the two pieces
    // use Squarelist, a function that takes any given direction and returns a list of all squares in that direction in order
    let squareList = this.makeSquareList(direction)
    let index1 = -1
    let index2 = -1
    for (let i = 0; i < squareList.length; i++)
    {
      if (squareList[i] === location1)
        index1 = i
      if (squareList[i] === location2)
        index2 = i
    }
    if (index1 < index2)
      squareList = squareList.slice(index1 + 1, index2)
    else
      squareList = squareList.slice(index2 + 1, index1)
    // With each square, run isBlockableSquare
    for (let i = 0; i < squareList.length; i++)
    {
      if (this.isBlockableSquare(color, i))
        return true;
    }
    return false;
  }
  
  // side is a string "white" or "black", and i is the square
  // Returns true or false
  isBlockableSquare(side, i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let color = side[0]
    // For every piece on the board, if it is on the side, calculate the squares it controls
    for (let n = 0; n < 64; n++)
    {
      if (squares[n][0] !== color)
        continue;
      let controlList = []
      // Now, we know squares[n] is of the specified color
      switch(squares[n][1]){
        case 'P':
          controlList = controlList.concat(this.PmoveList(n, this.state.whiteIsMoving)) // NEED TO CHANGE
          break;
        case 'R':
          controlList = controlList.concat(this.RcontrolList(n, this.state.whiteIsMoving, squares))
          break;
        case 'B':
          controlList = controlList.concat(this.BcontrolList(n, this.state.whiteIsMoving, squares))
          break;
        case 'Q':
          controlList = controlList.concat(this.QcontrolList(n, this.state.whiteIsMoving, squares))
          break;
        case 'N':
          controlList = controlList.concat(this.NcontrolList(n))
          break;
      }
      for (let n = 0; n < controlList.length; n++)
      {
        if (controlList[n] === i)
        {
          return true;
        }
      }
    }
    return false;
  }

  // a function that takes any given direction and returns a list of all squares in that direction in order
  makeSquareList(direction)
  {
    switch(direction){
      case "a":
        return [0, 8, 16, 24, 32, 40, 48, 56]
      case "b":
        return [1, 9, 17, 25, 33, 41, 49, 57]
      case "c":
        return [2, 10, 18, 26, 34, 42, 50, 58]
      case "d":
        return [3, 11, 19, 27, 35, 43, 51, 59]
      case "e":
        return [4, 12, 20, 28, 36, 44, 52, 60]
      case "f":
        return [5, 13, 21, 29, 37, 45, 53, 61]
      case "g":
        return [6, 14, 22, 30, 38, 46, 54, 62]
      case "h":
        return [7, 15, 23, 31, 39, 47, 55, 63]
      case "1":
        return [56, 57, 58, 59, 60, 61, 62, 63]
      case "2":
        return [48, 49, 50, 51, 52, 53, 54, 55]
      case "3":
        return [40, 41, 42, 43, 44, 45, 46, 47]
      case "4":
        return [32, 33, 34, 35, 36, 37, 38, 39]
      case "5":
        return [24, 25, 26, 27, 28, 29, 30, 31]
      case "6":
        return [16, 17, 18, 19, 20, 21, 22, 23]
      case "7":
        return [8, 9, 10, 11, 12, 13, 14, 15]
      case "8":
        return [0, 1, 2, 3, 4, 5, 6, 7]
      case "a6-c8":
        return [2, 9, 16]
      case "a5-d8":
        return [3, 10, 17, 24]
      case "a4-e8":
        return [4, 11, 18, 25, 32]
      case "a3-f8":
        return [5, 12, 19, 26, 33, 40]
      case "a2-g8":
        return [6, 13, 20, 27, 34, 41, 48]
      case "a1-h8":
        return [7, 14, 21, 28, 35, 42, 49, 56]
      case "b1-h7":
        return [15, 22, 29, 36, 43, 50, 57]
      case "c1-h6":
        return [23, 30, 37, 44, 51, 58]
      case "d1-h5":
        return [31, 38, 45, 52, 59]
      case "e1-h4":
        return [39, 46, 53, 60]
      case "f1-h3":
        return [47, 54, 61]
      case "f8-h6":
        return [5, 14, 23]
      case "e8-h5":
        return [4, 13, 22, 31]
      case "d8-h4":
        return [3, 12, 21, 30, 39]
      case "c8-h3":
        return [2, 11, 20, 29, 38, 47]
      case "b8-h2":
        return [1, 10, 19, 28, 37, 46, 55]
      case "a8-h1":
        return [0, 9, 18, 27, 36, 45, 54, 63]
      case "a7-g1":
        return [8, 17, 26, 35, 44, 53, 62]
      case "a6-f1":
        return [16, 25, 34, 43, 52, 61]
      case "a5-e1":
        return [24, 33, 42, 51, 60]
      case "a4-d1":
        return [32, 41, 50, 59]
      case "a3-c1":
        return [40, 49, 58]
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
      console.log("invalid piece location " + i)
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
      return "f8-h6"
    if (i == 4 || i == 13 || i == 22 || i == 31)
      return "e8-h5"
    if (i == 3 || i == 12 || i == 21 || i == 30 || i == 39)
      return "d8-h4"
    if (i == 2 || i == 11 || i == 20 || i == 29 || i == 38 || i == 47)
      return "c8-h3"
    if (i == 1 || i == 10 || i == 19 || i == 28 || i == 37 || i == 46 || i == 55)
      return "b8-h2"
    if (i == 0 || i == 9  || i == 18 || i == 27 || i == 36 || i == 45 || i == 54 || i == 63)
      return "a8-h1"
    if (i == 8 || i == 17 || i == 26 || i == 35 || i == 44 || i == 53 || i == 62)
      return "a7-g1"
    if (i == 16 || i == 25 || i == 34 || i == 43 || i == 52 || i == 61)
      return "a6-f1"
    if (i == 24 || i == 33 || i == 42 || i == 51 || i == 60)
      return "a5-e1"
    if (i == 32 || i == 41 || i == 50 || i == 59)
      return "a4-d1"
    if (i == 40 || i == 49 || i == 58)
      return "a3-c1"
    if (i == 48 || i == 57)
      return "a2-b1"
    if (i == 56)
      return "a1"
  }

  // Returns to the first click from the second
  returnToFirstClick()
  {
    this.setState({
      clickNumber: 1,
      movingPiece: null,
      pieceLocation: null
    })
  }

  ///////////////////////////////////////////////////////////////////////////////////////
  // End of move processsing ////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  // return true or false
  calculateWinner(squares, movingColor) {
  // Calculates if opponent won
  
  let ownColor = ""
  let opponentColor = ""
  // Get a list of all squares the king can move to
  let moveList = []
  let kingLocation = ""
  if (movingColor)
  {
    kingLocation = this.state.whiteKingLocation
    moveList = moveList.concat(this.KcontrolList(this.state.whiteKingLocation))
    ownColor = "White"
    opponentColor = "Black"
  }
  else
  {
    kingLocation = this.state.blackKingLocation
    moveList = moveList.concat(this.KcontrolList(this.state.blackKingLocation))
    ownColor = "Black"
    opponentColor = "White"
  }
  // For each square, check if it's own piece is there OR if it is controlled by an opponent piece
  //   if it is, remove it from the list, because the king cannot move there
  // If the list is not empty, return false, because the king can move and therefore there is no winner
  for (let i = 0; i < moveList.length;)
  {
    if (squares[moveList[i]][0] === ownColor[0] || this.controlledBy(opponentColor, moveList[i], squares).length !== 0)
    {
      moveList.splice(i, 1)
      continue;
    }
    i++
  }
  if (moveList.length != 0)
    return false;
  // So, check for blocks and captures
  // problem: How do i get information about who checked the king?
  let controllingPieces = this.controlledBy(opponentColor, kingLocation, squares)
  // If controlledBy returns a list of more than 1 element, then the opposite color of moving color won
  if (controllingPieces.length > 1)
    return true;

  // If not, see if the checking piece can be captured
  //    If it can be captured, then return false, because movingColor still has a possible move
  if (this.controlledBy(ownColor, controllingPieces[0], squares).length !== 0)
    return false;

  // Now, we know that the checking piece cannot be captured. If the checking piece is a pawn or knight, they win!
  if (squares[controllingPieces[0]][1] === "N" || squares[controllingPieces[0]][1] === "P")
    return true;

  //    Check if the line of sight can be blocked 
  //       Check if it is being checked on the same row, column, or diagonal
  let direction = ""
  if (this.rowOf(controllingPieces[0]) === this.rowOf(kingLocation))
    direction = this.rowOf(kingLocation)
  else if (this.colOf(controllingPieces[0] === this.colOf(kingLocation)))
    direction = this.colOf(kingLocation)
  else if (this.forwardSlashDiagOf(controllingPieces[0]) === this.forwardSlashDiagOf(kingLocation))
    direction = this.forwardSlashDiagOf(kingLocation)
  else if (this.backSlashDiagOf(controllingPieces[0] === this.backSlashDiagOf(kingLocation)))
    direction = this.backSlashDiagOf(kingLocation)    
  //         Then, run canBeBlocked(), a function that, given two piece locations, a color, and a row, column, or diagonal, 
  //             determines if the color can block the check between the two pieces
  //                Note that calculating pawn moves is where it can move, and not where it can capture when it is here
  //       if canBeBlocked is false, return true, because the color won!
  if (this.canBeBlocked(kingLocation, controllingPieces[0], ownColor, direction))
    return false
  return true;
}

  render() {
    const inCheck = this.state.inCheck.slice(0, this.state.stepNumber + 1);
    const moveHistory = this.state.moveHistory;
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const moves = history.map((step, move) => {
      let desc = moveHistory[move]

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
    let winner = false
    let winnerColor = ""
    if (inCheck.at(-1))
      winner = this.calculateWinner(current.squares, this.state.whiteIsMoving)
    let status;
    if (winner) {
      if (this.state.whiteIsMoving)
        winnerColor = "Black"
      else
        winnerColor = "White"
      status = "Winner: " + winnerColor;
    } else {
      status = (this.state.whiteIsMoving ? "White" : "Black") + " to move.";
      if (inCheck.at(-1))
        status = "Check! " + status
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
          <div className = "status">{status}</div>
          <div>{moves}</div>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
