export function colOf(i) {
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
export function rowOf(i){
return (8 - Math.floor(i/8)).toString()
}

export function forwardSlashDiagOf(i)
{
if (i % 7 === 0) {if (i === 0) {return "a8"} else if (i === 63) {return "h1"} else {return "a1-h8"}}
if (i % 7 === 1) {if (i < 7 * 2) {return "a7-b8"} else {return "b1-h7"}}
if (i % 7 === 2) {if (i < 7 * 3) {return "a6-c8"} else {return "c1-h6"}}
if (i % 7 === 3) {if (i < 7 * 4) {return "a5-d8"} else {return "d1-h5"}}
if (i % 7 === 4) {if (i < 7 * 5) {return "a4-e8"} else {return "e1-h4"}}
if (i % 7 === 5) {if (i < 7 * 6) {return "a3-f8"} else {return "f1-h3"}}
if (i % 7 === 6) {if (i < 7 * 7) {return "a2-g8"} else {return "g1-h2"}}
}

export function backSlashDiagOf(i)
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


function makeList(startingNumber, increment, numberOfElements){
  let returnList = []
  for (let i = 0; i < numberOfElements; i++){
    returnList.push(startingNumber + increment*i)
  }
  return returnList
}

export function // a function that takes any given direction and returns a list of all squares in that direction in order
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

export function getDirection(loc1, loc2){
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
