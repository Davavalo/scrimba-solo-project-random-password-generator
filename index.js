// DOM Elements
let passwordOne = document.getElementById("random-password-1")
let passwordTwo = document.getElementById("random-password-2")
let passwordThree = document.getElementById("random-password-3")
let passwordFour = document.getElementById("random-password-4")

// Get Button & Add Click
let generateEl = document.getElementById("generate-el")
generateEl.addEventListener("click", newPassword)

// All Random Characters for Password in an Array
let randomCharacters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]


// Function that generates 16 random characters from randomCharacters[] and returns the value as a string

function generateRandomNumbers() {
    let randomGroup = ""
    
    for (let i = 0; i < 16; i++){
        let randomNumber = Math.floor(Math.random() * 90)
        randomGroup += randomCharacters[randomNumber]
    }
    return randomGroup
}

/* Function that creates 4 random passwords using the previous function and pushes them into an array, the array is then used to alter the password boxes*/

function newPassword() {
    let password = []
    for (let i = 0; i < 4; i++){   
         password.push(generateRandomNumbers())
    }
    passwordOne.textContent = password[0]
    passwordTwo.textContent = password[1]
    passwordThree.textContent = password[2]
    passwordFour.textContent = password[3]
}


