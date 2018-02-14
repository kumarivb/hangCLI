// constructor word
// depends on constructor letter 
// used to create an object representing the cureent word user is guessing
var fs = require('fs');
var LetterC = require('./letter.js');

var WordC = function(word) {
    this.word = word;
    this.letters = [];
    this.match = false;

    this.getLetters = function() {
        for (var i = 0; i < this.word.length; i++) {
            this.letters.push(new LetterC(this.word[i]));
        }
    };

    this.matched = function() {
        match = true;
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].show == false) {
                match = false;
            }
        }
        return match;
    };
    
    this.foundLetter = function(guessedLetter) {
        var determine = 0;

        for(var i = 0; i < this.letters.length; i++) {
            if(this.letters[i].char == guessedLetter()) {
                this.letters[i].show = true;
                determine++;
            }
        }
        return determin; 
    };

    this.wordRender = function() {
        var str = '';

        for (var i = 0; i < this.letters.length; i++) {
            str += this.letters[i].returnLetter();
        }
        return str;
    };
};

// export
module.exports = WordC;

// array of 'new' letter objects representing the letters of the underlying word

// function that returns a string representing the word
// and call the function on each letter object (1st function letter.js) that displays the character or _ and concatenates those together

// function that takes a character as an argument 
// and calls the guess function on each letter object (2nd function letter.js)