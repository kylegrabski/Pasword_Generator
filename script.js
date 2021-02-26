// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code

// Retrieve a reference to the button with an id of generate
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
var length = 10

  // Prompt user for password length
  // Make sure that password length is between 8 and 128(inclusive)
  // Using a confirm, prompt user for special characters
  // Using a confirm, prompt user for numeric characters
  // Using a confirm, prompt user for lowercase characters
  // Using a confirm, prompt user for uppercase characters


  // return the build password
  // return "Here is the place holder"

  var special = true;
  var numeric = true;
  var lowercase = true;
  var uppercase = true;

  var password = "";
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (special) {
      password += getRandomItem(specialCharacters)
    }
    if (numeric) {
      password += getRandomItem(numericCharacters)
    }
    if (lowercase) {
      password += getRandomItem(lowerCasedCharacters)
    }
    if (uppercase) {
      password += getRandomItem(upperCasedCharacters)
    }
  }

  return password.slice(0, length);
}



// Retrieve a random item from the provided array
function getRandomItem(arr) {
  // Generate a random index from 0 to the length - 1 of our array
  var randomIndex = Math.random() * arr.length;
  // round down our random index
  randomIndex = Math.floor(randomIndex);
  // return the random item based off of our random index
  return arr[randomIndex];
  // One liner of the above code
  // return arr[Math.floor(Math.random() * arr.length)];
}



// console.log(getRandomItem)(specialCharacters)
// console.log(getRandomItem)(numericCharacters)
// console.log(getRandomItem)(lowerCasedCharacters)
// console.log(getRandomItem)(upperCasedCharacters)
