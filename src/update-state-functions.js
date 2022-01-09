import {colOf, rowOf, forwardSlashDiagOf, backSlashDiagOf} from './direction-functions'

export function isWhitePiece(pieceCode) {
if (pieceCode === "WR" || 
pieceCode === "WN" ||
pieceCode === "WB" ||
pieceCode === "WQ" ||
pieceCode === "WK" ||
pieceCode === "WP")
return true;
return false;
}

export function PcontrolList(i, movingColor) {
if (movingColor)
    return [i-7, i-9]
else
    return [i+7, i+9]
}

// make a list of all possible rook moves at a given pieceLocation
export function RcontrolList(i, movingColor, squares, calculatingWinner) {
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

export function NcontrolList(i) {
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
        if (parseInt(rowOf(coordinate)) - 1 == parseInt(rowOf(i)))
        moveList.push(coordinate)
    }
    else
    {
        if (parseInt(rowOf(coordinate)) - 2 == parseInt(rowOf(i)))
        moveList.push(coordinate)
    }
    }
    coordinate = distanceList[n] + i
    if (coordinate < 64 && coordinate >= 0)
    {
    if (n < 2)
    {
        if (parseInt(rowOf(coordinate)) + 1 == parseInt(rowOf(i)))
        moveList.push(coordinate)
    }
    else
    {
        if (parseInt(rowOf(coordinate)) + 2 == parseInt(rowOf(i)))
        moveList.push(coordinate)
    }
    }
}
return moveList
}

export function BcontrolList(i, movingColor, squares, calculatingWinner) {
let moveList = []
// Going up-left
for (let n = 1; n < 8; n++)
{
    // If off the board, break
    if (i - (n*9) >= 64 || i - (n*9) < 0 || 
    backSlashDiagOf(i - (n*9)) != backSlashDiagOf(i))
    break;
    // If empty square
    if (squares[i - (n*9)] == "empty")
    {
    moveList.push(i - (n*9))
    continue;
    }
    // if own color
    else if (isWhitePiece(squares[i - (n*9)]) === movingColor){
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
    backSlashDiagOf(i + (n*9)) != backSlashDiagOf(i))
    break;
    // If empty square
    if (squares[i + (n*9)] == "empty")
    {
    moveList.push(i + (n*9))
    continue;
    }
    // if own color
    else if (isWhitePiece(squares[i + (n*9)]) === movingColor){
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
    forwardSlashDiagOf(i - (n*7)) != forwardSlashDiagOf(i))
    break;
    // If empty square
    if (squares[i - (n*7)] == "empty")
    {
    moveList.push(i - (n*7))
    continue;
    }
    // if own color
    else if (isWhitePiece(squares[i - (n*7)]) === movingColor){
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
    forwardSlashDiagOf(i + (n*7)) != forwardSlashDiagOf(i))
    break;
    // If empty square
    if (squares[i + (n*7)] == "empty")
    {
    moveList.push(i + (n*7))
    continue;
    }
    // if own color
    else if (isWhitePiece(squares[i + (n*7)]) === movingColor){
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

export function QcontrolList(i, movingColor, squares, calculatingWinner) {
let tempList = []
tempList = tempList.concat(BcontrolList(i, movingColor, squares, calculatingWinner))
tempList = tempList.concat(RcontrolList(i, movingColor, squares, calculatingWinner))
return tempList
}

export function KcontrolList(i) {
let possibleDistances = [1, 7, 8, 9]
let moveList =[]
for (let n = 0; n < 4; n++) {
    let coordinate = i - possibleDistances[n]
    if (coordinate >= 0 && coordinate < 64)
    moveList.push(coordinate)
    coordinate = i + possibleDistances[n]
    if (coordinate >= 0 && coordinate < 64)
    moveList.push(coordinate)
}
return moveList
}

// Given a side (white/black) and a square i, returns a list of all piece locations of that side that control that square
export function controlledBy(side, i, squares){
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
        controlList = controlList.concat(PcontrolList(n, colorBool))
        break;
    case 'R':
        controlList = controlList.concat(RcontrolList(n, colorBool, squares, true))
        break;
    case 'B':
        controlList = controlList.concat(BcontrolList(n, colorBool, squares, true))
        break;
    case 'Q':
        controlList = controlList.concat(QcontrolList(n, colorBool, squares, true))
        break;
    case 'K':
        controlList = controlList.concat(KcontrolList(n))
        break;
    case 'N':
        controlList = controlList.concat(NcontrolList(n))
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

export function makesSelfChecked(colorBool, pieceCode, i, squares, whiteKingLocation, blackKingLocation){
    if(colorBool){
      if (pieceCode === "WK"){
        if (controlledBy("Black", i, squares).length !== 0){
          // dont allow them to suicide their own king
          return true;
        }
      }
      else if (controlledBy("Black", whiteKingLocation, squares).length !== 0){
        return true;
      }
    }
    else{
      if (pieceCode === "BK"){
        if (controlledBy("White", i, squares).length !== 0){
          // dont allow them to suicide their own king
          return true;
        }
      }
      else if (controlledBy("White", blackKingLocation, squares).length !== 0){
        return true;
      }
    }
    return false;
}

export function getMoveLabel(pieceCode, i, pieceLocation, promotionPiece){
    let moveLabel = ""
    if (pieceCode == "WP" || pieceCode == "BP" || pieceCode == "WPe" || pieceCode == "BPe"){
      moveLabel = colOf(i) + rowOf(i)
      // If it's a capture, add an x
      if (colOf(i) !== colOf(pieceLocation))
        moveLabel = colOf(pieceLocation) + "x" + moveLabel
      // if it's a promotion, do the equals thing
      if ((i <8 && i >=0) || (i < 64 && i >= 56)){
        moveLabel = moveLabel + "=" + this.state.promotionPiece
        if (this.state.whiteIsMoving)
          pieceCode = "W" + this.state.promotionPiece
        else
          pieceCode = "B" + this.state.promotionPiece
      }
    }
    else if (squares[i] != "empty")
      moveLabel = pieceCode[1] + "x" + colOf(i) + rowOf(i)
    else
      moveLabel = pieceCode[1] + colOf(i) + rowOf(i)
    return moveLabel
}