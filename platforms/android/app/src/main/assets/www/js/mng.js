function playGame () {
    document.location.href = "playPage.html";
}

function otherGames () {
    window.open("https://github.com/tjharvey121?tab=repositories", "_blank");
}

var number;
var numGuesses = 0;

function generateNumber () {
    number = Math.floor(Math.random() * 50) + 1;
    document.getElementById("guess").focus(); 
}

function submitGuess () {
    let guess = document.getElementById("guess").value;
    
    if (isNaN(guess)){
	   alert(guess + " is not a number, please try again");
        clearBox();
    }
    else {
	   if (!(guess >= 1 && guess <= 50)) {
           alert(guess + " is not between 1 and 50, please try again");
           clearBox();
       }
        else {
            let result = evaluateGuess(guess);
            alertUser(result);
        }
    }
}

function evaluateGuess (guess) {
    if (guess == number) { return "correct"}
    else if (guess > number) {return "high"}
    else { return "low"}
}

function alertUser (result) {
    if (result == "correct") {
        alert("Your guess was correct, congrats!")
        document.getElementById("submit").disabled = true;
        document.getElementById("guess").disabled = true;
    }
    else if (result == "high") {
        numGuesses++;
        alert("Your guess was too high, try again");
        updateGuesses();
        clearBox();
    }
    else {
        numGuesses++;
        alert("Your guess was too low, try again");
        updateGuesses();
        clearBox();
    }
}

function clearBox () {
    document.getElementById("guess").value = "";
    document.getElementById("guess").focus();
}

function updateGuesses () {
    document.getElementById("third").innerHTML = "Total Guesses: " + numGuesses;
}

function reset () {
    document.location.reload();
}

function backToMenu () {
    document.location.href = "index.html";
}
