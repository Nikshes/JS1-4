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

// Задача №3 
function chessboard3(x,y) {
	var x;
	var y;
	var a="#"
	var b=" "
	for (a="#"; a.length<x;a=a+b){	
	console.log(a)
		for (b=" "; b.length<y;b=b+a){
			console.log(b)
		} 

	}
	
console.log (b)
}


function cb (){
	var x;
	var y;
	for (x=0; x<=8; x++){
	
		console.log("#")
	
	console.log(x)
	}
	console.log(x)
}











// Задача №4
function min (a,b){
	return a < b ? a : b;
}