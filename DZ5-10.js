"use strict";

console.log ("hi DZ5-10")

var a = 0;
var b = 0;
var c = 0;

// Задание №5
function isEven (a) {
	if (a == 0){
		return true;
	}
	else if (a == 1){
		return false;
	} 
	else if (a < 0){
		return isEven(-a);
	} 
	else {
		return isEven(a-2);
		}
}

// Задание №6
function countBS(str) {
	var count = 0;
	for (a=0; a<str.length;a++)
		if (str.charAt(a)== "b") {
			count++;
		}
	
	return count;
}

function countChar(str, b) {
	var count = 0;
	for (a=0; a<str.length;a++)
		if (str.charAt(a)== b) {
			count++;
		}
	
	return count;
}



// Задание №7
function sumRange (min,max, step){
	var arr=[] , min, max, i, res=0, step;
	
	if (step == null){
		step = 1
	}
	
	if (step > 0){
		for (i=min; i<=max;i+=step){
			arr.push(i)
			res+=i
		}
	}
	
	if (step <0){
		for (i=min; i>=max;i+=step){
		arr.push(i)
		res+=i
		}
	}
	console.log (arr)
	return res
}

// Задание 8

function reverseArray (arr){
	var arr, arr2=[],i;
	
	//Вариант 1

	for (i=0; i<arr.length;i++){
		arr2.unshift(arr[i])
	}
	
	// Вариант 2

	for (i=arr.length; i>0; i--){
		arr2.push(arr[i-1])
	}
	return arr2;
}

function reverseArrayInPlace (arr){
	var arr, arr2=[],i;
	
	//Вариант 1

	for (i=0; i<arr.length;i++){
		arr2.unshift(arr[i])

	}

	// Вариант 2
	// for (i=arr.length; i>0; i--){
	// 	arr2.push(arr[i-1])
	// }
	
	for (i=0; i<arr2.length; i++){
		arr[i]=arr2[i]
	}

	return arr;
}

// Задание №9

function arrayToList (){
	

	
}

