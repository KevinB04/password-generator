// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var  lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "|", "~"];
var passwordArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {


  
  if (lengthOfPassword > 8 || lengthOfPassword < 128) {
    var lengthOfPassword = prompt("Choose a password length between 8 and 128 characters");
    alert("")
  }
  if (confirm("Do you want uppercase letters in your password?")){
    for (let i = 0; i < 3; i++){
      passwordArray.push(upperCaseArray[i]);
    }
  }

  if (confirm("Do you want special characters in your password?")){
    Math.floor(Math.random() * passwordArray.length)
  }

  var lengthOfPassword = prompt("Choose a password length from 8-128");
  console.log(lengthOfPassword);


alert(lengthOfPassword);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
