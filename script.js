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
// Array of numeric characters to be included in password.
// Doubled the numbers to help even the probability between numbers, symbols, and alphabet
var numericCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
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

// reset function will start generator over, or else the application retains the data and will produce the same password
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
}

function generatePassword() {
  reset();

  // Prompt user for password length
  length = prompt("Choose a password length between 8 and 128");

  // if the user chose less than 8 or more than 128, alert and reset
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
  var selectedArray = [];

  // Made it so everything gets pushed into an array first, then randomly chosen from there.

  // Confirm to the user what parameters they want for their password
  isLower = confirm("Would you like to include lower case characters?");
  if (isLower) {
    selectedArray.push(lowerCasedCharacters);
  }
  isUpper = confirm("Would you like to include upper case characters?");
  if (isUpper) {
    selectedArray.push(upperCasedCharacters);
  }
  isNumber = confirm("Would you like to include numbers?");
  if (isNumber) {
    selectedArray.push(numericCharacters);
  }
  isSpecial = confirm("Would you like to include special characters?");
  if (isSpecial) {
    selectedArray.push(specialCharacters);
  }

  // If user doesnt choose any parameter, alerts and reset
  if (!isLower && !isUpper && !isNumber && !isSpecial) {
    alert("You must choose at least one option");
    reset();
    return;
  }
  // Concate the arrays, then randomly choosing the password 
  
  selectedArray = selectedArray.flat().join("");
  console.log(selectedArray);
  for (var i = 0; i < length; i++) {
    var element = "";
    element += element + charRandomizer(selectedArray);
    randomSelection.push(element);
  }
  console.log(selectedArray);
  randomSelection.push(element);
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
