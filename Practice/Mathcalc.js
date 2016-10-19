/**
 * Created by samrobertson on 9/28/16.
 */
var squareLength = 8;
var squarePerimeter = squareLength * 4;

var triangleBase = 4;
var triangleLeftSide = 5;
var triangleRightSide = 6;
var trianglePerimeter = triangleBase + triangleLeftSide + triangleRightSide;

var circleDiameter = 3;
var pi = 3.151592;
var circleCircumference = circleDiameter * pi;

var mass = 130;
var earthGravity = mass * 9.807;
var moonGravity = mass * 1.622;
var jupiterGravity = mass * 3.711;


//here's where my matrix notes start//

//at this point you have the equivalent to this:
// var matrixA = [[number, number], [number, number]]
// var matrixB = [[number, number], [number, number]]

//initialize a result matrix
// perform the dot product
//print out result matrix


var matrixA = [[3,1],
               [0,2]];
var matrixB = [[3,7],
               [1,4]];

function dotProduct(matrixA, matrixB) {
    var matrixresult = [[],[]];
    matrixresult [0][0] = matrixA [0][0] * matrixB [0][0] + matrixA [0][1] * matrixB [1] [0];
    matrixresult [0][1] = matrixA [0][0] * matrixB [0][1] + matrixA [0][1] * matrixB [1] [1];
    matrixresult [1][0] = matrixA [1][0] * matrixB [1][1] + matrixA [0][0] * matrixB [1] [0];
    matrixresult [1][1] = matrixA [1][0] * matrixB [0][1] + matrixA [1][1] * matrixB [1] [1];
    return matrixA * matrixB;
}


