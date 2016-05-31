export function validateMazeData(mazeString){
  let mazeData = [];
  try {
    mazeData = JSON.parse(mazeString);
    let invalid = false;
    let rowLength = false;
    rowloop:
    for(let row of mazeData){
      if(rowLength && row.length != rowLength){
        invalid = true;
        break rowloop;
      }
      rowLength = row.length;
      for(let cell of row){
        for(let line of cell){
          if(line !== 0 && line !== 1){
            invalid = true;
            break rowloop;
          }
        }
      }
    }
    if(invalid)return false;
    return mazeData;
  } catch (e) {
    return false;
  }
}

export function validateCell(cellString,x,y){
  let cell = [];
  try {
    cell = JSON.parse(cellString);

    if(cell.length != 2  || cell[0]<0 || cell[0] > y || cell[1] < 0 || cell[1] > x ){
      return false
    }
    return cell;
  } catch (e) {
    return false;
  }
}
