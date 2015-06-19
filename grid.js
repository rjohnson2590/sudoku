// var nums = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
// var nums='.781...2.1...62..35...9....8.....4.6.61.7..9..9....3.....5.42.76...8..3..5.7..9..'
// var nums = '5...68..........6..42.5.......8..9....1....4.9.3...62.7....1..9..42....3.8.......'
var nums = '.94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8'

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
function trim() {
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
		}	
	}		return options
}

// var ones=[];
// Game.prototype.ones= function(){
// 	for(var j=0; j<this.cells.length; j++){
// 		var inRow=this.recognize('row',this.cells[j].row)
// 			// console.log(inRow)
// 		var inCol=this.recognize('col',this.cells[j].col)
// 			// console.log(inCol)
// 		var inBlock=this.recognize('block',this.cells[j].block
// 				)
// 			// console.log(inBlock)
// 		var exist =__.union(inBlock,inCol,inRow)
// 			// console.log(exist)
// 		var options=__.difference(this.fullGroup,exist)
// 				if (options.length === 1){
// 					ones.push(1) 
// 				}
// 			}
// 			// console.log(ones)
// }

Game.prototype.solve=function(){
	// var options=[];

	for(var i=0; i<this.cells.length;i++){
		var ones=[];
			for(var j=0; j<this.cells.length; j++){
				if(this.cells[j].val=='.'){
			var inRow=this.recognize('row',this.cells[j].row)
				// console.log(inRow)
			var inCol=this.recognize('col',this.cells[j].col)
				// console.log(inCol)
			var inBlock=this.recognize('block',this.cells[j].block
					)
				// console.log(inBlock)
			var exist =__.union(inBlock,inCol,inRow)
				// console.log(exist)
			var options=__.difference(this.fullGroup,exist)
					if (options.length === 1){
						ones.push(1) 
					}
				}
		}
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
			// console.log('+------+')
			// console.log("times")
			// console.log(ones)
			if(ones.length > 0){
				console.log(ones)
				if(options.length===1){
					// console.log('howdy')
					this.cells[i].val=options[0]
					// console.log(this.cells[i].val)
				}
			} else if(ones.length===0){
					if(options.length ===2){
						console.log("maybe?")
					  var otherCells =[];
					  var blockCells = this.cells[i].block
					  for(var h=0;h<this.cells.length;h++){
					  	if(this.cells[h].block===blockCells && this.cells[h].val=='.'&& h !== i){
								var inRow=this.recognize('row',this.cells[h].row)
								
								var inCol=this.recognize('col',this.cells[h].col)
								
								var inBlock=this.recognize('block',this.cells[h].block)
							
								var exists =__.union(inBlock,inCol,inRow)
								// console.log("exists")
								// console.log(exists)
								// console.log("options")
								// console.log(options)
								var otherOptions=__.difference(options,exists)
								// console.log(j)
								// console.log("otherOptions")
								// console.log(otherOptions)
								// otherCells.push(otherOptions)
								if(otherOptions.length===1){
						  		this.cells[i].val=otherOptions[0]
						  		otherOptions.length=0
					  		}

					  	}

					  }
						  // var limit = __.difference(otherOptions,options)
						  // console.log("hello")
						  // console.log(limit)
						  // console.log('goodbye')
						  // 	if(limit.length===1){
						  // 		this.cells[i].val=limit[0]
					  	// 	}

					  		
					} else if(options.length >2){
					  var otherCells =[];
					  var blockCells = this.cells[i].block
					  for(var k=0;j<this.cells.length;k++){
					  	if(this.cells[k].block===blockCells && this.cells[k].val=='.'&& k !== i){
								var inRow=this.recognize('row',this.cells[k].row)
								
								var inCol=this.recognize('col',this.cells[k].col)
								
								var inBlock=this.recognize('block',this.cells[k].block)
							
								var existss =__.union(inBlock,inCol,inRow)
								// console.log("exists")
								// console.log(exists)
								// console.log("options")
								// console.log(options)
								var otherOptionss=__.difference(options,existss)
								// console.log("otherOptionss")
								// console.log(otherOptionss)
								// otherCells.push(otherOptions)
								if(otherOptionss.length===1){
						  		this.cells[i].val=otherOptionss[0]
						  		otherOptionss.length=0
					  		}

					  	}

					  }
						  // var limit = __.difference(otherOptions,options)
						  // console.log("hello")
						  // console.log(limit)
						  // console.log('goodbye')
						  // 	if(limit.length===1){
						  // 		this.cells[i].val=limit[0]
					  	// 	}
					  	
					}
					  		
			  }
	ones.length=0	}

	}
			
	
}

// write function that looks at other cells within block and row and col. Anaylze those cells and see if there are comparable missing numbers.

var game = new Game(nums)



for(var i=0; i<game.cells.length;i++){
	while(game.cells[i].val === '.' ){
		game.solve()
		// game.ones()
		console.log(count())
		console.log(game.cells)
	}
}

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

// game.ones()
// game.solve()c

// game.solve()
/*game.solve()
game.ones()
console.log(game.cells)
console.log(count())
game.solve()
game.ones()
console.log(game.cells)
console.log(count())
game.solve()
game.ones()
console.log(game.cells)
console.log(count())
game.solve()
game.ones()
console.log(game.cells)
console.log(count())
game.solve()
game.ones()
console.log(game.cells)
console.log(count())
game.solve()
game.ones()
console.log(game.cells)
console.log(count())*/
// game.solve()
// game.ones()
// console.log(game.cells)
// console.log(count())
// game.solve()
// game.ones()
// console.log(game.cells)
// console.log(count())
// game.solve()
// game.ones()
// console.log(game.cells)
// console.log(count())
// game.solve()
// game.ones()
// console.log(game.cells)
// console.log(count())
// game.solve()
// game.ones()
// console.log(game.cells)
// console.log(count())
// game.solve()
// game.ones()
// console.log(game.cells)
// console.log(count())
// game.solve()
// game.ones()
// console.log(game.cells)
// console.log(count())
// game.solve()
// game.ones()
// console.log(game.cells)
// console.log(count())
// game.solve()
// game.ones()
// console.log(game.cells)
// console.log(count())
// game.solve()
// game.ones()
// console.log(game.cells)
// console.log(count())
// game.solve()
// game.ones()
// console.log(game.cells)
// console.log(count())
// game.solve()
// game.ones()
// console.log(game.cells)
// console.log(count())
// game.solve()
// game.ones()
// console.log(game.cells)
// console.log(count())
// game.solve()
// game.ones()
// console.log(game.cells)
// console.log(count())



	
module.exports = {
	printToHTML: printToHTML,
	Game: Game,
	Cell: Cell,
	findBlock: findBlock,
	nums: nums

}




































