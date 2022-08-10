import {pieceImageList} from './piece-images'
import Button from '@mui/material/Button';

export function Square(props) {
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
export function isLightSquare(i){
  if (i % 16 < 8) {if (i % 2 === 0) {return true} else {return false}}
  else {if (i % 2 === 1) {return true} else {return false}}
}

// Given a piece code (BB, WW, etc...) return the image associated with that piece
export function pieceImage(pieceCode){
  const piece = pieceImageList.find(e => e.code === pieceCode)
  if (!piece) {return ""}
  return <img draggable={false} src = {piece.image} alt = {piece.name} />
}