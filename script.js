// Assignment Code

console.log("Hello World!")

var generateBtn = document.querySelector("#generate");
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "|", "~"];
var passwordArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

}

function generatePassword() {


  if (lengthOfPassword > 8 || lengthOfPassword < 128) {
    var lengthOfPassword = prompt("Choose a password between 8 and 128 characters");
  }
  if (confirm("Would you like uppercase, lowercase, numeric, or special characters?")) {
    for (let i = 0; i < 3; i++){
      passwordArray.push(upperCaseArray[i]);
    }
  }

  if (confirm("Please include special characters, such as $, &, #, @, etc.")) {
    Math.floor(Math.random() * passwordArray.length)
  }

  var lengthOfPassword = prompt("Choose a password length between 8-128 characters");
  console.log(lengthOfPassword);


alert(lengthOfPassword);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
