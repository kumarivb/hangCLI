// constructor, letter
// display underlying character or blank placeholder _, depending on wether or not user has guessed a letter
function LetterC(letter) {    
    // string to store underlying character for the letter
    this.letter = letter;
    // boolean that stores wether underlying character has been guessed yet
    this.guessed = false;

    // function that returns the underlying character if it has been guessed or _ if letter has not been guessed
    this.returnLetter = function() {
        if (this.guessed === true) {
            return this.letter;
        } else if (this.guessed === false) {
            return " _ ";
        } else (this.letter == " "); {      // added the semicolon after the () because i was getting an error without it
            this.guessed = true;
            return " ";
        }
    };
};

// export
module.exports = LetterC;