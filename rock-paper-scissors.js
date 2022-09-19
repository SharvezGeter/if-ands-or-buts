const prompt = require('prompt-sync')({sigint: true});

let player1 = (prompt("Player1 Enter Rock, Paper, or Scissors."));
let player2 = (prompt("Player2 Enter Rock, Paper, or Scissors."));

console.log(player1)
console.log(player2)

if (player1 === player2){
    console.log("Draw")
}else if(player1 === "rock" && player2 === "paper"){
    console.log("Player2 Wins")
}else if(player1 === "paper" && player2 === "rock"){
    console.log("Player1 Wins")
}else if (player1 === "rock" && player2 === "scissors"){
    console.log("Player1 Wins")
 }else if(player1 === "scissors" && player2 === "rock"){
    console.log("Player2 Wins")
 }else if (player1 === "scissors" && player2 === "paper"){
    console.log("Player2 Wins")
}else if (player1 || player2 !== "scissors", "paper", "rock"){
    console.log("Error")}