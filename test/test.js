var grid= require('../grid.js')
var chai = require('chai');
var expect = chai.expect;


describe('My sudoku solver', function() {

	var game;

	before(function () {
		game = new grid.Game(grid.nums);
		for(var i=0; i<game.cells.length;i++){
			while(game.cells[i].val === '.' ){
				game.solve()
			}
		}
	})


	it('should return all vals without .', function (){
		for(var i=0; i<game.cells.length;i++){
			expect(game.cells[i].val).to.not.equal('.')
		}
		
	})

})