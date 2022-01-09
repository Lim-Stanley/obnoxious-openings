import Button from '@mui/material/Button';

import {Square, isLightSquare, pieceImage} from './square-loading'
import {audioFileList} from './audio-files'
import {colOf, rowOf, forwardSlashDiagOf, backSlashDiagOf, makeSquareList} from './direction-functions'
import {isWhitePiece, PcontrolList, RcontrolList, NcontrolList, BcontrolList, QcontrolList, KcontrolList, controlledBy, makesSelfChecked,
getMoveLabel} 
from './update-state-functions'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// TO ADD A NEW OPENING:
//  - Update the list openingList
//  - Update the function setMode

/////////////////////////////////////////////////////////////
//////////       TO DO LIST   ///////////////////////////////
/////////////////////////////////////////////////////////////
// Drag and drop
// castle through history
// Get special sound for promotion
// Sound when you try to move when checked
// Make search bar designed like chess.com search bar
// Make a random opening button
// Play a sound when an opening is played incorrectly
// Play a sound when an opening is played 100% accurately
// Possibly find a way to integrate stockfish
// Code a "make new opening" function?
//    Get to create a new one, name it, and then play it out, then it saves into the code. I don't know if this is possible at all.
// Make import files
// Use datastructure for setting audio = imports

// Plays the audio for a given piece move
function playMove(row, pieceCode) {
  let audio = audioFileList.find(e => (e.code === pieceCode.substring(1) && e.row === row)).audio
  console.log(audio)
  new Audio(audio).play()
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
    let renderBoard = [];
    if (this.props.isBoardFlipped){
      // to play from black's POV
      for (let i = 63; i >=7; i = i - 8){
        let row = [this.renderSquare(i)]
        for (let n = 1; n <8; n++) { row.push(this.renderSquare(i - n)) }
        row = <div>{row}</div>
        renderBoard.push(row)
      }
    }
    else{
      // to play from white's POV
      for (let i = 0; i <=56; i = i + 8){
        let row = [this.renderSquare(i)]
        for (let n = 1; n <8; n++){ row.push(this.renderSquare(i + n)) }
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

class Game extends React.Component {
  /////////////////////////////////////////////////////////////////////////
  // If you make a change in the constructor, must also change resetBoard()
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
      enPassantSquare: [null],
      // For castling
      blackKingMoved: false,
      whiteKingMoved: false,
      // For training mode
      freePlayMode: true,
      openingMoveList: [],
      openingName: "Setting: Free Play",
      // For Promotion
      promotionPiece: null,
    };
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
      // Promotion
      promotionPiece: null,
  })
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
    return tempArray;
  }

  Update(i, pieceCode) {
    const enPassantSquare = this.state.enPassantSquare.slice(0, this.state.stepNumber + 1);
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
    if (makesSelfChecked(this.state.whiteIsMoving, pieceCode, i, squares, this.state.whiteKingLocation, this.state.blackKingLocation)) {
      this.returnToFirstClick()
      return
    }
    // reset squares to how they were before
    squares[i] = tempDelete
    squares[this.state.pieceLocation] = pieceCode
    if (pieceCode === "oo" || pieceCode === "ooo"){
      if (this.state.whiteIsMoving)
        squares[this.state.pieceLocation] = "WK"
      else
        squares[this.state.pieceLocation] = "BK"
    }

    playMove(rowOf(i), pieceCode)
    // Make moveHistory label (e4, Bh5, etc..)
    let moveLabel = getMoveLabel(pieceCode, i, this.state.pieceLocation, this.state.promotionPiece, this.state.whiteIsMoving, squares)

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
    if ((pieceCode === "WPe" && (i<24 && i >=16) && (colOf(this.state.pieceLocation) != colOf(i)) && (canEnPassant.at(-1))) ||
        (pieceCode === "BPe" && (i<48 && i >=40) && (colOf(this.state.pieceLocation) != colOf(i)) && (canEnPassant.at(-1)))){
      if (this.state.whiteIsMoving)
        squares[i + 8] = "empty"
      else
        squares[i - 8] = "empty"
    }

    let inCheckBool = false;
    // Check if in check
    if (this.state.whiteIsMoving){
      if (controlledBy("White", this.state.blackKingLocation, squares).length !== 0){
        inCheckBool = true;
        console.log("Black is in Check")
      }
    }
    else{
      if (controlledBy("Black", this.state.whiteKingLocation, squares).length !== 0){
        inCheckBool = true;
        console.log("White is in Check")
      }
    }

    let pLocation = this.state.pieceLocation
    let enPassantBool = false;
    let ePSquare = null;
    // Checking if en passant is possible
    if ((pieceCode === "WP" || pieceCode === "BP") && 
      ((pLocation < 56 && pLocation >=48) || (pLocation < 16 && pLocation >= 8)) &&
      ((i<32 && i>=24) || (i <40 && i >= 32))) {// If a pawn has just moved 2 squares
      enPassantBool = true;
      ePSquare = i;
      }

    this.setState({
      history: history.concat([
        {
          squares: squares,
        }
      ]),
      moveHistory: moveHistory.concat([moveLabel]),
      inCheck: inCheck.concat([inCheckBool]),
      canEnPassant: canEnPassant.concat([enPassantBool]),
      enPassantSquare: enPassantSquare.concat([ePSquare]),
      stepNumber: history.length,
      whiteIsMoving: !this.state.whiteIsMoving,
      clickNumber: 1,
      movingPiece: null,
      pieceLocation: null,
      promotionPiece: null,
    });
    return;
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
    if (isWhitePiece(squares[i]) && this.state.whiteIsMoving === false)
      return;
    else if (isWhitePiece(squares[i]) === false && this.state.whiteIsMoving)
      return;
    
    // If the king is in double check, only allow the king to be moved
    if (inCheck.at(-1)){
      if (this.state.whiteIsMoving && controlledBy("Black",this.state.whiteKingLocation,squares).length > 1 && squares[i] !== "WK"){
        return;
      }
      else if(!this.state.whiteIsMoving && controlledBy("White",this.state.blackKingLocation,squares).length > 1 && squares[i] !== "BK"){
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
    if (isWhitePiece(squares[i]) && this.state.whiteIsMoving) {
      this.returnToFirstClick();
      return;
    }
    else if (!isWhitePiece(squares[i]) && !this.state.whiteIsMoving && squares[i] != "empty") {
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
    if (rowOf(loc1) === rowOf(loc2))
      direction = rowOf(loc1)
    else if (colOf(loc1) === colOf(loc2))
      direction = colOf(loc1)
    else if (forwardSlashDiagOf(loc1) === forwardSlashDiagOf(loc2))
      direction = forwardSlashDiagOf(loc1)
    else if (backSlashDiagOf(loc1) === backSlashDiagOf(loc2))
      direction = backSlashDiagOf(loc1) 
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
          checkingPiece = controlledBy("Black", this.state.whiteKingLocation, squares)[0]
          direction = this.getDirection(checkingPiece, this.state.whiteKingLocation)
        }
      else{
        checkingPiece = controlledBy("White", this.state.blackKingLocation, squares)[0]
        direction = this.getDirection(checkingPiece, this.state.blackKingLocation)
      }
    }

    let movingColor = this.state.whiteIsMoving
    // movingColor is true if it is white, and false if it is black
    
    let moveList = RcontrolList(this.state.pieceLocation, movingColor, squares, false)
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
        colOf(i - (n*8)) != colOf(i))
        break;
      // If empty square
      if (squares[i - (n*8)] == "empty")
      {
        moveList.push(i - (n*8))
        continue;
      }
      // if own piece
      else if (isWhitePiece(squares[i - (n*8)]) === movingColor){
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
        colOf(i + (n*8)) != colOf(i))
        break;
      // If empty square
      if (squares[i + (n*8)] == "empty")
      {
        moveList.push(i + (n*8))
        continue;
      }
      // if own piece
      else if (isWhitePiece(squares[i + (n*8)]) === movingColor){
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
        rowOf(i - n) != rowOf(i))
        break;
      // If empty square
      if (squares[i - (n)] == "empty")
      {
        moveList.push(i - (n))
        continue;
      }
      // if own piece
      else if (isWhitePiece(squares[i - (n)]) === movingColor){
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
        rowOf(i + n) != rowOf(i))
        break;
      // If empty square
      if (squares[i + (n)] == "empty")
      {
        moveList.push(i + (n))
        continue;
      }
      // if white piece
      else if (isWhitePiece(squares[i + (n)]) === movingColor){
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
          checkingPiece = controlledBy("Black", this.state.whiteKingLocation, squares)[0]
          direction = this.getDirection(checkingPiece, this.state.whiteKingLocation)
        }
      else{
        checkingPiece = controlledBy("White", this.state.blackKingLocation, squares)[0]
        direction = this.getDirection(checkingPiece, this.state.blackKingLocation)
      }
    }
    // make a list of all possible knight moves at a given pieceLocation
    let moveList = NcontrolList(this.state.pieceLocation)

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
          checkingPiece = controlledBy("Black", this.state.whiteKingLocation, squares)[0]
          direction = this.getDirection(checkingPiece, this.state.whiteKingLocation)
        }
      else{
        checkingPiece = controlledBy("White", this.state.blackKingLocation, squares)[0]
        direction = this.getDirection(checkingPiece, this.state.blackKingLocation)
      }
    }

    let movingColor = this.state.whiteIsMoving
    // movingColor is true if it is white, and false if it is black

    let moveList = BcontrolList(this.state.pieceLocation, movingColor, squares, false)
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
          checkingPiece = controlledBy("Black", this.state.whiteKingLocation, squares)[0]
          direction = this.getDirection(checkingPiece, this.state.whiteKingLocation)
        }
      else{
        checkingPiece = controlledBy("White", this.state.blackKingLocation, squares)[0]
        direction = this.getDirection(checkingPiece, this.state.blackKingLocation)
      }
    }

    let movingColor = this.state.whiteIsMoving
    // movingColor is true if it is white, and false if it is black

    let moveList = QcontrolList(this.state.pieceLocation, movingColor, squares, false)
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

  KmoveProcess(i)
  {
    const inCheck = this.state.inCheck.slice(0, this.state.stepNumber + 1);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let movingColor = this.state.whiteIsMoving
    // moving color tells what color king is moving

    // Makes a list of possible moves
    let moveList = KcontrolList(this.state.pieceLocation)
    console.log(moveList)

    // check for castling
    if (movingColor) {
      if (i === 58){
        if (squares[57] === "empty" && squares[58] === "empty" && squares[59] === "empty" && squares[56] === "WR" && !this.state.whiteKingMoved &&
        controlledBy("Black", 57, squares).length === 0 && controlledBy("Black", 58, squares).length === 0)
        {
          this.Update(i, "ooo")
        }
      }
      else if (i === 62)
      {
        console.log("i'm in the short castling place")
        if (squares[61] === "empty" && squares[62] === "empty" && squares[63] === "WR" && !this.state.whiteKingMoved &&
        controlledBy("Black", 61, squares).length === 0 && controlledBy("Black", 62, squares).length === 0)
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
        && controlledBy("White", 2, squares).length === 0 && controlledBy("White", 3, squares).length === 0){
          this.Update(i, "ooo")
        }
      }
      else if (i === 6)
      {
        if (squares[5] === "empty" && squares[6] === "empty" && squares[7] === "BR" && squares[4] == "BK" && !this.state.blackKingMoved &&
        controlledBy("White", 5, squares).length === 0 && controlledBy("White", 6, squares).length === 0){
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
        if (squares[moveList[i]][0] === ownColor[0] || controlledBy(opponentColor, moveList[i], squares).length !== 0)
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
      if (controlledBy("Black", i, squares).length !== 0){
        this.returnToFirstClick()
        return;
      }
      this.Update(i, "WK")
    }
    else{
      if (controlledBy("White", i, squares).length !== 0){
        this.returnToFirstClick()
        return;
      }
      this.Update(i, "BK")
    }
    this.returnToFirstClick()
    return;
  }

  async PmoveProcess(i)
  {
    const enPassantSquare = this.state.enPassantSquare.slice(0, this.state.stepNumber + 1)
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
          checkingPiece = controlledBy("Black", this.state.whiteKingLocation, squares)[0]
          direction = this.getDirection(checkingPiece, this.state.whiteKingLocation)
        }
      else{
        checkingPiece = controlledBy("White", this.state.blackKingLocation, squares)[0]
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
    moveList = moveList.concat(PcontrolList(this.state.pieceLocation, movingColor), this.PmoveList(this.state.pieceLocation, movingColor))
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
          await this.choosePromotion(i, this.state.whiteIsMoving)
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
        if (i >= 56 && i < 64){
          await this.choosePromotion(i, this.state.whiteIsMoving)
          this.Update(i, "BP")
        }
        else
          this.Update(i, "BP")
        this.returnToFirstClick()
        return;
      }
    }

    // this means the click was a capture or en passant
    if (squares[i] != "empty" && movingColor){
      if (inCheck.at(-1) && i !== checkingPiece) {return}
      if (i >= 0 && i < 8){
        await this.choosePromotion(i, this.state.whiteIsMoving)
        this.Update(i, "WP")
      }
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
      if (i < 24 && i >= 16 && squares[i + 8] === "BP" && enPassantSquare.at(-1) === (i + 8)){
        this.Update(i, "WPe")
        this.returnToFirstClick()
        return;
      } else {this.returnToFirstClick(); return}
    }
    else if (squares[i] != "empty" && movingColor === false){
      if (inCheck.at(-1) && i !== checkingPiece) {return}
      if (i >= 56 && i < 64){
        await this.choosePromotion(i, this.state.whiteIsMoving)
        this.Update(i, "BP")
      }
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
      if (i < 48 && i >= 40 && squares[i - 8] === "WP" && enPassantSquare.at(-1) === (i - 8)){
        this.Update(i, "BPe")
        this.returnToFirstClick()
        return;
      } else {this.returnToFirstClick(); return}
    }
    else{
      // no piece to capture and no en passant
      console.log("there is no piece to capture")
      this.returnToFirstClick()
    }
    return;
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
  // Depending on what is chosen, change this.state.promotionPiece accordingly, and return
  async choosePromotion(i, color){
    // Render the squares
    console.log("in choose promotion")
    ReactDOM.render(this.PromotionSquares(i, color), document.getElementById("promotion"))

    // Now, wait until one of the squares gets clicked. Then, set this.state.promotionPiece accordingly
    console.log("this.state.promotionPiece is " + this.state.promotionPiece + " right before the first getpromotionpiece is called")
    let promotionPiece = await this.getPromotionPiece();
    while(promotionPiece === "not resolved"){
      promotionPiece = await this.getPromotionPiece();
    }
    // Unrender the squares
    ReactDOM.unmountComponentAtNode(document.getElementById("promotion"))
    console.log("choosePromotion is done. promotion piece is " + this.state.promotionPiece)
  }

  PromotionSquares(i, color){
    let bgColor = ""
    let borderColor = ""
    if (isLightSquare(i)){ bgColor = "#eeeed2"; borderColor = "#769656"}
    else{bgColor = "#769656"; borderColor = "#eeeed2"}
    let pieceColor= "W"
    if (!color) {pieceColor = "B"}
    let buttonList = [];
    let pieceList = ["Q", "R", "B", "N"]
    buttonList.push(<div><Button onClick={() => this.setPromotionPiece(pieceList[0])} style={{backgroundColor: bgColor,alignItems: 'center',borderRadius: 0,border: '2px solid' + borderColor,width: '80px', height: '80px',
    borderTop: '4px', borderLeft: '4px',}}>
      {pieceImage(pieceColor + pieceList[0])}
    </Button><Button onClick={() => this.setPromotionPiece(pieceList[1])} style={{backgroundColor: bgColor,alignItems: 'center',borderRadius: 0,border: '2px solid' + borderColor,width: '80px', height: '80px',
    borderTop: '4px', borderRight: '4px',
    }}>
      {pieceImage(pieceColor + pieceList[1])}
    </Button></div>
    )
    buttonList.push(<div><Button onClick={() => this.setPromotionPiece(pieceList[2])} style={{backgroundColor: bgColor,alignItems: 'center',borderRadius: 0,border: '2px solid' + borderColor,width: '80px', height: '80px',
    borderBottom: '4px', borderLeft: '4px',}}>
      {pieceImage(pieceColor + pieceList[2])}
    </Button><Button onClick={() => this.setPromotionPiece(pieceList[3])} style={{backgroundColor: bgColor,alignItems: 'center',borderRadius: 0,border: '2px solid' + borderColor,width: '80px', height: '80px',
    borderBottom: '4px', borderRight: '4px',
    }}>
      {pieceImage(pieceColor + pieceList[3])}
    </Button></div>
    )
    return (buttonList)
  }


  getPromotionPiece(){
    return new Promise(resolve => {
      if (this.state.promotionPiece === null){
        setTimeout(() => {
          resolve("not resolved");
        }, 100);
      }else{
        setTimeout(() => {
          resolve("resolved");
        }, 100);
      }
    });
  }

  // Given a pieceCode (Q, R, B, N), set the this.state.promotionPiece as that
  setPromotionPiece(pieceCode){
    this.setState({promotionPiece: pieceCode})
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
          controlList = controlList.concat(RcontrolList(n, this.state.whiteIsMoving, squares, false))
          break;
        case 'B':
          controlList = controlList.concat(BcontrolList(n, this.state.whiteIsMoving, squares, false))
          break;
        case 'Q':
          controlList = controlList.concat(QcontrolList(n, this.state.whiteIsMoving, squares, false))
          break;
        case 'N':
          controlList = controlList.concat(NcontrolList(n))
          break;
      }
      for (let n = 0; n < controlList.length; n++){
        if (controlList[n] === i) {return true;}
      }
    }
    return false;
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
    moveList = moveList.concat(KcontrolList(this.state.whiteKingLocation))
    ownColor = "White"
    opponentColor = "Black"
  }
  else{
    kingLocation = this.state.blackKingLocation
    moveList = moveList.concat(KcontrolList(this.state.blackKingLocation))
    ownColor = "Black"
    opponentColor = "White"
  }
  squares[kingLocation] = "empty"
  // For each square, check if it's own piece is there OR if it is controlled by an opponent piece
  //   if it is, remove it from the list, because the king cannot move there
  // If the list is not empty, return false, because the king can move and therefore there is no winner
  for (let i = 0; i < moveList.length;){
    if (squares[moveList[i]][0] === ownColor[0] || controlledBy(opponentColor, moveList[i], squares).length !== 0)
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
  let controllingPieces = controlledBy(opponentColor, kingLocation, squares)
  // If controlledBy returns a list of more than 1 element, then the opposite color of moving color won
  if (controllingPieces.length > 1)
    return true;
  
  console.log("getting to 1706")
  // If not, see if the checking piece can be captured
  //    If it can be captured, then return false, because movingColor still has a possible move
  //    If the checking piece can only be captured by the king, return true, because there is no way of blocking the line of sight
  //    If the checking piece is right next to the king
  if (controlledBy(ownColor, controllingPieces[0], squares).length !== 0)
    if ((controlledBy(ownColor, controllingPieces[0], squares).length === 1 && 
    (controlledBy(ownColor, controllingPieces[0], squares)[0] == this.state.blackKingLocation || 
    controlledBy(ownColor, controllingPieces[0], squares)[0] == this.state.whiteKingLocation))){
      return true;
    } else{
      // If the piece can capture without putting its own king in check, return false
      // Else, return true, because it's checkmate!
      let tempDelete = squares[controllingPieces[0]] // piece at capture location
      let tempDelete2 = squares[controlledBy(ownColor, controllingPieces[0], squares)[0]] // piece at capturing location
      let tempDelete3 = controlledBy(ownColor, controllingPieces[0], squares)[0] // captrue location
      squares[controllingPieces[0]] = squares[controlledBy(ownColor, controllingPieces[0], squares)[0]] // Capture location is the capturing piece
      squares[controlledBy(ownColor, controllingPieces[0], squares)[0]] = "empty"
      if(this.state.whiteIsMoving){
        if (controlledBy("Black", this.state.whiteKingLocation, squares).length !== 0){
          squares[controllingPieces[0]] = tempDelete // Capture location is returned
          squares[tempDelete3] = tempDelete2
          return true;
        }
      }
      else{
        if (controlledBy("White", this.state.blackKingLocation, squares).length !== 0){
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
  if (rowOf(controllingPieces[0]) === rowOf(kingLocation))
    direction = rowOf(kingLocation)
  else if (colOf(controllingPieces[0]) === colOf(kingLocation))
    direction = colOf(kingLocation)
  else if (forwardSlashDiagOf(controllingPieces[0]) === forwardSlashDiagOf(kingLocation))
    direction = forwardSlashDiagOf(kingLocation)
  else if (backSlashDiagOf(controllingPieces[0] === backSlashDiagOf(kingLocation)))
    direction = backSlashDiagOf(kingLocation) 
  //         Then, run canBeBlocked(), a function that, given two piece locations, a color, and a row, column, or diagonal, 
  //             returns a list of squares in which a piece can go to in order to block the check
  //       if beBlockedList is empty, return true, because the color won!
  if (this.beBlockedList(kingLocation, controllingPieces[0], ownColor, direction).length !== 0)
    return false
  return true;
}

setMode(mode){
  if (mode === "Free play" && !this.state.freePlayMode) {this.resetBoard(); return;}
  else if (mode === "Free play") {return;}
  let openingName = "Current Opening: "
  if (openingName + mode === this.state.openingName) {return;}
  this.resetBoard();
  this.setState({freePlayMode: false})
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
  const flipBoard = <button className = "moves" id = "flipboard" onClick={() => this.setState({isBoardFlipped: !this.state.isBoardFlipped})}>
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
        <div id = "promotion"></div>
        <div>{flipBoard}</div>
        <div>{moves}</div>
      </div> 
    </div>
  );
  }
}

function searchProcess() {
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

ReactDOM.render(<Game />, document.getElementById("root"));
const searchBar = document.getElementById("myInput")
searchBar.onkeyup = function() {searchProcess()}
