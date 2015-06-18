var nums = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';

function printToHTML(game) {
	var table = document.createElement('table');
	// var tr = document.createElement('tr');
	var td;
	for(var i = 0; i<game.cells.length; i++) {
		var cell = game.cells[i]; 
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
	for(var i = 0; i<numArray.length; i++) {
		col = (i%9)+1;
		if(i%9===0) {
			rowCounter++;
		}
		cells.push(new Cell(rowCounter,col,findBlock(rowCounter,col),numArray[i]));
	}
	this.cells = cells;
}

console.dir(new Game(nums))