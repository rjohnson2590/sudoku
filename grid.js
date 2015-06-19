// var nums = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
// var nums='.781...2.1...62..35...9....8.....4.6.61.7..9..9....3.....5.42.76...8..3..5.7..9..'
var nums = '4....9.....541...3........7.......2..31.7...89.6..3.......9....1..6...8...75...46'

var __= require('lodash')


function printToHTML(games) {
	var table = document.createElement('table');
	// var tr = document.createElement('tr');
	var td;
	for(var i = 0; i<games.cells.length; i++) {
		var cell = games.cells[i]; 
		if(i%9===0) {
			tr = document.createElement('tr'); 
			table.appendChild(tr);
		}
		td = document.createElement('td');
		td.innerHTML = cell.val;
		tr.appendChild(td);
	}
	document.body.appendChild(table);
}



function Cell(row, col, block, val) {
	this.row = row;
	this.col = col;
	this.block = block;
	this.val = val;
}

function findBlock(row,col) {
	var block = 0;
	if(row === 1 || row === 2 || row === 3) {
		block+=0;
	} else if (row === 4 || row === 5 || row === 6) {
		block+=3;
	} else {
		block+=6;
	}

	if(col === 1 || col === 2 || col === 3) {
		block+=1;
	} else if (col === 4 || col === 5 || col === 6) {
		block+=2;
	} else {
		block+=3;
	}
	return block;
}


function Game(nums) {
	var numArray = Array.prototype.slice.call(nums);
	var cells = [];
	var rowCounter = 0;
	var col;
	this.fullGroup = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];	
	for(var i = 0; i<numArray.length; i++) {
		col = (i%9)+1;
		if(i%9===0) {
			rowCounter++;
		}
		cells.push(new Cell(rowCounter,col,findBlock(rowCounter,col),numArray[i]));
	}
	this.cells = cells;
}

Game.prototype.recognize= function(group,number){
		var result=[];
		for (var i=0; i<this.cells.length;i++){
				if(this.cells[i][group]==number){
					result.push(this.cells[i].val)	
				}
				var contents=[];
				result.forEach(function(cell){
					if (cell !== '.'){
						contents.push(cell)
					}
				})
		}
		result =contents
		return result	
	} 

Game.prototype.whatsMissing= function(thing,number){
		var whatsInIt = this.recognize(thing, number);
        var result = __.difference(this.fullGroup, whatsInIt);
            return result;
                        }


// Game.prototype.groupMake= function(){
// 	for(var i=0; i<result.length;i++){
// 		if(result[i]==='.'){
// 			for(var j=1; j<10;j++){
// 				h=j.toString()
// 				if( result[0] !== h &&result[1] !== h && result[2] !== h && result[3] !== h && result[4] !== h && result[5] !== h && result[6] !== h && result[7] !== h && result[8] !== h && result[9] !== h){
// 				result.splice(i,1,h)
// 				}
// 			}
// 		}
// 	}
// 	return result
// }


Game.prototype.solve=function(){
	// var options=[];
	for(var i=0; i<this.cells.length;i++){
		if(this.cells[i].val=='.'){
			var inRow=this.recognize('row',this.cells[i].row)
			// console.log(inRow)
			var inCol=this.recognize('col',this.cells[i].col)
			// console.log(inCol)
			var inBlock=this.recognize('block',this.cells[i].block
				)
			// console.log(inBlock)
			var exist =__.union(inBlock,inCol,inRow)
			// console.log(exist)
			var options=__.difference(this.fullGroup,exist)
			// console.log(options)
			console.log(options)
			console.log('+------+')
			if(options.length===1){
				console.log('howdy')
				this.cells[i].val=options[0]
				// console.log(this.cells[i].val)
			} else if(options.length===2){
					console.log('hello')
					console.log(i)
					console.log(this.whatsMissing('block',this.cells[i].block))
					this.cells[i].val=options[1]
			  }
		}
	}
			
	// return options
}

// write function that looks at other cells within block and row and col. Anaylze those cells and see if there are comparable missing numbers.

var game = new Game(nums)



// for(var i=0; i<game.cells.length;i++){
// 	while(game.cells[i].val === '.' ){
// 		game.solve()
// 		// console.log(game.cells)
// 	}
// }

	// console.log(game.recognize('row',1))
	// console.dir(game.solve());
	// console.dir(game.solve());
function count(){
	var counter=0;
	for(var i =0; i<game.cells.length; i++){
		if(game.cells[i].val=='.'){
			counter ++
		}
	}
	return counter
}

game.solve()
game.solve()
	// console.dir(game.solve())
	// console.log(game.cells[16])
	// console.log(count())
	// console.dir(game.solve())
	// console.log(game.cells)	
	// console.log(count())
	// console.dir(game.solve())
	// console.log(game.cells)	
	// console.log(count())
	// console.dir(game.solve());
	// console.log("+__________+")
	// console.log(count())

	





































