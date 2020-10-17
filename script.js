// Variables
var generateBtn = document.querySelector("#generate");
let lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let numbers = ["1","2","3","4","5","6","7","8","9"]
let specialChar = ["!","@","#","$","%","^","&","*","-","_","=","+"]
let newPassword = ''
var chosenCharacters = []

// Asks user how many characters they want in thier password
const charLength = window.prompt('How many characters would you like in your password?');
// Asks user if they would like special characters in their password
const doSpecial = window.confirm('Would you like to include special characters in your password?');
// Asks user if they would like numeric characters in their password
const doNumber = window.confirm('Would you like to include numeric characters in you password?');
// Asks user if they would like lowercase characters in their password
const doLowers = window.confirm('Would you like to include lowercase characters in you password?');
// Asks user if they would like uppercase characters in their password
const doUppers = window.confirm('Would you like to include uppercase characters in you password?');

// Takes User Input and if input === true then it adds that specific array to a new array
if (doSpecial === true) {
  chosenCharacters.concat(specialChar);
} 
if (doNumber === true) {
  chosenCharacters.concat(numbers);
}
if (doLowers === true) {
  chosenCharacters.concat(lowerLetters);
}
if (doUppers === true) {
  chosenCharacters.concat(upperLetters);
}

console.log(chosenCharacters);

//Loops through New array with user chosen characters and picks 10 elements at random
for(i = 0; i = length/* or i = charLength*/; i++){
var char = charAt(Math.floor(Math.random() * chosenCharacters.length));
newPassword = newPassword + char;
};



// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword )
  // declare settings from DOM
     

      

