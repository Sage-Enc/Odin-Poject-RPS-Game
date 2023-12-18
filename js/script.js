// Getting Player's Input
function getPlayerChoice(){
    let pChoice = prompt("Enter Your Choice: ROCK, PAPER, SCISSOR ?");

    // Converting Player's Choice to UpperCase
    pChoice = pChoice.toUpperCase();

    // if Valid, Return Player's Choice to the Game. else Exit the Program
    switch(pChoice){
        case "ROCK":
            return pChoice;
            
        case "PAPER":
            return pChoice;

        case "SCISSOR":
            return pChoice;

        default:
            console.log("Invalid Input.");
            process.exit();
    }
}

// Getting Computer's Input
function getComputerChoice(){
    let cChoice = (Math.floor(Math.random()*3)+1)
    
    switch(cChoice){
        case 1:
            cChoice = "ROCK";
            return cChoice;

        case 2:
            cChoice = "PAPER";
            return cChoice;

        case 3:
            cChoice = "SCISSOR";
            return cChoice;
    }
}

// Getting Round Winner
function getWinner(getPlayerChoice,getComputerChoice){
    let res;

    if (getPlayerChoice == getComputerChoice){
        console.log("Round Draw!");
        res = "DRAW";
        return res;
    }
    else{
        if (getPlayerChoice == "ROCK"){
            if (getComputerChoice == "PAPER"){
                console.log("PAPER BEATS ROCK");
                res = "LOSE";
                return res;
            }
            else{
                console.log("ROCK BEATS SCISSOR");
                res = "WIN";
                return res;
            }
        }

        else if (getPlayerChoice == "PAPER"){
            if (getComputerChoice == "ROCK"){
                console.log("PAPER BEATS ROCK");
                res = "WIN";
                return res;
            }
            else{
                console.log("SCISSOR BEATS PAPER");
                res = "LOSE";
                return res;
            }
        }

        else if (getPlayerChoice == "SCISSOR"){
            if (getComputerChoice == "ROCK"){
                console.log("ROCK BEATS SCISSOR");
                res = "LOSE";
                return res;
            }
            else{
                console.log("SCISSOR BEATS PAPER")
                res = "WIN";
                return res;
            }
        }
    }
}

// Full Game Function

function game(){
    
    // Declairing Game Variables
    let round = 0, pScore = 0, cScore = 0;
    let res;

    // Looping 5 Rounds
    while (round<5){
        res = getWinner(getPlayerChoice(),getComputerChoice());
        if (res == "DRAW"){
            pScore = pScore + 0.5;
            cScore = cScore + 0.5;
        }
        else if(res == "WIN"){
            pScore = pScore + 1;
        }
        else if(res == "LOSE"){
            cScore = cScore + 1;
        }
        round++;
    }

    // Getting Game Result
    if(pScore == cScore){
        console.log("GAME DRAW!!!");
    }
    else if(pScore > cScore){
        console.log("Player Wins");
    }
    else{
        console.log("Computer Wins")
    }
}

game();