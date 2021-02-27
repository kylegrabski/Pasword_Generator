// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// created an empty array that the element in the generatePassword function will push into. 
var randomSelection = [];

// reset properties to start over
function reset() {
  length = "";
  isLower = false;
  isUpper = false;
  isNumber = false;
  isSpecial = false;
  password = "";
  randomSelection = [];
}


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  // removed "var password = generatePassword();" because my password is picked from the randomSelection array
  generatePassword();
  // Returned the array as a string without commas, and slice the length given by the user
  password = randomSelection.join("").slice(0, length);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword() {
  reset();
  // Prompt user for password length
  length = prompt(
    "Enter desired length of your Generated Password" +
      "\n MUST BE BETWEEN 8 AND 128 CHARACTERS IN LENGTH"
      // Make sure that password length between 8 and 128(inclusive)
  ); if (length < 8 || length > 128) {
    alert("The Password needs to be between 8 and 128 characters in length");
    reset();
    return;
  }
  //   Using a confirm prompt the user for special characters
  isSpecial = confirm("Would you like to include special characters?");
  //   Using a confirm prompt the user for numeric characters
  isNumber = confirm("Would you like to include numbers?");
  //   Using a confirm prompt the user for uppercase characters
  isUpper = confirm("Would you like to include upper case characters?");
  //   Using a confirm prompt the user for lowercase characters
  isLower = confirm("Would you like to include lower case characters?"); 
  // Algo for password generation goes below
  for (var i = 0; i < length; i++) {
    var element = "";
    if(isSpecial) {
      element += getRandomItem(specialCharacters);randomSelection.push(element);element = "";
    }if (isNumber) {
      element += getRandomItem(numericCharacters);randomSelection.push(element);element = "";
    }if (isUpper) {
      element += getRandomItem(upperCasedCharacters);randomSelection.push(element);element = "";
    }if (isLower) {
      element += getRandomItem(lowerCasedCharacters);randomSelection.push(element);element = "";
    }
    console.log(randomSelection.join(""));
  }
  // return the build password
  // return element;
}


// Retrieve a random item from the provided array
function getRandomItem(arr) {
  // Generate a random index from 0 to the length - 1 of our array
  var randomIndex = Math.random() * arr.length;
  // round down our random index
  randomIndex = Math.floor(randomIndex);
  // return the random item based off of our random index
  return arr[randomIndex];
}
  // One liner of the above code
  // return arr[Math.floor(Math.random() * arr.length)];
