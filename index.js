	var board = ['+---------+---------+---------+',
				 '| x  x  x | y  x  y | y  x  y |',
				 '  x  y  y | y  x  y | y  x  y |',
				 '| y  x  y | y  x  y | x  y  x |',
				 '+---------+---------+---------+',
				 '| y  x  y | x  x  y | y  y  y |',
				 '  y  y  x | y  x  y | x  y  y |',
				 '| y  y  y | y  x  x | y  x  y |',
				 '+---------+---------+---------+',
				 '| x  y  x | y  x  y | y  x  y |',
				 '  y  x  y | y  x  y | y  y  x |',
				 '| y  x  y | y  x  y | x  x  x |',
				 '+---------+---------+---------+' ]




var nums = {
	"x": Known,
	"y": Unknown
}

function Grid(){
	this.a = new LittleBox(this);
	this.b = new LittleBox(this);
	this.c = new LittleBox(this);
	this.d = new LittleBox(this);
}

function Row(grid){
	this.grid= grid;
	this.a= new LittleBox(this);
	this.b= new LittleBox(this)
	}


function LittleBox(target){
	this.grid = target;
}

var grid= new Grid{};


// V 2

function Grid(){
	this.grid= grid;
	this.rowA= new Row(this);
	this.rowB= new Row(this);
}

function Row(grid){
	this.grid= grid;
	this.a= new LittleBox(this);
	this.b= new LittleBox(this)
}



function LittleBox(row){
	this.row= row;
}

var grid= new Grid{};

var thing = grid.rowA.b

// V 3

function Grid(){
	this.grid= grid;
	this.rowA= new Row(this);
	this.rowB= new Row(this);
	this.columnA= new Col(this);
	this.columnB= new Col(this);
}

function Row(grid){
	this.grid= grid;
	this.a= new LittleBox(this);
	this.b= new LittleBox(this)
}

function Col(grid){
	this.grid=grid;
	this.a= 
	this.b=
}

function LittleBox(row){
	this.row= row;
}

var grid= new Grid{};

var thing = grid.rowA.b


// Version 4



//Object-grid, Version 4:

function Grid() {
  
  this.rowA = new Row(this);
  this.rowB = new Row(this);
  this.colA = new Col(this);
  this.colB = new Col(this);

  var a = new LittleBox(this.rowA, this.colA);
  var b = new LittleBox(this.rowA, this.colB);
  var c = new LittleBox(this.rowB, this.colA);
  var d = new LittleBox(this.rowB, this.colB);
  
  this.rowA.a = a;
  this.rowA.b = b;
  this.rowB.a = c;
  this.rowB.b = d;
  this.colA.a = a;
  this.colA.b = c;
  this.colB.a = b;
  this.colB.b = d;
  
}

function Row(grid) {
  this.grid = grid;
}

function Col(grid) {
  this.grid = grid;
}

function LittleBox(row,col) {
  this.row = row;
  this.col = col
}

var grid =  new Grid();


// version 5


//Object-grid, Version 4:
function Grid() {
 
 this.rows= [new Row(this), new Row(this)]; 
 this.cols= [new Col(this), new Col(this)]; 

var sqrs =[
  new LittleBox(this.rowA, this.colA);
  new LittleBox(this.rowA, this.colB);
  new LittleBox(this.rowB, this.colA);
  new LittleBox(this.rowB, this.colB);
  ]
 
 var s = 0;  
for(var r=0; r<2; r++){
	for (var c=0; C<2; c++){
		this.rows[r]= sqrs[s]
	}
}

  this.rowA.a = a;
  this.rowA.b = b;
  this.rowB.a = c;
  this.rowB.b = d;
  this.colA.a = a;
  this.colA.b = c;
  this.colB.a = b;
  this.colB.b = d;
  
}

function Row(grid) {
  this.grid = grid;
}

function Col(grid) {
  this.grid = grid;
}

function LittleBox(row,col) {
  this.row = row;
  this.col = col
}

var grid =  new Grid();


// version 6
function Sqr(digit,row,col) {
	this.difit= digit;
	this.row = row;
	this.col = col;
	row.sqrs.push(this);
	col.sqrs.push(this);
}

function Col(grid) {
	this.grid = grid;
	this.sqrs = [];
}

function Row(grid) {
	this.grid = grid;
	this.sqrs = [];
}

function Grid(size) {

	this.rows = [];
	this.cols = [];
	for (var i=0; i<size; i++) {
		this.rows[i] = new Row(this);
		this.cols[i] = new Col(this);
	}

	for (var r=0; r<size; r++) {
		for (var c=0; c<size; c++) {
			new Sqr(str[c+3*r],this.rows[r],this.cols[c]);
		}
	}
}

var grid = new Grid(2);





