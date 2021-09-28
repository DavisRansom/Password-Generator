// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P". "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacters = [", "!", "#$%&'()*+,-./:;<=>?@[\]^_`{|"}", "~"]


var charactersLength = window.prompt("How many characters would you like your new, unique password to be?: ");
alert("Ok! Your password will include " + charactersLength + " characters ");
var lowerCaseLettersChoice = confirm("Press OK if you would like to include Lowercase Letters. If not, press Cancel.");
var upperCaseLettersChoice = confirm("Press OK if you would like to include Uppercase Letters. If not, press Cancel.");
var numbersChoice = confirm("Press OK if you would like to include Numbers in your password. If not, press Cancel.");
var specialCharactersChoice = confirm("Press OK if you would like to include Special Characters in your password. If not, press Cancel.");




//create variables for arrays: lowercase, uppercase, numbers, specialcharacters

//convert user input for lowercase, uppercase, numbers, specialcharacters into Boolean true or false 

//charactersLength = user input for window.prompt (how many times to run the random selection function from the combined selection array)

//if user selects lowercase = true, include lowercase in the combined random selection array

////if user selects uppercase = true, include uppercase in the combined random selection array

//if user selects numbers = true, include numbers in the combined random selection array

//if user selects special characters = true, include numbers in the combined random selection array

//run random selection from the updatedArray (ex. lowerCase.upperCase), charactersNumber number of times
//var randomString = Math.random() 

//Display the result in the Password Generator or as an alert

//Write password to the #password alert of Password text area

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
