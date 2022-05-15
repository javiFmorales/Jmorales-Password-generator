// Assignment Code
var generateBtn = document.querySelector("#generate");
//variables were created
var passW = "";
var charactersLength = "";

var upperCaseLi ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbolsLi ="!#$%&()*+,-./:;<=>?@[/]^_{|}~";
var numbersLi="0123456789";
var lowerCaseLi="abcdefghijklmnopqrstuvwxyz"

//a function was created for the generatepassword that was being called

function generatePassword() {
//prompt window will declare the conditions the password must meet
  var charactersLength =parseInt(prompt("how many characters would you like your password to contain? it must be between 8 and 128"))
console.log(charactersLength)
//argument was created to set the length conditions
  if (charactersLength < 8 || charactersLength > 128) {
    console.log("it works!")
    alert("INVALID! your passsword must contain between 8 and 128 characters.");
  }
  
  //after the first condition is met you will be presented with these prompts
  else {
    upperCase = confirm("do you want your password to contain uppercase letters?");
    lowerCase = confirm("should the password contain lowercase letters?");
    numbers = confirm("will the password contain any numbers?");
    symbols = confirm("should this password contain symbols?")
  }
var characters = "";
if (upperCase == true){
  characters += upperCaseLi;
}
if (lowerCase == true){
  characters += lowerCaseLi;
}
if (numbers == true){
  characters += numbersLi;
}
if (symbols == true){
  characters += symbolsLi;
}
console.log(characters)

var  charactersArray = characters.split("");
console.log(charactersArray)
//for loop is made to randomly pick characters to generate password
  for (var i = 0; i < charactersLength; i++) {
    passW += charactersArray[Math.floor(Math.random() * charactersArray.length)];
    console.log("sup")
    
}
  return passW;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
