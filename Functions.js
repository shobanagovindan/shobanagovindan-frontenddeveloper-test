﻿// Complete each of the questions below. You can see the expected result for each of the questions by 

function Question1(inputArray) {
	// DUPLICATE AN ARRAY
	// You should write a function that repeats an array twice and returns it.
	// The original array should not be modified.
	var arrLength = inputArray.length;
   	var b = new Array();
      
  	for(i=0; i<arrLength; i++) {
    	b.push(inputArray[i%arrLength]);
    }
    return b;
	
}

function Question2(inputArray) {
	// REVERSE AN ARRAY
	// You should write a function that reverses an array and returns it.
	// The original array should not be modified.
	var reversedArray = new Array;
    for(var i = inputArray.length-1; i >= 0; i--) {
        reversedArray.push(inputArray[i]);
    }
    return reversedArray;
	
}

function Question3(inputArray, itemToFind) {
	// COUNT THE NUMBER OF ELEMENTS IN AN ARRAY
	// You should write a function that returns a count of the number of 'itemToFind' that exist in 'inputArray'
	
	let itemCount = 0;
    for (let i = 0, j = inputArray.length; i < j; i += 1) {
        if (inputArray[i] === itemToFind) {
            itemCount += 1;
        }
    }
    return itemCount;
}

function Question4(deckOfCardsArray) {
	// SHUFFLE A DECK OF CARDS
	// You should write a function that shuffles the items in 'deckOfCardsArray'
	// The original array should be modified

	// No return value needed
}

function Question5(inputString) {
	// REVERSE THE WORDS IN A STRING
	// You should write a function that reverses the order of the words in a string. The letters in
	// the words should be unchanged.
	// e.g. "the cat sat on the mat" should become "mat the on sat cat the"
	
	return undefined;
}