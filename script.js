// Assignment Code
var generateBtn = document.querySelector("#generate");


// Constant for defined character criteria
const key_strings = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numb: '0123456789',
  sym: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// Password character criteria
var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_"];
var numb = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



// Creating variable  for characters
var passwordLength;
var symbols;
var numbers;
var uppercase;
var lowercase;


function generatePassword() {

  // Define empty string as a container
  var password = "";
  var passwordCharSet = '';

  // Line requesting the length of the user password
  while (true) {
    passwordLength = parseInt(prompt("Choose the length of your password. This needs to be between 8 - 128"));

    // If user chooses a number equal to or above 8 and equal to or below 128, move on
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    }
    // Else, return this alert and loop back to the start so they can choose a valid number
    alert("Please select a number between 8 - 128");
  }
  // Once user has chosen a valid number, they will choose the rest of their criteria
  symbols = confirm("Select 'OK' if you would like to include special characters");
  numbers = confirm("Select 'OK' if you would like to include numbers");
  uppercase = confirm("Select 'OK' if you would like to include uppercase letters");
  lowercase = confirm("Select 'OK' if you would like to include lowercase letters");

  // concatenate the properties of key_string to passwordCharSet

  const passwordArray = []
  if (symbols){
    passwordArray.concat(sym)
   passwordCharSet += key_strings.sym
  }
  if (numbers) {
    passwordArray.concat(numb)
    passwordCharSet += key_strings.numb
  }
if (uppercase) {
    passwordArray.concat(upper)
   passwordCharSet += key_strings.upper
  }
  if (lowercase) {
    passwordArray.concat(lower)
    passwordCharSet += key_strings.lower
  }

    // For loop to select random characters from the criteria strings
    // Indexing passwordCharSet and using passwordCharSet.length

    for (var i = 0; i < passwordLength; i++) {
      password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]; 
      
    }
    
    return (password);

   password = new Array(passwordLength)
                    .fill(undefined)
                    .map(c => passwordArray[Math.floor(Math.random() * passwordArray.length)]);

    return password;

};

// console.log(generatePassword());


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
