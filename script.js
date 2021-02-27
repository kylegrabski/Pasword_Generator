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
// created an empty array on global scope that the element in the generatePassword function will push into.
var randomSelection = [];

// reset properties function to start generator over, or else it retains the data and will produce the same password
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
  generatePassword();
  // Returned the array as a string without commas, and slice by the length given by the user
  password = randomSelection.join("").slice(0, length);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // checking password length to make sure its working
  console.log(password.length);
}

function generatePassword() {
  reset();
  // Prompt user for password length
  length = prompt("Choose a password length between 8 and 128");

  // if the user choose less than 8 or more than 128, alert and reset
  if (length < 8 || length > 128) {
    alert("The Password needs to be between 8 and 128 characters in length");
    reset();
    return;
  }
  // if the user doesnt type a digit, alert and reset
  if (isNaN(length)) {
    alert("Please enter a numerical digit");
    reset();
    return;
  }

  // Confirm to the user what parameters they want for their password
  isLower = confirm("Would you like to include lower case characters?");
  isUpper = confirm("Would you like to include upper case characters?");
  isNumber = confirm("Would you like to include numbers?");
  isSpecial = confirm("Would you like to include special characters?");

  // If user doesnt choose any parameter, alerts and reset
  if (!isLower && !isUpper && !isNumber && !isSpecial) {
    alert("You must choose at least one option");
    reset();
    return;
  }

  for (var i = 0; i < length; i++) {
    var element = "";
    // is the += necessary? = works fine as well...
    // Will go through the charRandomizer function for each parameter the user chose,push the selection to the element, then clear the element.
    if (isSpecial) {
      element += charRandomizer(specialCharacters);
      randomSelection.push(element);
      element = "";
    }
    if (isNumber) {
      element += charRandomizer(numericCharacters);
      randomSelection.push(element);
      element = "";
    }
    if (isUpper) {
      element += charRandomizer(upperCasedCharacters);
      randomSelection.push(element);
      element = "";
    }
    if (isLower) {
      element += charRandomizer(lowerCasedCharacters);
      randomSelection.push(element);
      element = "";
    }
    // console.log for testing
    console.log(randomSelection.join(""));
  }
}

// Retrieve a random item from the provided array
function charRandomizer(arr) {
  // Generate a random index from 0 to the length - 1 of our array
  var randomIndex = Math.random() * arr.length;
  // round down our random index
  randomIndex = Math.floor(randomIndex);
  // return the random item based off of our random index
  return arr[randomIndex];
}

// One liner of the above code
// return arr[Math.floor(Math.random() * arr.length)];
