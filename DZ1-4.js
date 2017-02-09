"use strict";

console.log ("hi DZ1-4")

var a=0;
var b=0;

// Задача №1
function triangle() {
	for (a="#"; a.length<=7; a=a+"#"){
		console.log (a);
	}
}	

// Задача №2
function FizzBuzz () {
	for (a=0; a<=100; a++){
		if ((a%3 == 0) && (a%5 == 0)){
		console.log ("FizzBuzz");
		continue;
		}
		else {
			if (a%3 == 0){
				console.log ("Fizz");
				continue;
			}
			if (a%5 == 0){
				console.log ("Buzz");
				continue;
			}
		}
		console.log (a)
		}
}	

// function FizzBuzz2 () {
// 	for (a=0; a<=100; a++){
// 		if ((a%3 == 0) && (a%5 == 0)){
// 			console.log ("FizzBuzz");
// 			continue;
// 		}
// 		console.log (a)
// 		}
// }	

// Задача №3 
function chessboard() {
	var a = "# # # # ";
	var b = " # # # #";
	var c;
	for (c=0; c<8;c++){
		if (c%2 == 0) {
			console.log (a)
		}
 		else {
		 	console.log (b);
		} 
			
		
	}
}

// Задача №3  (решение учебника)	
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

// Задача №4
function min (a,b){
	return a < b ? a : b;
}