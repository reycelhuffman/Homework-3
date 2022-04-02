// Assignment Code
// added alert to alert user //
    alert("Welcome to password generator");

// added a prompt message //
    let userInput = prompt ("Do you wanna generate a password? type (y)es, (n)o");
    console.log("user input:"  +userInput);

    let generateBtn = document.querySelector("#generate");
// write  password generate input //
    
// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// gave generated letters, numbers and symbols for random password //
    function generatePassword(){
    let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let specialCharacters = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
    let numbers =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
    let finalPassword = "";
    let passwordItem = "";
    let userSelection = [""];
    
    }
    
// user's input box prompt //
let passwordLength = window.prompt("How many character would you like your password to be?");
let passwordLowerCase = window.confirm("Would you like to use lower case letter?");
let passwordUpperCase = window.confirm("Would you like to use upper case letter?");
let passwordSpecialCharacters = window.confirm("Would you like to use special characters?");
let passwordNumbers = window.confirm("Would you like to use numbers?");

//if the user don't select the following input then this will be the other options //
if (passwordLowerCase === false && passwordUpperCase === false && passwordSpecialCharacters && passwordSpecialCharacters === false) {
    do {
        window.alert("Please select your choice");
        passwordLowerCase = window.confirm("Would you like to use lower case letter?");
        passwordUpperCase = window.confirm("Would you like to use upper case letters?");
        passwordSpecialCharacters = window.confirm("Would you like to use special characters?");
        passwordNumbers = window.confirm("Would you like to use");
    }  while (passwordLowerCase === false && passwordUpperCase === false && passwordSpecialCharacters === false && passwordNumbers === false);
 }

 // password has to be the length of 8 to 128 characters //
if (passwordLength < 8 || passwordLength > 128){
    window.alert("Please enter password length between 8-128");
}
// User selection input //
else {
    if (passwordLowerCase === true ){
    userSelection = userSelection.concat(lowerCase);
    }
    if (passwordUpperCase === true) {
        userSelection = userSelection.concat(upperCase);
    }
    if (passwordSpecialCharacters === true){
        userSelection = userSelection.concat(specialCharacters);
    } 
    if (passwordNumbers === true ) {
        userSelection = userSelection.concat(numbers);
    }
}
// user creates a password using given letter, characters and symbols //
for (let i = 0; < passwordLength; i ++){
    let rgn = Math.floor(Math.random() * userSelection.length);
    finalPassword = finalPassword + userSelection[rgn];
    console.log(finalPassword);

}
return "Generate password will go here!";

    //let randomNumber = Math.floor()*lowerCase.length;

    //let roundedNumber = Math.floor(randomNumber);
    //console.log(randomNumber);
    //console.log("randomly generated"  +lowerCase[roundedNumber]);

// ^^ these things are from the actual file along with added video input ^^//
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


//function generatePassword(){
    //console.log("You clicked the button!");

   // 1. Prompt the user for the password criteria
   // a. Password length 8 < 128
   // b. lowercase, uppercase, numbers, special characters
   // 2. Validate the input 
   // 3. Generate password based on the criteria
   // 3. Display password to the page. 

