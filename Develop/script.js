// Assignment Code
var generateBtn = document.querySelector("#generate");


var charactersNumber = window.prompt("How many characters would you like your new, unique password to be?: ");
alert("Ok! Your password will include " + charactersNumber + " characters ");
var lowerCaseLetters = confirm("Press OK if you would like to include Lowercase Letters. If not, press Cancel.");
var upperCaseLetters = confirm("Press OK if you would like to include Uppercase Letters. If not, press Cancel.");
var numbers = confirm("Press OK if you would like to include Numbers in your password. If not, press Cancel.");
var specialCharacters = confirm("Press OK if you would like to include Special Characters in your password. If not, press Cancel.");


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
