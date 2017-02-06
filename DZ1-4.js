"use strict";

console.log ("hi")

var a=0;
var b=0;



function triangle() {
	for (a="#"; a.length<=7; a=a+"#"){
		console.log (a);
	}
}	

function FizzBuzz () {
	for (a=0; a<=100; a++){
		if (a%3 == 0){
			console.log ("Fizz");
			continue;
		}
		if (a%5 == 0){
			console.log ("Buzz");
			continue;
		}
		console.log (a)
		}
}	

function FizzBuzz2 () {
	for (a=0; a<=100; a++){
		if ((a%3 == 0) && (a%5 == 0)){
			console.log ("FizzBuzz");
			continue;
		}
		console.log (a)
		}
}	

function chessboard() {
	for (a="# # # # "; a.length<=8; a=a+" \n"){
		console.log (a);

	}


}	
function chessboard2() {
var size = 8;

var board = "";

for (a = 0; a < size; a++) {
  for (b = 0; b < size; b++) {
    if ((b + a) % 2 == 0)
      board += "#";
    else
      board += " ";
  }
  board += "\n";
}

console.log(board);
}

function min (a,b) {
	return Math.min (a,b);		
}