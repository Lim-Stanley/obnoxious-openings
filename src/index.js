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

import enPassantSound from './Piece Sounds/En passant.mp3'

import clarinetC1 from './Piece Sounds/clarinet/clarinet_C4.mp3'
import clarinetD from './Piece Sounds/clarinet/clarinet_D4.mp3'
import clarinetE from './Piece Sounds/clarinet/clarinet_E4.mp3'
import clarinetF from './Piece Sounds/clarinet/clarinet_F4.mp3'
import clarinetG from './Piece Sounds/clarinet/clarinet_G4.mp3'
import clarinetA from './Piece Sounds/clarinet/clarinet_A4.mp3'
import clarinetB from './Piece Sounds/clarinet/clarinet_B4.mp3'
import clarinetC2 from './Piece Sounds/clarinet/clarinet_C5.mp3'

import fluteC1 from './Piece Sounds/flute/flute_C5.mp3'
import fluteD from './Piece Sounds/flute/flute_D5.mp3'
import fluteE from './Piece Sounds/flute/flute_E5.mp3'
import fluteF from './Piece Sounds/flute/flute_F5.mp3'
import fluteG from './Piece Sounds/flute/flute_G5.mp3'
import fluteA from './Piece Sounds/flute/flute_A5.mp3'
import fluteB from './Piece Sounds/flute/flute_B5.mp3'
import fluteC2 from './Piece Sounds/flute/flute_C6.mp3'

import tromboneC1 from './Piece Sounds/trombone/trombone_C3.mp3'
import tromboneD from './Piece Sounds/trombone/trombone_D3.mp3'
import tromboneE from './Piece Sounds/trombone/trombone_E3.mp3'
import tromboneF from './Piece Sounds/trombone/trombone_F3.mp3'
import tromboneG from './Piece Sounds/trombone/trombone_G3.mp3'
import tromboneA from './Piece Sounds/trombone/trombone_A3.mp3'
import tromboneB from './Piece Sounds/trombone/trombone_B3.mp3'
import tromboneC2 from './Piece Sounds/trombone/trombone_C4.mp3'

import trumpetC1 from './Piece Sounds/trumpet/trumpet_C4.mp3'
import trumpetD from './Piece Sounds/trumpet/trumpet_D4.mp3'
import trumpetE from './Piece Sounds/trumpet/trumpet_E4.mp3'
import trumpetF from './Piece Sounds/trumpet/trumpet_F4.mp3'
import trumpetG from './Piece Sounds/trumpet/trumpet_G4.mp3'
import trumpetA from './Piece Sounds/trumpet/trumpet_A4.mp3'
import trumpetB from './Piece Sounds/trumpet/trumpet_B4.mp3'
import trumpetC2 from './Piece Sounds/trumpet/trumpet_C5.mp3'

import tubaC1 from './Piece Sounds/tuba/tuba_C2.mp3'
import tubaD from './Piece Sounds/tuba/tuba_D2.mp3'
import tubaE from './Piece Sounds/tuba/tuba_E2.mp3'
import tubaF from './Piece Sounds/tuba/tuba_F2.mp3'
import tubaG from './Piece Sounds/tuba/tuba_G2.mp3'
import tubaA from './Piece Sounds/tuba/tuba_A2.mp3'
import tubaB from './Piece Sounds/tuba/tuba_B2.mp3'
import tubaC2 from './Piece Sounds/tuba/tuba_C3.mp3'

import violinC1 from './Piece Sounds/violin/violin_C5.mp3'
import violinD from './Piece Sounds/violin/violin_D5.mp3'
import violinE from './Piece Sounds/violin/violin_E5.mp3'
import violinF from './Piece Sounds/violin/violin_F5.mp3'
import violinG from './Piece Sounds/violin/violin_G5.mp3'
import violinA from './Piece Sounds/violin/violin_A5.mp3'
import violinB from './Piece Sounds/violin/violin_B5.mp3'
import violinC2 from './Piece Sounds/violin/violin_C6.mp3'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// GREEN COLOR: #769656
// CREAM COLOR: #eeeed2
// Yellow on light square: #f6f669
// Yellow on dark square: #baca2b

// TO ADD A NEW OPENING:
//  - Update the list openingList
//  - Update the function setMode

/////////////////////////////////////////////////////////////
//////////       TO DO LIST   ///////////////////////////////
/////////////////////////////////////////////////////////////
// Pawn promotion options
// Drag and drop
// Opening prep system
//    Find a way to load the game everytime the state is updated
// Get special sound for promotion
// Implement en passant for a specific square 
// BUG: king cannot move out of check
// Sound when you try to move when checked
// Make search bar designed like chess.com search bar
// Make box at top to show current selected opening
// Make a random opening button
// Play a sound when an opening is played incorrectly
// Play a sound when an opening is played 100% accurately
// Add a "free play" button

function Square(props) {
  let bgColor = ""
  if (isLightSquare(props.squareNumber)){
    if (props.selectedSquare != null && props.selectedSquare === props.squareNumber){bgColor = "#f6f669"}
    else {bgColor = "#eeeed2"}}
  else{
    if (props.selectedSquare != null && props.selectedSquare === props.squareNumber) {bgColor = "#baca2b"}
    else {bgColor = "#769656"}}
  return (
    <Button onClick={props.onClick} style={{
      backgroundColor: bgColor,
      alignItems: 'center',
      borderRadius: 0,
      width: '80px', 
      height: '80px'
    }}>
      {pieceImage(props.pieceCode)}
    </Button>
  );
}

// Checks if i is a light square
function isLightSquare(i){
  if (i % 16 < 8) {if (i % 2 === 0) {return true} else {return false}}
  else {if (i % 2 === 1) {return true} else {return false}}
}

// Given a piece code (BB, WW, etc...) return the image associated with that piece
function pieceImage(pieceCode){
  if (pieceCode === "BR") {return <img src = {BR} alt = "Black Rook" />}
  else if (pieceCode === "BN") {return <img src = {BN} alt = "Black Knight" />}
  else if (pieceCode === "BB") {return <img src = {BB} alt = "Black Bishop" />}
  else if (pieceCode === "BQ") {return <img src = {BQ} alt = "Black Queen" />}
  else if (pieceCode === "BK") {return <img src = {BK} alt = "Black King" />}
  else if (pieceCode === "BP") {return <img src = {BP} alt = "Black Pawn" />}
  else if (pieceCode === "WR") {return <img src = {WR} alt = "White Rook" />}
  else if (pieceCode === "WN") {return <img src = {WN} alt = "White Knight" />}
  else if (pieceCode === "WB") {return <img src = {WB} alt = "White Bishop" />}
  else if (pieceCode === "WQ") {return <img src = {WQ} alt = "White Queen" />}
  else if (pieceCode === "WK") {return <img src = {WK} alt = "White King" />}
  else if (pieceCode === "WP") {return <img src = {WP} alt = "White Pawn" />}
  else {return ""}
}
/////////////// Audio
function playMove(row, pieceCode) {
  let audio;
  switch(pieceCode[1]){
    case "P":
      switch(row){
        case "1": {audio = violinC1; break;}
        case "2": {audio = violinD; break;}
        case "3": {audio = violinE; break;}
        case "4": {audio = violinF; break;}
        case "5": {audio = violinG; break;}
        case "6": {audio = violinA; break;}
        case "7": {audio = violinB; break;}
        case "8": {audio = violinC2; break;}
      }
      break;
    case "R":
      switch(row){
        case "1": {audio = tromboneC1; break;}
        case "2": {audio = tromboneD; break;}
        case "3": {audio = tromboneE; break;}
        case "4": {audio = tromboneF; break;}
        case "5": {audio = tromboneG; break;}
        case "6": {audio = tromboneA; break;}
        case "7": {audio = tromboneB; break;}
        case "8": {audio = tromboneC2; break;}
      }
      break;
    case "N":
      switch(row){
        case "1": {audio = clarinetC1; break;}
        case "2": {audio = clarinetD; break;}
        case "3": {audio = clarinetE; break;}
        case "4": {audio = clarinetF; break;}
        case "5": {audio = clarinetG; break;}
        case "6": {audio = clarinetA; break;}
        case "7": {audio = clarinetB; break;}
        case "8": {audio = clarinetC2; break;}
      }
      break;
    case "B":
      switch(row){
        case "1": {audio = fluteC1; break;}
        case "2": {audio = fluteD; break;}
        case "3": {audio = fluteE; break;}
        case "4": {audio = fluteF; break;}
        case "5": {audio = fluteG; break;}
        case "6": {audio = fluteA; break;}
        case "7": {audio = fluteB; break;}
        case "8": {audio = fluteC2; break;}
      }
      break;
    case "Q":
      switch(row){
        case "1": {audio = trumpetC1; break;}
        case "2": {audio = trumpetD; break;}
        case "3": {audio = trumpetE; break;}
        case "4": {audio = trumpetF; break;}
        case "5": {audio = trumpetG; break;}
        case "6": {audio = trumpetA; break;}
        case "7": {audio = trumpetB; break;}
        case "8": {audio = trumpetC2; break;}
      }
      break;
    case "K":
      switch(row){
        case "1": {audio = tubaC1; break;}
        case "2": {audio = tubaD; break;}
        case "3": {audio = tubaE; break;}
        case "4": {audio = tubaF; break;}
        case "5": {audio = tubaG; break;}
        case "6": {audio = tubaA; break;}
        case "7": {audio = tubaB; break;}
        case "8": {audio = tubaC2; break;}
      }
      break;
    case "o":
      audio = tubaC1
      new Audio(tromboneE).play()
      new Audio(tromboneG).play()
  }
  if (pieceCode[2] === "e"){
    audio = enPassantSound
  }
  console.log(audio)
  new Audio(audio).play()
}
///////////////////////
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
    let renderBoard = [];
    if (this.props.isBoardFlipped){
      // to play from black's POV
      for (let i = 63; i >=7; i = i - 8){
        let row = [this.renderSquare(i)]
        for (let n = 1; n <8; n++)
        {
          row.push(this.renderSquare(i - n))
        }
        row = <div>{row}</div>
        renderBoard.push(row)
      }
    }
    else{
      // to play from white's POV
      for (let i = 0; i <=56; i = i + 8){
        let row = [this.renderSquare(i)]
        for (let n = 1; n <8; n++){
          row.push(this.renderSquare(i + n))
        }
        row = <div>{row}</div>
        renderBoard.push(row)
      }
    }
    return(<div>{renderBoard}</div>)
  }
}

function isIn(i, list){
  for (let n = 0; n < list.length; n++){
    if (i === list[n])
      return true;
  }
  return false;
}

function makeList(startingNumber, increment, numberOfElements){
  let returnList = []
  for (let i = 0; i < numberOfElements; i++){
    returnList.push(startingNumber + increment*i)
  }
  return returnList
}

function // a function that takes any given direction and returns a list of all squares in that direction in order
makeSquareList(direction){
  switch(direction){
    case "a": return makeList(0, 8, 8)
    case "b": return makeList(1, 8, 8)
    case "c": return makeList(2, 8, 8)
    case "d": return makeList(3, 8, 8)
    case "e": return makeList(4, 8, 8)
    case "f": return makeList(5, 8, 8)
    case "g": return makeList(6, 8, 8)
    case "h": return makeList(7, 8, 8)
    case "1": return makeList(56, 1, 8)
    case "2": return makeList(48, 1, 8)
    case "3": return makeList(40, 1, 8)
    case "4": return makeList(32, 1, 8)
    case "5": return makeList(24, 1, 8)
    case "6": return makeList(16, 1, 8)
    case "7": return makeList(8, 1, 8)
    case "8": return makeList(0, 1, 8)
    case "a6-c8": return makeList(2, 7, 3)
    case "a5-d8": return makeList(3, 7, 4)
    case "a4-e8": return makeList(4, 7, 5)
    case "a3-f8": return makeList(5, 7, 6)
    case "a2-g8": return makeList(6, 7, 7)
    case "a1-h8": return makeList(7, 7, 8)
    case "b1-h7": return makeList(15, 7, 7)
    case "c1-h6": return makeList(23, 7, 6)
    case "d1-h5": return makeList(31, 7, 5)
    case "e1-h4": return makeList(39, 7, 4)
    case "f1-h3": return makeList(47, 7, 3)
    case "f8-h6": return makeList(5, 9, 3)
    case "e8-h5": return makeList(4, 9, 4)
    case "d8-h4": return makeList(3, 9, 5)
    case "c8-h3": return makeList(2, 9, 6)
    case "b8-h2": return makeList(1, 9, 7)
    case "a8-h1": return makeList(0, 9, 8)
    case "a7-g1": return makeList(8, 9, 7)
    case "a6-f1": return makeList(16, 9, 6)
    case "a5-e1": return makeList(24, 9, 5)
    case "a4-d1": return makeList(32, 9, 4)
    case "a3-c1": return makeList(40, 9, 3)
    case "": return []
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
          squares: this.initializeBoard()
      }],
      moveHistory: ["empty"],
      stepNumber: 0,
      whiteIsMoving: true,
      // For movement
      clickNumber: 1,
      movingPiece: null,
      pieceLocation: null,
      // For Checks
      inCheck: [false],
      blackKingLocation: 4,
      whiteKingLocation: 60,
      // For board flip mechanic
      isBoardFlipped: false,
      // For en passant
      canEnPassant: [false],
      blackKingMoved: false,
      whiteKingMoved: false,
      // For training mode
      freePlayMode: true,
      openingMoveList: [],
      openingName: "Setting: Free Play",
    };
  }

  initializeBoard(){
    let tempArray = Array(64).fill("empty");
    tempArray[0] = "BR"; tempArray[7] = "BR"; tempArray[56] = "WR"; tempArray[63] = "WR";
    tempArray[1] = "BN"; tempArray[6] = "BN"; tempArray[57] = "WN"; tempArray[62] = "WN";
    tempArray[2] = "BB"; tempArray[5] = "BB"; tempArray[58] = "WB"; tempArray[61] = "WB";
    tempArray[3] = "BQ"; tempArray[59] = "WQ";
    tempArray[4] = "BK"; tempArray[60] = "WK";
    for (let i = 8; i < 16; i++){tempArray[i] = "BP";}
    for (let i = 48; i < 56; i++){tempArray[i] = "WP";}

    tempArray[25] = "WN"
    tempArray[52] = "WQ"
    tempArray[18] = "BP"
    tempArray[10] = "empty"

    return tempArray;
  }

  resetBoard(){
    this.setState({
      history: [{
          squares: this.initializeBoard()
      }],
      moveHistory: ["empty"],
      stepNumber: 0,
      whiteIsMoving: true,
      // For movement
      clickNumber: 1,
      movingPiece: null,
      pieceLocation: null,
      // For Checks
      inCheck: [false],
      blackKingLocation: 4,
      whiteKingLocation: 60,
      // For board flip mechanic
      isBoardFlipped: false,
      // For en passant
      canEnPassant: [false],
      blackKingMoved: false,
      whiteKingMoved: false,
      // For training mode
      freePlayMode: true,
      openingMoveList: [],
      openingName: "Setting: Free Play",
  })
  }

  Update(i, pieceCode) {
    const canEnPassant = this.state.canEnPassant.slice(0, this.state.stepNumber + 1);
    const inCheck = this.state.inCheck.slice(0, this.state.stepNumber + 1);
    const moveHistory = this.state.moveHistory.slice(0, this.state.stepNumber + 1);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // Temporarily do the move to see if it puts your king in check, and if it does, don't allow it
    let tempDelete = squares[i]
    squares[i] = pieceCode
    squares[this.state.pieceLocation] = "empty"
    // If this move makes yourself checked, don't do it
    if(this.state.whiteIsMoving){
      if (pieceCode === "WK"){
        if (this.controlledBy("Black", i, squares).length !== 0){
          // dont allow them to suicide their own king
          this.returnToFirstClick()
          return;
        }
      }
      else if (this.controlledBy("Black", this.state.whiteKingLocation, squares).length !== 0){
        this.returnToFirstClick()
        return;
      }
    }
    else{
      if (pieceCode === "BK"){
        if (this.controlledBy("White", i, squares).length !== 0){
          // dont allow them to suicide their own king
          this.returnToFirstClick()
          return;
        }
      }
      else if (this.controlledBy("White", this.state.blackKingLocation, squares).length !== 0){
        this.returnToFirstClick()
        return;
      }
    }
    squares[i] = tempDelete
    squares[this.state.pieceLocation] = pieceCode
    if (pieceCode === "oo" || pieceCode === "ooo"){
      if (this.state.whiteIsMoving)
        squares[this.state.pieceLocation] = "WK"
      else
        squares[this.state.pieceLocation] = "BK"
    }

    playMove(this.rowOf(i), pieceCode)
    let moveLabel = ""
    // Make moveHistory label (e4, Bh5, etc..)
    if (pieceCode == "WP" || pieceCode == "BP" || pieceCode == "WPe" || pieceCode == "BPe"){
      moveLabel = this.colOf(i) + this.rowOf(i)
      // If it's a capture, add an x
      if (this.colOf(i) !== this.colOf(this.state.pieceLocation))
        moveLabel = this.colOf(this.state.pieceLocation) + "x" + moveLabel
      // if it's a promotion, do the equals thing
      if ((i <8 && i >=0) || (i < 64 && i >= 56)){
        moveLabel = moveLabel + "=Q"
        if (this.state.whiteIsMoving)
          pieceCode = "WQ"
        else
          pieceCode = "BQ"
      }
    }
    else if (squares[i] != "empty")
      moveLabel = pieceCode[1] + "x" + this.colOf(i) + this.rowOf(i)
    else
      moveLabel = pieceCode[1] + this.colOf(i) + this.rowOf(i)

    // Handling castling
    if (pieceCode === "oo"){
      moveLabel = "O-O"
      if (i === 6){
        squares[6] = "BK"; squares[5] = "BR"; squares[7] = "empty"
        this.setState({blackKingLocation: 6})
      }
      else if (i === 62){
        squares[61] = "WR"; squares[62] = "WK"; squares[63] = "empty"
        this.setState({whiteKingLocation: 62})
      }
    }
    else if (pieceCode === "ooo"){
      moveLabel = "O-O-O"
      if (i === 2){
        squares[0] = "empty"; squares[2] = "BK"; squares[3] = "BR"
        this.setState({blackKingLocation: 2})
      }
      else if (i === 58){
        squares[56] = "empty"; squares[58] = "WK"; squares[59] = "WR"
        this.setState({whiteKingLocation: 58})
      }
    }
    else if (pieceCode === "WK"){
      this.setState({whiteKingLocation: i, whiteKingMoved: true})
      squares[i] = pieceCode;
    }
    else if (pieceCode === "BK"){
      this.setState({blackKingLocation: i, blackKingMoved: true})
      squares[i] = pieceCode;
    }
    else if (pieceCode[2] === "e"){
      if (this.state.whiteIsMoving) {squares[i] = "WP"}
      else {squares[i] = "BP"}
    }
    else
      squares[i] = pieceCode;
    squares[this.state.pieceLocation] = "empty";

    // If en passant just happened, clear out the other pawn too
    if ((pieceCode === "WPe" && (i<24 && i >=16) && (this.colOf(this.state.pieceLocation) != this.colOf(i)) && (canEnPassant.at(-1))) ||
        (pieceCode === "BPe" && (i<48 && i >=40) && (this.colOf(this.state.pieceLocation) != this.colOf(i)) && (canEnPassant.at(-1)))){
      if (this.state.whiteIsMoving)
        squares[i + 8] = "empty"
      else
        squares[i - 8] = "empty"
    }

    let inCheckBool = false;
    // Check if in check
    if (this.state.whiteIsMoving){
      if (this.controlledBy("White", this.state.blackKingLocation, squares).length !== 0){
        inCheckBool = true;
        console.log("Black is in Check")
      }
    }
    else{
      if (this.controlledBy("Black", this.state.whiteKingLocation, squares).length !== 0){
        inCheckBool = true;
        console.log("White is in Check")
      }
    }

    let pLocation = this.state.pieceLocation
    let enPassantBool = false;
    // Checking if en passant is possible
    if ((pieceCode === "WP" || pieceCode === "BP") && 
      ((pLocation < 56 && pLocation >=48) || (pLocation < 16 && pLocation >= 8)) &&
      ((i<32 && i>=24) || (i <40 && i >= 32))) // If en passant happened
      enPassantBool = true;

    this.setState({
      history: history.concat([
        {
          squares: squares,
        }
      ]),
      moveHistory: moveHistory.concat([moveLabel]),
      inCheck: inCheck.concat([inCheckBool]),
      canEnPassant: canEnPassant.concat([enPassantBool]),
      stepNumber: history.length,
      whiteIsMoving: !this.state.whiteIsMoving,
      clickNumber: 1,
      movingPiece: null,
      pieceLocation: null,
    });

    return;
  }

  // Given a side (white/black) and a square i, returns a list of all piece locations of that side that control that square
  controlledBy(side, i, squares){
    let color = side[0]
    let colorBool = false
    if (color === "W")
      colorBool = true
    let controllingList = []
    // For every piece on the board, if it is on the side, calculate the squares it controls
    for (let n = 0; n < 64; n++){
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
          controlList = controlList.concat(this.RcontrolList(n, colorBool, squares, true))
          break;
        case 'B':
          controlList = controlList.concat(this.BcontrolList(n, colorBool, squares, true))
          break;
        case 'Q':
          controlList = controlList.concat(this.QcontrolList(n, colorBool, squares, true))
          break;
        case 'K':
          controlList = controlList.concat(this.KcontrolList(n))
          break;
        case 'N':
          controlList = controlList.concat(this.NcontrolList(n))
          break;
      }
      for (let h = 0; h < controlList.length; h++){
        if (controlList[h] === i){
          controllingList.push(n)
          break;
        }
      }
    }
    return controllingList;
  }

  // Implement possible moves for white
  handleClick(i) {
    const inCheck = this.state.inCheck.slice(0, this.state.stepNumber + 1);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // If a player has already won, do not allow moves
    if (inCheck.at(-1) && this.calculateWinner(current.squares, this.state.whiteIsMoving))
      return;

    let turn = "Black";
    if (this.state.whiteIsMoving) {turn = "White"}
    console.log(i + " is the coordinate")
    // Handle if this is the first click
    if (this.state.clickNumber == 1){
      if (squares[i] === "empty"){
        // If the first click is on an empty square, ignore it!
        return;
      }
      else {
        this.firstHandleClick(i)
        return;
      }
    }
    else{
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
    
    // If the king is in double check, only allow the king to be moved
    if (inCheck.at(-1)){
      if (this.state.whiteIsMoving && this.controlledBy("Black",this.state.whiteKingLocation,squares).length > 1 && squares[i] !== "WK"){
        return;
      }
      else if(!this.state.whiteIsMoving && this.controlledBy("White",this.state.blackKingLocation,squares).length > 1 && squares[i] !== "BK"){
        return;
      }
    }
    // If not, update the state so that it's on click 2
    this.setState({
      clickNumber: 2,
      movingPiece: squares[i],
      pieceLocation: i
    })
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
  getDirection(loc1, loc2){
    let direction = ""
    if (this.rowOf(loc1) === this.rowOf(loc2))
      direction = this.rowOf(loc1)
    else if (this.colOf(loc1) === this.colOf(loc2))
      direction = this.colOf(loc1)
    else if (this.forwardSlashDiagOf(loc1) === this.forwardSlashDiagOf(loc2))
      direction = this.forwardSlashDiagOf(loc1)
    else if (this.backSlashDiagOf(loc1) === this.backSlashDiagOf(loc2))
      direction = this.backSlashDiagOf(loc1) 
    return direction
  }

  RmoveProcess(i)
  {
    const inCheck = this.state.inCheck.slice(0, this.state.stepNumber + 1);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let direction = ""
    let checkingPiece = -1
    if (inCheck.at(-1)){
      if (this.state.whiteIsMoving){
          // Double checks are accounted for, there must only be one checking piece
          checkingPiece = this.controlledBy("Black", this.state.whiteKingLocation, squares)[0]
          direction = this.getDirection(checkingPiece, this.state.whiteKingLocation)
        }
      else{
        checkingPiece = this.controlledBy("White", this.state.blackKingLocation, squares)[0]
        direction = this.getDirection(checkingPiece, this.state.blackKingLocation)
      }
    }

    let movingColor = this.state.whiteIsMoving
    // movingColor is true if it is white, and false if it is black
    
    let moveList = this.RcontrolList(this.state.pieceLocation, movingColor, squares, false)
    if (!isIn(i, moveList)) {this.returnToFirstClick(); return}

    // If you can block OR capture the checking piece, make the move
    if (inCheck.at(-1)){
      if (this.state.whiteIsMoving && (isIn(i, this.beBlockedList(checkingPiece, this.state.whiteKingLocation, "White", direction)) 
        || i === checkingPiece)){
          this.Update(i, "WR")
          return
        }
      else if (!this.state.whiteIsMoving && (isIn(i, this.beBlockedList(checkingPiece, this.state.blackKingLocation, "Black", direction)) 
        || i === checkingPiece))
        {
          this.Update(i, "BR")
          return
        }
      else {this.returnToFirstClick(); return}
    }

    if (this.state.whiteIsMoving)
      this.Update(i, "WR")
    else
      this.Update(i, "BR")
    this.returnToFirstClick()
    return;
  }

  // make a list of all possible rook moves at a given pieceLocation
  RcontrolList(i, movingColor, squares, calculatingWinner)
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
      else if (this.isWhitePiece(squares[i - (n*8)]) === movingColor){
        if (calculatingWinner) {moveList.push(i - (n*8))}
        break;
      }
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
      else if (this.isWhitePiece(squares[i + (n*8)]) === movingColor){
        if (calculatingWinner) {moveList.push(i + (n*8))}
        break;
      }
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
      else if (this.isWhitePiece(squares[i - (n)]) === movingColor){
        if (calculatingWinner) {moveList.push(i - (n))}
        break;
      }
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
      else if (this.isWhitePiece(squares[i + (n)]) === movingColor){
        if (calculatingWinner) {moveList.push(i + (n))}
        break;
      }
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
    const inCheck = this.state.inCheck.slice(0, this.state.stepNumber + 1);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let direction = ""
    let checkingPiece = -1
    if (inCheck.at(-1)){
      if (this.state.whiteIsMoving){
          // Double checks are accounted for, there must only be one checking piece
          checkingPiece = this.controlledBy("Black", this.state.whiteKingLocation, squares)[0]
          direction = this.getDirection(checkingPiece, this.state.whiteKingLocation)
        }
      else{
        checkingPiece = this.controlledBy("White", this.state.blackKingLocation, squares)[0]
        direction = this.getDirection(checkingPiece, this.state.blackKingLocation)
      }
    }
    // make a list of all possible knight moves at a given pieceLocation
    let moveList = this.NcontrolList(this.state.pieceLocation)

    // now, have a moveList
    console.log(moveList)
    if (!isIn(i, moveList)) {this.returnToFirstClick(); return}

    // If you can block OR capture the checking piece, make the move
    if (inCheck.at(-1)){
      if (this.state.whiteIsMoving && (isIn(i, this.beBlockedList(checkingPiece, this.state.whiteKingLocation, "White", direction)) 
        || i === checkingPiece)){
          this.Update(i, "WN")
          return
        }
      else if (!this.state.whiteIsMoving && (isIn(i, this.beBlockedList(checkingPiece, this.state.blackKingLocation, "Black", direction)) 
        || i === checkingPiece))
        {
          this.Update(i, "BN")
          return
        }
      else {this.returnToFirstClick(); return}
    }

    if (this.state.whiteIsMoving)
      this.Update(i, "WN")
    else
      this.Update(i, "BN")
    this.returnToFirstClick()
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
          if (parseInt(this.rowOf(coordinate)) - 1 == parseInt(this.rowOf(i)))
            moveList.push(coordinate)
        }
        else
        {
          if (parseInt(this.rowOf(coordinate)) - 2 == parseInt(this.rowOf(i)))
            moveList.push(coordinate)
        }
      }
      coordinate = distanceList[n] + i
      if (coordinate < 64 && coordinate >= 0)
      {
        if (n < 2)
        {
          if (parseInt(this.rowOf(coordinate)) + 1 == parseInt(this.rowOf(i)))
            moveList.push(coordinate)
        }
        else
        {
          if (parseInt(this.rowOf(coordinate)) + 2 == parseInt(this.rowOf(i)))
            moveList.push(coordinate)
        }
      }
    }
    return moveList
  }

  BmoveProcess(i)
  {
    const inCheck = this.state.inCheck.slice(0, this.state.stepNumber + 1);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let direction = ""
    let checkingPiece = -1
    if (inCheck.at(-1)){
      if (this.state.whiteIsMoving){
          // Double checks are accounted for, there must only be one checking piece
          checkingPiece = this.controlledBy("Black", this.state.whiteKingLocation, squares)[0]
          direction = this.getDirection(checkingPiece, this.state.whiteKingLocation)
        }
      else{
        checkingPiece = this.controlledBy("White", this.state.blackKingLocation, squares)[0]
        direction = this.getDirection(checkingPiece, this.state.blackKingLocation)
      }
    }

    let movingColor = this.state.whiteIsMoving
    // movingColor is true if it is white, and false if it is black

    let moveList = this.BcontrolList(this.state.pieceLocation, movingColor, squares, false)
    // make a list of all possible bishop moves at a given pieceLocation
    
    console.log(moveList)
    if (!isIn(i, moveList)) {this.returnToFirstClick(); return}

    // If you can block OR capture the checking piece, make the move
    if (inCheck.at(-1)){
      if (this.state.whiteIsMoving && (isIn(i, this.beBlockedList(checkingPiece, this.state.whiteKingLocation, "White", direction)) 
        || i === checkingPiece)){
          this.Update(i, "WB")
          return
        }
      else if (!this.state.whiteIsMoving && (isIn(i, this.beBlockedList(checkingPiece, this.state.blackKingLocation, "Black", direction)) 
        || i === checkingPiece))
        {
          this.Update(i, "BB")
          return
        }
      else {this.returnToFirstClick(); return}
    }

    if (this.state.whiteIsMoving)
      this.Update(i, "WB")
    else
      this.Update(i, "BB")
    this.returnToFirstClick()
    return;
  }

  BcontrolList(i, movingColor, squares, calculatingWinner)
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
      else if (this.isWhitePiece(squares[i - (n*9)]) === movingColor){
        if (calculatingWinner) {moveList.push(i - (n*9))}
        break;
      }
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
      else if (this.isWhitePiece(squares[i + (n*9)]) === movingColor){
        if (calculatingWinner) {moveList.push(i + (n*9))}
        break;
      }
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
      else if (this.isWhitePiece(squares[i - (n*7)]) === movingColor){
        if (calculatingWinner) {moveList.push(i - (n*7))}
        break;
      }
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
      else if (this.isWhitePiece(squares[i + (n*7)]) === movingColor){
        if (calculatingWinner) {moveList.push(i + (n*7))}
        break;
      }
      // if opponent color
      else{
        moveList.push(i + (n*7))
        break;
      }
    }
    return moveList
  }

  QmoveProcess(i)
  {
    const inCheck = this.state.inCheck.slice(0, this.state.stepNumber + 1);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let direction = ""
    let checkingPiece = -1
    if (inCheck.at(-1)){
      if (this.state.whiteIsMoving){
          // Double checks are accounted for, there must only be one checking piece
          checkingPiece = this.controlledBy("Black", this.state.whiteKingLocation, squares)[0]
          direction = this.getDirection(checkingPiece, this.state.whiteKingLocation)
        }
      else{
        checkingPiece = this.controlledBy("White", this.state.blackKingLocation, squares)[0]
        direction = this.getDirection(checkingPiece, this.state.blackKingLocation)
      }
    }

    let movingColor = this.state.whiteIsMoving
    // movingColor is true if it is white, and false if it is black

    let moveList = this.QcontrolList(this.state.pieceLocation, movingColor, squares, false)
    // make a list of all possible Queen moves at a given pieceLocation
    console.log(moveList)
    
    if (!isIn(i, moveList)) {this.returnToFirstClick(); return}

    // If you can block OR capture the checking piece, make the move
    if (inCheck.at(-1)){
      if (this.state.whiteIsMoving && (isIn(i, this.beBlockedList(checkingPiece, this.state.whiteKingLocation, "White", direction)) 
        || i === checkingPiece)){
          this.Update(i, "WQ")
          return
        }
      else if (!this.state.whiteIsMoving && (isIn(i, this.beBlockedList(checkingPiece, this.state.blackKingLocation, "Black", direction)) 
        || i === checkingPiece))
        {
          this.Update(i, "BQ")
          return
        }
      else {this.returnToFirstClick(); return}
    }

    if (this.state.whiteIsMoving)
      this.Update(i, "WQ")
    else
      this.Update(i, "BQ")
    this.returnToFirstClick()
    return;
  }

  QcontrolList(i, movingColor, squares, calculatingWinner)
  {
    let tempList = []
    tempList = tempList.concat(this.BcontrolList(i, movingColor, squares, calculatingWinner))
    tempList = tempList.concat(this.RcontrolList(i, movingColor, squares, calculatingWinner))
    return tempList
  }

  KmoveProcess(i)
  {
    const inCheck = this.state.inCheck.slice(0, this.state.stepNumber + 1);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let movingColor = this.state.whiteIsMoving
    // moving color tells what color king is moving

    // Makes a list of possible moves
    let moveList = this.KcontrolList(this.state.pieceLocation)
    console.log(moveList)

    // check for castling
    if (movingColor) {
      if (i === 58){
        if (squares[57] === "empty" && squares[58] === "empty" && squares[59] === "empty" && squares[56] === "WR" && !this.state.whiteKingMoved &&
        this.controlledBy("Black", 57, squares).length === 0 && this.controlledBy("Black", 58, squares).length === 0)
        {
          this.Update(i, "ooo")
        }
      }
      else if (i === 62)
      {
        console.log("i'm in the short castling place")
        if (squares[61] === "empty" && squares[62] === "empty" && squares[63] === "WR" && !this.state.whiteKingMoved &&
        this.controlledBy("Black", 61, squares).length === 0 && this.controlledBy("Black", 62, squares).length === 0)
        {
          this.Update(i, "oo")
        }
      }
    }
    else
    {
      if (i === 2) // If queenside castling
      {
        if (squares[1] === "empty" && squares[2] === "empty" && squares[3] === "empty" && squares[0] === "BR" && !this.state.blackKingMoved 
        && this.controlledBy("White", 2, squares).length === 0 && this.controlledBy("White", 3, squares).length === 0){
          this.Update(i, "ooo")
        }
      }
      else if (i === 6)
      {
        if (squares[5] === "empty" && squares[6] === "empty" && squares[7] === "BR" && squares[4] == "BK" && !this.state.blackKingMoved &&
        this.controlledBy("White", 5, squares).length === 0 && this.controlledBy("White", 6, squares).length === 0){
          this.Update(i, "oo")
        }
      }
    }

    if (!isIn(i, moveList)) {this.returnToFirstClick(); return}
  

    // If you can block OR capture the checking piece, make the move
    if (inCheck.at(-1)){
      let ownColor = "White"; let opponentColor = "Black"
      if (!this.state.whiteIsMoving) {ownColor = "Black"; opponentColor = "White"}
      for (let i = 0; i < moveList.length;)
      {
        if (squares[moveList[i]][0] === ownColor[0] || this.controlledBy(opponentColor, moveList[i], squares).length !== 0)
        {
          moveList.splice(i, 1)
          continue;
        }
        i++
      }
      if (!isIn(i, moveList)){
        this.returnToFirstClick();
        return;
      }
    }

    // Make sure king doesn't suicide
    if (this.state.whiteIsMoving){
      if (this.controlledBy("Black", i, squares).length !== 0){
        this.returnToFirstClick()
        return;
      }
      this.Update(i, "WK")
    }
    else{
      if (this.controlledBy("White", i, squares).length !== 0){
        this.returnToFirstClick()
        return;
      }
      this.Update(i, "BK")
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
    const canEnPassant = this.state.canEnPassant.slice(0, this.state.stepNumber + 1);
    const inCheck = this.state.inCheck.slice(0, this.state.stepNumber + 1);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let direction = ""
    // Checking piece is the location of the checking piece
    let checkingPiece = -1
    if (inCheck.at(-1)){
      if (this.state.whiteIsMoving){
          // Double checks are accounted for, there must only be one checking piece
          checkingPiece = this.controlledBy("Black", this.state.whiteKingLocation, squares)[0]
          direction = this.getDirection(checkingPiece, this.state.whiteKingLocation)
        }
      else{
        checkingPiece = this.controlledBy("White", this.state.blackKingLocation, squares)[0]
        direction = this.getDirection(checkingPiece, this.state.blackKingLocation)
      }
    }

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
    moveList = moveList.concat(this.PcontrolList(this.state.pieceLocation, movingColor), this.PmoveList(this.state.pieceLocation, movingColor))
    // Movelist is full of all possible moves
    console.log(moveList)
    // if the click is not a valid move, return!
    if (!isIn(i, moveList)){
      this.returnToFirstClick()
      return;
    }

    // if the click is a move, do the move IF:
    //   in check AND the piece can block a check
    //   the piece will not put the king in check
    if (movingColor){
      // If it is a move:
      if (i == (this.state.pieceLocation - 8) || i == (this.state.pieceLocation - 16)){
        // If in check, only allow if the move blocks check
        if (inCheck.at(-1)){
          if (isIn(i, this.beBlockedList(this.state.whiteKingLocation, checkingPiece, "White", direction))){
            this.Update(i, "WP")
            this.returnToFirstClick()
            return;
          }
          else {this.returnToFirstClick(); return}
        }
        if (i >= 0 && i < 8){
          this.choosePromotion(i, this.state.whiteIsMoving)
          this.Update(i, "WP")
        }
        else
          this.Update(i, "WP")
        this.returnToFirstClick()
        return;
      }
    }
    else{
      if (i == (this.state.pieceLocation + 8) || i == (this.state.pieceLocation + 16)){
        // If in check, only allow if the move blocks check
        if (inCheck.at(-1)){
          if (isIn(i, this.beBlockedList(this.state.blackKingLocation, checkingPiece, "Black", direction))){
            this.Update(i, "BP")
            this.returnToFirstClick()
            return;
          }
          else {this.returnToFirstClick(); return}
        }
        if (i >= 56 && i < 64)
          this.Update(i, "BP")
        else
          this.Update(i, "BP")
        this.returnToFirstClick()
        return;
      }
    }

    // this means the click was a capture or en passant
    if (squares[i] != "empty" && movingColor){
      if (inCheck.at(-1) && i !== checkingPiece) {return}
      if (i >= 0 && i < 8)
          this.Update(i, "WQ")
        else
          this.Update(i, "WP")
      this.returnToFirstClick()
    }
    else if (canEnPassant.at(-1) && movingColor){
      // If in check, check to see if en passant can capture the checking piece OR block!
      // check for en passant
      if (inCheck.at(-1)){
        if ((isIn(i, this.beBlockedList(this.state.whiteKingLocation, checkingPiece, "White", direction)) ||
          (i + 8) === checkingPiece) && i < 24 && i >= 16 && squares[i + 8] === "BP"){
          this.Update(i, "WPe")
          this.returnToFirstClick()
          return;
        }
        else {this.returnToFirstClick(); return}
      }
      if (i < 24 && i >= 16 && squares[i + 8] === "BP"){
        this.Update(i, "WPe")
        this.returnToFirstClick()
        return;
      }
    }
    else if (squares[i] != "empty" && movingColor === false){
      if (inCheck.at(-1) && i !== checkingPiece) {return}
      if (i >= 56 && i < 64)
          this.Update(i, "BQ")
        else
          this.Update(i, "BP")
      this.returnToFirstClick()
      return;
    }
    else if (canEnPassant.at(-1) && movingColor === false){
      if (inCheck.at(-1)){
        if ((isIn(i, this.beBlockedList(this.state.blackKingLocation, checkingPiece, "Black", direction)) ||
          (i - 8) === checkingPiece) && i < 48 && i >= 40 && squares[i - 8] === "WP"){
          this.Update(i, "BPe")
          this.returnToFirstClick()
          return;
        }
        else {this.returnToFirstClick(); return}
      }
      if (i < 48 && i >= 40 && squares[i - 8] === "WP"){
        this.Update(i, "BPe")
        this.returnToFirstClick()
        return;
      }
    }
    else{
      // no piece to capture and no en passant
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
    if (movingColor){
      if (i < 56 && i >= 48){
        for (let n = 1; n < 3; n++){
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

  // given a promotion square and color (as a bool), load 4 squares, each with one possible promotion piece: Queen, rook, bishop, knight.
  // Depending on what is chosen, return the pieceCode of the piece
  choosePromotion(i, color){
  }
  
  //  A function that, given two piece locations, a color, and a row, column, or diagonal, 
  //             determines if the color can block the check between the two pieces
  // Color is string
  beBlockedList(location1, location2, color, direction)
  {
    // Determine all squares between the two pieces
    // use Squarelist, a function that takes any given direction and returns a list of all squares in that direction in order
    console.log("direction is " + direction)
    let squareList = makeSquareList(direction)
    console.log("squarelist is " + squareList)
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
    for (let i = 0; i < squareList.length;)
    {
      if (this.isBlockableSquare(color, squareList[i]))
      {
        i++
      }
      else
        squareList.splice(i, 1)
    }
    return squareList;
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
    for (let n = 0; n < 64; n++){
      if (squares[n][0] !== color)
        continue;
      let controlList = []
      // Now, we know squares[n] is of the specified color
      switch(squares[n][1]){
        case 'P':
          controlList = controlList.concat(this.PmoveList(n, this.state.whiteIsMoving))
          break;
        case 'R':
          controlList = controlList.concat(this.RcontrolList(n, this.state.whiteIsMoving, squares, false))
          break;
        case 'B':
          controlList = controlList.concat(this.BcontrolList(n, this.state.whiteIsMoving, squares, false))
          break;
        case 'Q':
          controlList = controlList.concat(this.QcontrolList(n, this.state.whiteIsMoving, squares, false))
          break;
        case 'N':
          controlList = controlList.concat(this.NcontrolList(n))
          break;
      }
      for (let n = 0; n < controlList.length; n++){
        if (controlList[n] === i) {return true;}
      }
    }
    return false;
  }

  colOf(i)
  {
    if (i % 8 == 0) {return "a"}
    else if (i % 8 == 1) {return "b"}
    else if (i % 8 == 2) {return "c"}
    else if (i % 8 == 3) {return "d"}
    else if (i % 8 == 4) {return "e"}
    else if (i % 8 == 5) {return "f"}
    else if (i % 8 == 6) {return "g"}
    else if (i % 8 == 7) {return "h"}
    else {console.log("invalid piece location " + i)}
    return;
  }
  // Given a piece location, return the row it is in
  rowOf(i){
    return (8 - Math.floor(i/8)).toString()
  }

  forwardSlashDiagOf(i)
  {
    if (i % 7 === 0) {if (i === 0) {return "a8"} else if (i === 63) {return "h1"} else {return "a1-h8"}}
    if (i % 7 === 1) {if (i < 7 * 2) {return "a7-b8"} else {return "b1-h7"}}
    if (i % 7 === 2) {if (i < 7 * 3) {return "a6-c8"} else {return "c1-h6"}}
    if (i % 7 === 3) {if (i < 7 * 4) {return "a5-d8"} else {return "d1-h5"}}
    if (i % 7 === 4) {if (i < 7 * 5) {return "a4-e8"} else {return "e1-h4"}}
    if (i % 7 === 5) {if (i < 7 * 6) {return "a3-f8"} else {return "f1-h3"}}
    if (i % 7 === 6) {if (i < 7 * 7) {return "a2-g8"} else {return "g1-h2"}}
  }

  backSlashDiagOf(i)
  {
    if (i % 9 === 0) {return "a8-h1"}
    if (i % 9 === 1) {return "b8-h2"}
    if (i % 9 === 2) {if (i < 9 * 6) {return "c8-h3"} else {return "a1"}}
    if (i % 9 === 3) {if (i < 9 * 5) {return "d8-h4"} else {return "a2-b1"}}
    if (i % 9 === 4) {if (i < 9 * 4) {return "e8-h5"} else {return "a3-c1"}}
    if (i % 9 === 5) {if (i < 9 * 3) {return "f8-h6"} else {return "a4-d1"}}
    if (i % 9 === 6) {if (i < 9 * 2) {return "g8-h7"} else {return "a5-e1"}}
    if (i % 9 === 7) {if (i < 9 * 1) {return "h8"} else {return "a6-f1"}}
    if (i % 9 === 8) {return "a7-g1"}
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
  else{
    kingLocation = this.state.blackKingLocation
    moveList = moveList.concat(this.KcontrolList(this.state.blackKingLocation))
    ownColor = "Black"
    opponentColor = "White"
  }
  squares[kingLocation] = "empty"
  // For each square, check if it's own piece is there OR if it is controlled by an opponent piece
  //   if it is, remove it from the list, because the king cannot move there
  // If the list is not empty, return false, because the king can move and therefore there is no winner
  for (let i = 0; i < moveList.length;){
    if (squares[moveList[i]][0] === ownColor[0] || this.controlledBy(opponentColor, moveList[i], squares).length !== 0)
    {
      moveList.splice(i, 1)
      continue;
    }
    i++
  }
  squares[kingLocation] = ownColor[0] + "K"
  if (moveList.length != 0)
    return false;
  // So, check for blocks and captures
  // problem: How do i get information about who checked the king?
  let controllingPieces = this.controlledBy(opponentColor, kingLocation, squares)
  // If controlledBy returns a list of more than 1 element, then the opposite color of moving color won
  if (controllingPieces.length > 1)
    return true;
  
  console.log("getting to 1706")
  // If not, see if the checking piece can be captured
  //    If it can be captured, then return false, because movingColor still has a possible move
  //    If the checking piece can only be captured by the king, return true, because there is no way of blocking the line of sight
  //    If the checking piece is right next to the king
  if (this.controlledBy(ownColor, controllingPieces[0], squares).length !== 0)
    if ((this.controlledBy(ownColor, controllingPieces[0], squares).length === 1 && 
    (this.controlledBy(ownColor, controllingPieces[0], squares)[0] == this.state.blackKingLocation || 
    this.controlledBy(ownColor, controllingPieces[0], squares)[0] == this.state.whiteKingLocation))){
      return true;
    } else{
      // If the piece can capture without putting its own king in check, return false
      // Else, return true, because it's checkmate!
      let tempDelete = squares[controllingPieces[0]] // piece at capture location
      let tempDelete2 = squares[this.controlledBy(ownColor, controllingPieces[0], squares)[0]] // piece at capturing location
      let tempDelete3 = this.controlledBy(ownColor, controllingPieces[0], squares)[0] // captrue location
      squares[controllingPieces[0]] = squares[this.controlledBy(ownColor, controllingPieces[0], squares)[0]] // Capture location is the capturing piece
      squares[this.controlledBy(ownColor, controllingPieces[0], squares)[0]] = "empty"
      if(this.state.whiteIsMoving){
        if (this.controlledBy("Black", this.state.whiteKingLocation, squares).length !== 0){
          squares[controllingPieces[0]] = tempDelete // Capture location is returned
          squares[tempDelete3] = tempDelete2
          return true;
        }
      }
      else{
        if (this.controlledBy("White", this.state.blackKingLocation, squares).length !== 0){
          squares[controllingPieces[0]] = tempDelete // Capture location is returned
          squares[tempDelete3] = tempDelete2
          return true;
        }
      }

      return false;
    }
  
  // Now, we know that the checking piece cannot be captured. If the checking piece is a pawn or knight, they win!
  if (squares[controllingPieces[0]][1] === "N" || squares[controllingPieces[0]][1] === "P")
    return true;

  //    Check if the line of sight can be blocked 
  //       Check if it is being checked on the same row, column, or diagonal
  let direction = ""
  if (this.rowOf(controllingPieces[0]) === this.rowOf(kingLocation))
    direction = this.rowOf(kingLocation)
  else if (this.colOf(controllingPieces[0]) === this.colOf(kingLocation))
    direction = this.colOf(kingLocation)
  else if (this.forwardSlashDiagOf(controllingPieces[0]) === this.forwardSlashDiagOf(kingLocation))
    direction = this.forwardSlashDiagOf(kingLocation)
  else if (this.backSlashDiagOf(controllingPieces[0] === this.backSlashDiagOf(kingLocation)))
    direction = this.backSlashDiagOf(kingLocation) 
  //         Then, run canBeBlocked(), a function that, given two piece locations, a color, and a row, column, or diagonal, 
  //             returns a list of squares in which a piece can go to in order to block the check
  //       if beBlockedList is empty, return true, because the color won!
  if (this.beBlockedList(kingLocation, controllingPieces[0], ownColor, direction).length !== 0)
    return false
  return true;
}

setMode(mode){
  console.log(this.state.freePlayMode)
  if (mode === "Free play" && !this.state.freePlayMode) {this.resetBoard(); return;}
  else if (mode === "Free play") {return;}
  this.setState({freePlayMode: false})
  let openingName = "Current Opening: "
  if (openingName + mode === this.state.openingName) {return;}
  this.resetBoard();
  let moveList = [];
  switch(mode){
    case "Advanced Caro-Kann": {moveList = ["e4", "c6", "d4", "d5", "e5", "Bf5", ]; break;}
    case "Caro-Kann": {moveList = ["e4", "c6", "d4", "d5"]; break;}
    case "English": {moveList = ["c4", "e5", "Nc3"]; break;}
    case "French Defense": {moveList = ["e4", "e6", "d4", "e5", "Nc3"]; break;}
    case "Italian Game: Giuoco Pianissimo": {moveList = ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5", "d3"]; break;}
    case "Italian Game: Giuoco Piano": {moveList = ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5"]; break;}
    case "King's Gambit": {moveList = ["e4", "e5", "f4"]; break;}
    case "Petrov's Defense": {moveList = ["e4", "e5", "Nf3", "Nf6", "Nxe5", "d6", "Nf3", "Nxe4", "d4"];  break;}
    case "Queen's Gambit": {moveList = ["d4", "d5", "c4"]; break;}
    case "Ruy Lopez": {moveList = ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O"]; break;}
    case "Scotch": {moveList = ["e4", "e5", "Nf3", "Nc6", "d4"]; break;}
    case "Sicilian Defense": {moveList = ["e4", "c5", "Nf3", "Nc6"]; break;}
    case "Sicilian Defense: Alapin Variation": {moveList = ["e4", "c5", "c3", "Nc6", "d4"]; break;}
    case "Stafford Gambit": {moveList = ["e4", "e5", "Nf3", "Nf6", "Nxe5", "Nc6", "Nxc6", "dxc6"]; break;}
    case "The London System": {moveList = ["d4", "d5", "Bf4", "Nf6", "e3"]; break;}
  }
  this.setState({openingMoveList: moveList})
  this.setState({openingName: openingName + mode})
  return;
}

render() {
  const inCheck = this.state.inCheck.slice(0, this.state.stepNumber + 1);
  const moveHistory = this.state.moveHistory;
  const history = this.state.history;
  const current = history[this.state.stepNumber];
  
  let moves = history.map((step, move) => {
    let desc = moveHistory[move]

    if (move === 0){
      return <div><button className = "moves" onClick={() => this.jumpTo(move)}>Go to game start</button></div>
    }
    else
    {
      let moveNum = Math.ceil(move / 2)
      if (move % 2 === 1)
      {
        moveNum = moveNum + ". "
        desc = moveNum + desc
        if (typeof moveHistory[move + 1] != "string")
          return <div><button className = "moves" onClick={() => this.jumpTo(move)}>{desc}</button></div>
      }
      else
      {
        moveNum = moveNum + ". "
        let desc1 = moveNum + moveHistory[move-1]
        return (<div><button className = "moves" onClick={() => this.jumpTo(move - 1)}>{desc1}</button>
        <button className = "moves" onClick={() => this.jumpTo(move)}>{desc}</button>
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
  // Creates flipboard button
  const flipBoard = <button className = "moves" onClick={() => this.setState({isBoardFlipped: !this.state.isBoardFlipped})}>
    Flip Board</button>

  // Creates opening interface
  let search = [<input type="text" id="myInput" placeholder="Search for openings.."></input>]
  const openingList = ["Advanced Caro-Kann", "Caro-Kann", "English", "French Defense", "Italian Game: Giuoco Piano", 
  "Italian Game: Giuoco Pianissimo", "King's Gambit", 
  "Petrov's Defense", "Queen's Gambit", "Ruy Lopez", "Scotch", 
  "Sicilian Defense", "Sicilian Defense: Alapin Variation",
    "Stafford Gambit", "The London System"]
  let openingButtonList = [];
  for (let i = 0; i < openingList.length; i++){
    openingButtonList.push(<li><button className = "moves" onClick ={() => this.setMode(openingList[i])}>{openingList[i]}</button></li>)
  }
  search.push(<ul id="myUL">{openingButtonList}</ul>)

  // Does opening checking
  if (this.state.openingMoveList.length !== 0){
    let openingMoves = ["empty"]; openingMoves = openingMoves.concat(this.state.openingMoveList)
    if (moveHistory.at(this.state.stepNumber) !== openingMoves[this.state.stepNumber]){
      status = "Incorrect! Return to a previous move to try again."
    }
    if (this.state.stepNumber + 1 === openingMoves.length && moveHistory.at(this.state.stepNumber) === openingMoves[this.state.stepNumber]){
      status = "Opening played 100% accurately!"
    }
  }
  return (
    <div className="game">
      <div className = "opening-interface">
        <div className = "mode-status">{this.state.openingName}</div>
        <div><button className = "moves" onClick={() => this.setMode("Free play")}>Return to free play</button></div>
        {search}
      </div>
      <div className="game-board">
        <Board squares={current.squares}
          onClick={i => this.handleClick(i)}
          selectedSquare= {this.state.pieceLocation}
          isBoardFlipped = {this.state.isBoardFlipped} 
        />
      </div>
      <div className="game-info" id = "game-info">
        <div className = "status">{status}</div>
        <div>{flipBoard}</div>
        <div>{moves}</div>
      </div> 
    </div>
  );
  }
}

function myFunction() {
  console.log("in myFunction")
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  if (input === null) {return;}
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("button")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
const searchBar = document.getElementById("myInput")
searchBar.onkeyup = function() {myFunction()}