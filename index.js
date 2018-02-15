// contains the logic
// depends on word.js
var inquirer = require('inquirer');
var WordC = require('./word.js');

game = {
    wordArr: ["eggs", "bacon", "pancakes", "sausage", "croissant", "coffee", "toast"],
    guessesLeft: 10,
    guessedLetters: [],
    word: null,

    gameStart: function() {
        if (this.guessesLeft === 10) {
            console.log("Let's Play!");

            var randWord = Math.floor(Math.random() * this.wordArr.length);
            this.word = new WordC(this.wordArr[randWord]);
            this.word.getLetters();

            console.log(this.word.wordRender());
            this.askUser();
        } else {
            this.resetGuesses();
            this.gameStart();
        }
    },

    resetGuesses: function() {
        this.guessesLeft = 10;
    },

    askUser: function() {
        inquirer.prompt([
            {
                name: "user",
                type: "input",
                message: "Choose a letter: ",
            }
        ]).then(function (answer) {
            if (answer.play) {
                that.newGame();
            } else {
                console.log("fine be that way");
                console.log(answer);
            }
        })
    },

    ltr: function(letter) {
        var returnedLetter = (letter.user);
        var alreadyGuessed = false;
        for (var i = 0; i < this.guessedLetters.length; i++) {
            if (returnedLetter === this.guessedLetters[i]) {
                alreadyGuessed = true;
            }
        }
        if (alreadyGuessed === false) {
            this.guessedLetters.push(returnedLetter);

            var match = this.word.foundLetter(returnedLetter);

            if (match === 0) {
                console.log("wrong");

                this.guessesLeft--;
                this.display++;

                console.log("Guesses remaining: " + this.guessesLeft);
                console.log(this.word.wordRender());
                console.log("Guessed letters: " + this.guessedLetters);
            } else {
                console.log("correct");

                if (this.word.foundLetter() === true) {
                    console.log(this.word.wordRender());
                    console.log("winner");
                } else {
                    console.log("Remaining guesses: " + this.guessesleft);
                    console.log(this.word.wordRender());
                    console.log("Guessed letters: " + this.guessedLetters);
                }
            }
            if (this.guessesLeft > 0 && this.word.foundLetter === false) {
                this.askUser();
            } else if (this.guessesLeft === 0) {
                console.log("you lost");
            } else {
                console.log("Already guessed that letter");
                this.askUser();
            }
        };
    }
};

game.gameStart();
// randomly selects a word and uses contructor word to store it

// prompts user for each guess and keeps track of user's remaining guesses

// render