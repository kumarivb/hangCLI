// constructor word
// depends on constructor letter 
// used to create an object representing the cureent word user is guessing

// array of 'new' letter objects representing the letters of the underlying word

// function that returns a string representing the word
// and call the function on each letter object (1st function letter.js) that displays the character or _ and concatenates those together

// function that takes a character as an argument 
// and calls the guess function on each letter object (2nd function letter.js)



var Person = function(name) {
    this.name = name;
    this.yelling = false;
  }
  
  Person.prototype.toString = function() {
    var greeting = 'My name is ' + this.name;
    
    if(this.yelling) {
      return greeting.toUpperCase();
    }
    
    return greeting;
  }
  
  var bob = new Person("Bob");
  
  // when concatenating with a string, JavaScript automatically calls `toString`
  console.log(bob + '');
  bob.yelling = true;
  console.log(bob + '');
  
  var fred = new Person("Fred");
  var sally = new Person("Sally");
  
  var personArray = [bob, fred, sally];
  
  // the same thing happens if we call `join` on a Person array: 
    // JavaScript calls `toString` automatially on each person, then joins them together
  console.log(personArray.join(', '));