// Try a 3x3 grid

function Vector(x,y){
	this.x=x;
	this.y=y;
}

// 	var board = ['+---------+---------+---------+',
// 				 '| x  x  x | y  x  y | y  x  y |',
// 				 '  x  y  y | y  x  y | y  x  y |',
// 				 '| y  x  y | y  x  y | x  y  x |',
// 				 '+---------+---------+---------+',
// 				 '| y  x  y | x  x  y | y  y  y |',
// 				 '  y  y  x | y  x  y | x  y  y |',
// 				 '| y  y  y | y  x  x | y  x  y |',
// 				 '+---------+---------+---------+',
// 				 '| x  y  x | y  x  y | y  x  y |',
// 				 '  y  x  y | y  x  y | y  y  x |',
// 				 '| y  x  y | y  x  y | x  x  x |',
// 				 '+---------+---------+---------+' ]

function Grid(rows,cols){
	this.space= new Array(rows*cols)
	this.rows= rows;
	this.cols= cols;
}

Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && vector.x < this.rows &&
         vector.y >= 0 && vector.y < this.cols;
};
Grid.prototype.get = function(vector) {
  return this.space[vector.x + this.rows * vector.y];
};
Grid.prototype.set = function(vector, value) {
  this.space[vector.x + this.rows * vector.y] = value;
};


var grid = new Grid(9,9)

// console.log(grid.space.length)

var sudoNums='158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413'
 

var sudokuNums= sudoNums.split('')

// console.log(sudokuNums)

// var sudoNums='1582...3.'

// var sudokuNums= sudoNums.split('')

for (var i=0; i<sudokuNums.length; i++){
	for (var j=0; j<1; j++){
	grid.set(new Vector(i, j), sudokuNums[i])
	}
}	



// console.log(grid.space)
console.log(grid.get(new Vector(1,0)))

if(grid.get(new Vector(1,0))==='5'){
	 grid.set(new Vector(1, 1),'4')
}

console.log(grid.get(new Vector(1,1)))


