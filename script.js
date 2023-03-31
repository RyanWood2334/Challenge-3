//will have to make arrays of lower and upper case letters, numbers and symbols

// make generatepassword function
//prompt for password length is a number
//if statement if number is above 8 && 128 characters

// confirm for lower case, uppercase, numeric and special characters
//store their response in a variable
//if statements for each confirm and if it is a yes, push or add random characters to a big string/array of all characters they selected

//create a for loop while i is less than their anser for num length prompt
//in this for loop, we would randomly pull characters from the big array
//pull random characters from the array using math.random
//have a variable declared above for loop
//that var += the RandomChar


var containedCharacters = []

function getPasswordLength() {
    console.log("Beginning");
    var passLength = window.prompt("Input password length between 8 and 128 characters:")
    if (passLength >= 8 && passLength <= 128) {
        console.log("Nice Job!", passLength);
    } else {
        window.alert("Please input a number between 8-128")
        console.log("Bad Choice", passLength);
        passLength = getPasswordLength()
    }
    console.log("returning", passLength);
    return passLength 
}

function getLowercase(){
    var lowercaseCheck = window.prompt("Would you like to use lowercase characters? (Y / N)")
    
    if (lowercaseCheck.toLocaleUpperCase() === "N") {
        console.log("Lowercase Denied");
        
    } else {
        var lowercaseArray = "abcdefghijklmnopqrstuvwxyz".split("")
        containedCharacters.splice(0,0, ...lowercaseArray )
        console.log("containedCharacters", containedCharacters);
        
    }
    return lowercaseCheck
    
}

function getUppercase(){
    var uppercaseCheck = window.prompt("Would you like to use uppercase characters? (Y / N)")
    if (uppercaseCheck.toLocaleUpperCase() === "N") {
        console.log("Uppercase Denied"); 
    } else {
        var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
        containedCharacters.splice(0,0, ...uppercaseArray)
        console.log("containedCharacters", containedCharacters);
    }
    return uppercaseCheck
    
}

function getNumeric() {
    numCheck = window.prompt("Would you like to use numbers in your password? (Y / N)" )
    if (numCheck.toLocaleUpperCase() === "N") {
        console.log("Numbers Denied"); 
    } else {
        var numArray = "0123456789".split("")
        console.log("containedCharacters", containedCharacters);
        containedCharacters.splice(0,0, ...numArray)
    }
    return numCheck

}

function getSymbols(){
    symbolCheck = window.prompt("Would you like to use special characters in your password?(Y / N)")
    if (symbolCheck.toLocaleUpperCase() === "N") {
        console.log("Symbols Denied"); 
    } else {
        var symbolArray = "!@#$%^&*-_=+`~?.,<>".split("")
        containedCharacters.splice(0,0, ...symbolArray )
        console.log("containedCharacters", containedCharacters);
    }
    return symbolCheck
    
}

function randomCharacters(desiredLength, containedCharacters){
    var generatedOutput = ""
    for (let index = 0; index < desiredLength; index++) {
        generatedOutput += containedCharacters[Math.floor(Math.random()*containedCharacters.length)] ;
    
    } 
    return generatedOutput
     
}

function generatePassword(containedCharacters){
    //godzilla function
    console.log("generatePassword");
    console.log("containedCharacters #1", containedCharacters);
    var desiredLength = getPasswordLength()
    console.log("desiredLength", desiredLength);
    getLowercase()
    getUppercase()
    getNumeric()
    getSymbols()
    if (containedCharacters.length === 0) {
        window.alert("Please input at least one character type for password criteria")
        generatePassword(containedCharacters)
    } else {
        console.log("containedCharacters #2", containedCharacters);
        randomCharacters(desiredLength, containedCharacters)
        var finalPassword = randomCharacters(desiredLength, containedCharacters)
        console.log("finalpassword", finalPassword);
        return finalPassword
    }
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(containedCharacters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
