let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("The game was DRAW!");
};

const showWinner = (userWin) => {
    if (userWin === true){
        console.log ("YOU WIN!");
    }
    else {
        console.log ("You LOSE");
    }
};

const playGame = (userChoice) => { 
    console.log("User Choice =",userChoice);
    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer Choice =",compChoice);

    if(userChoice === compChoice){
            //Draw game
            drawGame();
        }
        else {
            let userWin = true;
            if( userChoice === "rock"){
            //scissor,paper
            userWin = compChoice === "paper" ? false : true;
            }
             else if (userChoice === "paper"){
             //rock,scissor
             userWin = compChoice === "scissor" ? false : true;
             }
              else if (userChoice === "scissor"){
             //rock,paper
             userWin = compChoice === "rock" ? false : true;
             }
             showWinner (userWin);
        };

};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);

    });
});
