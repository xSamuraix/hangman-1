// Global variables

//Arrays and Variables for holding data
var wordOptions = ["samurai", "sushi", "tokyo", "ichiro", "ramen"]
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; //j _ _ _ _ _ _ _
var wrongLetters = [];

//Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//Functions (Reusable blocks of code that I will call upon when needed)


function startGame() {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersinWord = selectedWord.split("");
	numBlanks = lettersinWord.length;

	// Reset
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	// Populate blanks and successes with right number of blanks

	for (var i=0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}

	// Chang HTML to reflect round conditions
	// document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses(" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;


	console.log(selectedWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
	// Check to see if the letter exists in the word
	alert(letter)
	
	var isletterInWord = false;

	for (var i = 0; i < numBlanks; i++) {
		if (selectedWord[i] == letter) {
			isletterInWord = true;
		}
	}

	// Check where in the word the letter exists, then populate out blanksAndSuccesses array.
	if(isletterInWord){
		for (var i = 0; i < numBlanks; i++) {
		if(selectedWord[i] == letter){
			blanksAndSuccesses[i] = letter;
		}
	}
}	

// letter wasn't found
else {
	wrongLetters.push(letter);
	guessesLeft--
}

//Testing and debugging
console.log(blanksAndSuccesses);

}


function roundComplete(){
	console.log("Win Count: " + winCount + "| Loss Count: " + lossCount + "| Guesses Left" + guessesLeft);
}
	
	// Update HTML to reflect the most recent count stats
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	// document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.toString();
	// Check if user won
	if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		alert("You Won!");

		//update win counter in HTML
		document.getElementById("winCounter").innerHTML = winCount;
		startGame();

	}
	// Check if user lost
	else if (guessesLeft == 0){
		lossCount++;
		alert("You lost!");

		document.getElementById("lossCounter").innerHTML = lossCount;

		startGame();
	}


//Main Process

// Initiates the code the first time
startGame();

// Register keyclicks

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

	// Testing / Debugging
	console.log(letterGuessed)

}


