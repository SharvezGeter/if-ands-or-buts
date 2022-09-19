const prompt = require('prompt-sync')({sigint: true});

let pinCode =  Number(prompt("Enter passcode. "));


if(pinCode === 1234){
    console.log("Success")
} else if(pinCode !== 1234) {
    console.log("failure")
}
















