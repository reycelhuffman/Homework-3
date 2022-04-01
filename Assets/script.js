
// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword(){
    console.log("You clicked the button!");

   // 1. Prompt the user for the password criteria
   // a. Password length 8 < 128
   // b. Lowercase, uppercase, numbers, special characters
   // 2. Validate the input 
   // 3. Generate password based on the criteria
   // 3. Display password to the page. 

   
   
    return "Generate password will go here!";
}
// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

}
// ^^ these things are from the actual file along with added video input ^^//
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);