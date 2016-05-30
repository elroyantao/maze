var data = [
  [
    [
      1, 0, 0, 1
    ],
    [
      1, 0, 0, 0
    ],
    [
      1, 0, 0, 0
    ],
    [
      1, 1, 0, 0
    ],
    [
      1, 0, 0, 1
    ],
    [
      1, 0, 1, 1
    ],
    [
      1, 0, 0, 1
    ],
    [
      1, 0, 1, 1
    ],
    [
      1, 0, 0, 0
    ],
    [1, 1, 0, 1]
  ],
  [
    [
      1, 0, 1, 1
    ],
    [
      1, 0, 0, 0
    ],
    [
      1, 1, 0, 0
    ],
    [
      0, 0, 0, 1
    ],
    [
      0, 0, 0, 1
    ],
    [
      1, 0, 0, 1
    ],
    [
      0, 0, 1, 0
    ],
    [
      1, 0, 0, 1
    ],
    [
      0, 0, 0, 1
    ],
    [0, 1, 0, 0]
  ],
  [
    [
      1, 1, 0, 1
    ],
    [
      0, 0, 0, 1
    ],
    [
      0, 0, 1, 0
    ],
    [
      0, 0, 1, 0
    ],
    [
      0, 0, 0, 1
    ],
    [
      0, 0, 0, 0
    ],
    [
      1, 1, 0, 0
    ],
    [
      0, 0, 1, 1
    ],
    [
      0, 0, 0, 0
    ],
    [1, 1, 0, 0]
  ],
  [
    [
      0, 0, 0, 1
    ],
    [
      0, 0, 0, 0
    ],
    [
      1, 1, 1, 0
    ],
    [
      1, 1, 0, 1
    ],
    [
      0, 0, 0, 1
    ],
    [
      0, 0, 0, 0
    ],
    [
      0, 0, 0, 0
    ],
    [
      1, 0, 0, 1
    ],
    [
      0, 1, 0, 0
    ],
    [0, 1, 0, 1]
  ],
  [
    [
      0, 0, 1, 1
    ],
    [
      0, 0, 1, 0
    ],
    [
      1, 1, 1, 0
    ],
    [
      0, 0, 0, 1
    ],
    [
      0, 0, 1, 0
    ],
    [
      0, 1, 0, 0
    ],
    [
      1, 0, 0, 1
    ],
    [
      1, 1, 1, 0
    ],
    [
      0, 1, 0, 1
    ],
    [0, 1, 0, 1]
  ],
  [
    [
      1, 0, 0, 1
    ],
    [
      1, 1, 0, 1
    ],
    [
      1, 1, 0, 1
    ],
    [
      1, 0, 0, 1
    ],
    [
      1, 0, 1, 1
    ],
    [
      0, 0, 1, 1
    ],
    [
      1, 1, 0, 1
    ],
    [
      1, 0, 0, 1
    ],
    [
      1, 0, 0, 0
    ],
    [0, 1, 0, 1]
  ],
  [
    [
      1, 0, 0, 1
    ],
    [
      0, 0, 1, 0
    ],
    [
      1, 0, 0, 1
    ],
    [
      0, 0, 1, 0
    ],
    [
      1, 0, 0, 0
    ],
    [
      1, 0, 0, 1
    ],
    [
      0, 0, 0, 0
    ],
    [
      1, 0, 1, 0
    ],
    [
      0, 0, 0, 1
    ],
    [0, 1, 0, 1]
  ],
  [
    [
      0, 0, 0, 1
    ],
    [
      1, 0, 0, 1
    ],
    [
      0, 0, 0, 1
    ],
    [
      1, 1, 0, 0
    ],
    [
      0, 1, 1, 1
    ],
    [
      0, 0, 0, 1
    ],
    [
      0, 1, 1, 0
    ],
    [
      1, 0, 1, 1
    ],
    [
      0, 0, 0, 0
    ],
    [0, 1, 0, 0]
  ],
  [
    [
      0, 0, 0, 1
    ],
    [
      0, 0, 1, 0
    ],
    [
      1, 0, 1, 0
    ],
    [
      0, 0, 0, 0
    ],
    [
      1, 1, 0, 0
    ],
    [
      0, 0, 0, 1
    ],
    [
      1, 0, 0, 0
    ],
    [
      1, 0, 0, 1
    ],
    [
      0, 0, 0, 0
    ],
    [1, 1, 1, 0]
  ],
  [
    [
      0, 0, 1, 1
    ],
    [
      1, 0, 1, 0
    ],
    [
      1, 0, 1, 0
    ],
    [
      0, 0, 1, 0
    ],
    [
      0, 0, 1, 0
    ],
    [
      1, 0, 1, 0
    ],
    [
      0, 0, 1, 0
    ],
    [
      0, 0, 1, 1
    ],
    [
      0, 0, 1, 0
    ],
    [1, 1, 1, 0]
  ]
]

var canvas = document.getElementById("myCanvas");
var blue = [7, 4];
var orange = [5, 6];

var context = canvas.getContext("2d");
var height = 400 / data.length;
var width = 400 / data[0].length;

function drawboard() {
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      context.moveTo(50 + (j * width), 50 + (i * height));
      if (data[i][j][0]) {
        context.lineTo(50 + (j * width) + width, 50 + (i * height))
      } else {
        context.moveTo(50 + (j * width) + width, 50 + (i * height))
      }
      if (data[i][j][1]) {
        context.lineTo(50 + (j * width) + width, 50 + (i * height) + height)
      } else {
        context.moveTo(50 + (j * width) + width, 50 + (i * height) + height)
      }
      if (data[i][j][2]) {
        context.lineTo(50 + (j * width), 50 + (i * height) + height)
      } else {
        context.moveTo(50 + (j * width), 50 + (i * height) + height)
      }
      if (data[i][j][3]) {
        context.lineTo(50 + (j * width), 50 + (i * height))
      } else {
        context.moveTo(50 + (j * width), 50 + (i * height))
      }
    }
  }
  context.strokeStyle = "black";
  context.stroke();

  context.fillStyle = "rgba(0,100,220,.3)";
  context.fillRect(50 + (blue[1] * width), 50 + (blue[0] * height), width, height);
  context.fillStyle = "rgba(200,100,0,.3)";
  context.fillRect(50 + (orange[1] * width), 50 + (orange[0] * height), width, height);
}

drawboard();

var paths = [blue];
var fullPaths = [];

function findNextPath(currentPath) {
  if (equalArray(currentPath[currentPath.length - 1], orange)) {
    fullPaths.push(currentPath);
    return;
  }
  var firstpath = true;
  // var currentPath = paths[id];
  var currentPos = currentPath[currentPath.length - 1];
  if (currentPos[0] > 0 && data[currentPos[0]][currentPos[1]][0] == 0 && data[currentPos[0] - 1][currentPos[1]][2] == 0) {
    var probablePos = [
      currentPos[0] - 1,
      currentPos[1]
    ];
    if (!currentPath.some(function(pos) {
      return equalArray(pos, probablePos)
    })) {

      var newPath = currentPath.slice();
      newPath.push(probablePos);
      findNextPath(newPath);
    }
  }
  if (currentPos[1] < data[0].length - 1 && data[currentPos[0]][currentPos[1]][1] == 0 && data[currentPos[0]][currentPos[1] + 1][3] == 0) {
    var probablePos = [
      currentPos[0], currentPos[1] + 1
    ];
    if (!currentPath.some(function(pos) {
      return equalArray(pos, probablePos)
    })) {

      var newPath = currentPath.slice();
      newPath.push(probablePos);
      findNextPath(newPath);
    }
  }
  if (currentPos[0] < data.length - 1 && data[currentPos[0]][currentPos[1]][2] == 0 && data[currentPos[0] + 1][currentPos[1]][0] == 0) {
    var probablePos = [
      currentPos[0] + 1,
      currentPos[1]
    ];
    if (!currentPath.some(function(pos) {
      return equalArray(pos, probablePos)
    })) {

      var newPath = currentPath.slice();
      newPath.push(probablePos);
      findNextPath(newPath);
    }
  }
  if (currentPos[1] > 0 && data[currentPos[0]][currentPos[1]][3] == 0 && data[currentPos[0]][currentPos[1] - 1][1] == 0) {
    var probablePos = [
      currentPos[0], currentPos[1] - 1
    ];
    if (!currentPath.some(function(pos) {
      return equalArray(pos, probablePos)
    })) {

      var newPath = currentPath.slice();
      newPath.push(probablePos);
      findNextPath(newPath);
    }
  }
  return;
}

findNextPath(paths);

if (fullPaths.length) {
  fullPaths.sort(function(arr1, arr2) {
    return arr1.length - arr2.length;
  });
  console.log(fullPaths);
  var shortestPath = fullPaths[0];
  shortestPath.pop();
  shortestPath.shift();
  shortestPath.forEach(function(cell) {
    context.fillStyle = "rgba(100,200,0,.2)";
    context.fillRect(50 + (cell[1] * width), 50 + (cell[0] * height), width, height);
  })
}

function equalArray(array1, array2) {
  return (array1.length == array2.length) && array1.every(function(element, index) {
    return element === array2[index];
  });
}
