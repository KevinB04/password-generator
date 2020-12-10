// Assignment Code

console.log("Hello World!")
console.log("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
console.log("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
console.log("1", "2", "3", "4", "5", "6", "7", "8", "9", "0")
console.log("!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "|", "~")

var generateBtn = document.querySelector("#generate");
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "|", "~"];
var passwordArray = [];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getOptions() {
  /// return "temporary password";

  alert("Welcome! Need a password?");

  var lengthOfPassword = parseInt(prompt("Choose a password length between 8-128 characters"));
  console.log(lengthOfPassword);
  
  if(lengthOfPassword < 8) {
    alert("more than 8");
    return;
  }
  if(lengthOfPassword > 128) {
    alert("less than 128");
    return;
  }
  if(isNaN(lengthOfPassword) === true) {
    alert("numbers only");
    return;
  }


var hasLower = confirm("Lower Ok?");
  console.log(hasLower);

var hasUpper = confirm("Upper Ok?");
  console.log(hasUpper);

var hasNumbers = confirm("Would you like numbers?");
  console.log(hasNumbers);
  
var hasSpecial = confirm("Would you like special characters?");
    console.log(hasSpecial);

    var options = {
      lengthOfPassword,
      hasLower,
      hasUpper,
      hasNumbers,
      hasSpecial,
    }

  return options;
}

function generatePassword() {
  var options = getOptions();
  console.log(options)
  var mainArray = [];
  var results = [];

  if(options.hasLower === true) {
   mainArray = mainArray.concat(lowerCaseArray)
  }
  if(options.hasUpper === true) {
    mainArray = mainArray.concat(upperCaseArray)
  }
  if(options.hasNumbers === true) {
    mainArray = mainArray.concat(numericArray)
  }
  if(options.hasSpecial === true) {
    mainArray = mainArray.concat(specialArray)
  }
  console.log(mainArray)

  for(var i=0; i < options.lengthOfPassword; i++ ) {
    var index = Math.floor(Math.random() * mainArray.length)
  
    var digit = mainArray[index];
    results.push(digit);
    console.log(results)
  }
  return results.join("")
}




  /// if (confirm("Would you like u ppercase, lowercase, numeric, or special characters?")) {
    /// for (let i = 0; i < 3; i++){
      /// passwordArray.push(upperCaseArray[i]);
    /// }
  

  /// if (confirm("Please include special characters, such as $, &, #, @, etc.")) {
    /// Math.floor(Math.random() * passwordArray.length)
  /// }

  




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
