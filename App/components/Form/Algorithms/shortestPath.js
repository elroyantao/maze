export function findShortestPath({mazeData,start,end}) {
  let fullPaths = [];
  findNextPath([start],{mazeData,start,end,fullPaths});

  if (fullPaths.length) {
    fullPaths.sort(function(arr1, arr2) {
      return arr1.length - arr2.length;
    });
    let shortestPath = fullPaths[0];
    shortestPath.pop();
    shortestPath.shift();
    return shortestPath;

  }else {
    return false;
  }
}

function equalArray(array1, array2) {
  return (array1.length == array2.length) && array1.every(function(element, index) {
    return element === array2[index];
  });
}

function findNextPath(currentPath,{mazeData,start,end,fullPaths}) {
  if (equalArray(currentPath[currentPath.length - 1], end)) {
    fullPaths.push(currentPath);
    return;
  }
  var firstpath = true;
  // var currentPath = paths[id];
  var currentPos = currentPath[currentPath.length - 1];
  if (currentPos[0] > 0 && mazeData[currentPos[0]][currentPos[1]][0] == 0 && mazeData[currentPos[0] - 1][currentPos[1]][2] == 0) {
    var probablePos = [
      currentPos[0] - 1,
      currentPos[1]
    ];
    if (!currentPath.some(function(pos) {
      return equalArray(pos, probablePos)
    })) {

      var newPath = currentPath.slice();
      newPath.push(probablePos);
      findNextPath(newPath,{mazeData,start,end,fullPaths});
    }
  }
  if (currentPos[1] < mazeData[0].length - 1 && mazeData[currentPos[0]][currentPos[1]][1] == 0 && mazeData[currentPos[0]][currentPos[1] + 1][3] == 0) {
    var probablePos = [
      currentPos[0], currentPos[1] + 1
    ];
    if (!currentPath.some(function(pos) {
      return equalArray(pos, probablePos)
    })) {

      var newPath = currentPath.slice();
      newPath.push(probablePos);
      findNextPath(newPath,{mazeData,start,end,fullPaths});
    }
  }
  if (currentPos[0] < mazeData.length - 1 && mazeData[currentPos[0]][currentPos[1]][2] == 0 && mazeData[currentPos[0] + 1][currentPos[1]][0] == 0) {
    var probablePos = [
      currentPos[0] + 1,
      currentPos[1]
    ];
    if (!currentPath.some(function(pos) {
      return equalArray(pos, probablePos)
    })) {

      var newPath = currentPath.slice();
      newPath.push(probablePos);
      findNextPath(newPath,{mazeData,start,end,fullPaths});
    }
  }
  if (currentPos[1] > 0 && mazeData[currentPos[0]][currentPos[1]][3] == 0 && mazeData[currentPos[0]][currentPos[1] - 1][1] == 0) {
    var probablePos = [
      currentPos[0], currentPos[1] - 1
    ];
    if (!currentPath.some(function(pos) {
      return equalArray(pos, probablePos)
    })) {

      var newPath = currentPath.slice();
      newPath.push(probablePos);
      findNextPath(newPath,{mazeData,start,end,fullPaths});
    }
  }
  return;
}
