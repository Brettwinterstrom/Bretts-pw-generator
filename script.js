// Variables
const generateBtn = document.querySelector("#generate");
const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+"];

function generatePassword() {
  const newPassword = [];
  let chosenCharacters = [];

  // Asks user how many characters they want in thier password
  const charLength = parseInt(prompt('How many characters would you like in your password?'));

  while (charLength === NaN) {
    alert("Hey what you inputed is not a number");
    charLength = parseInt(prompt('How many characters would you like in your password?'));
  }

  while (charLength < 8 || charLength > 128) {
    alert("Hey you are out of range");
    charLength = parseInt(prompt('How many characters would you like in your password?'));
  }

  // Asks user if they would like special characters in their password
  const doSpecial = confirm('Would you like to include special characters in your password?');
  // Asks user if they would like numeric characters in their password
  const doNumber = confirm('Would you like to include numeric characters in you password?');
  // Asks user if they would like lowercase characters in their password
  const doLowers = confirm('Would you like to include lowercase characters in you password?');
  // Asks user if they would like uppercase characters in their password
  const doUppers = confirm('Would you like to include uppercase characters in you password?');

  // Takes User Input and if input true then it adds that specific array to a new array
  if (doSpecial) {
    chosenCharacters = chosenCharacters.concat(specialChar);
  }
  if (doNumber) {
    chosenCharacters = chosenCharacters.concat(numbers);
  }
  if (doLowers) {
    chosenCharacters = chosenCharacters.concat(lowerLetters);
  }
  if (doUppers) {
    chosenCharacters = chosenCharacters.concat(upperLetters);
  }

  console.log(chosenCharacters);

  //Loops through New array with user chosen characters and picks elements based on charLength
  for (i = 0; i < charLength; i++) {
    var randomChar = chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
    newPassword.push(randomChar);
  };

  //update the textarea with new password
  document.querySelector("#password").value = newPassword.join("");
}



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
  // declare settings from DOM




