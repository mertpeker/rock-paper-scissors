function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
//    console.log(playerSelection, computerSelection);
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                return "tie";
                break;
            case "paper":
                return "lose";
                break;
            case "scissors":
                return "win";
                break;
        }
    }
    else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                return "win";
                break;
            case "paper":
                return "tie";
                break;
            case "scissors":
                return "lose";
                break;
        }
    }
    else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                return "lose";
                break;
            case "paper":
                return "win";
                break;
            case "scissors":
                return "tie";
                break;
        }
    }
    else {
        return null;
    }
    }

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Make your choice: Rock, Paper, Scissors");
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        while (result === null) {
            playerChoice = prompt("Invalid choice. Please choose Rock, Paper or Scissors");
            result = playRound(playerChoice, computerChoice);
        }
        switch (result) {
            case "win":
                console.log(playerChoice + " beats " + computerChoice);
                playerScore++;
                break;
            case "lose":
                console.log(computerChoice + " beats " + playerChoice);
                computerScore++;
                break;
            case "tie":
                console.log("Tie! " + playerChoice + " - " + computerChoice);
                break;
        }
        console.log("Player: " + playerScore + " Computer: " + computerScore);

    }
    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose!");
    }
    else {
        console.log("It's a tie!");
    }
}

game();