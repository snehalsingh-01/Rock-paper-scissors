let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("The game was DRAW!");
    msg.innerText = "The game was DRAW! Play Again.";

};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin === true){
        console.log ("YOU WIN!");
        msg.innerText = `YOU WIN! Your ${userChoice} beats ${compChoice}`;
        
        // 🎉 Confetti!
         confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            //colors: ['#FF7E7E', '#FFA259', '#FFCB56', '#FFEDB9']
        });
    }
    else {
        console.log ("You LOSE");
        msg.innerText = `You Lose! The ${compChoice} beats ${userChoice}`;

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
            if( userChoice === "Rock"){
            //scissor,paper
            userWin = compChoice === "Paper" ? false : true;
            }
             else if (userChoice === "Paper"){
             //rock,scissor
             userWin = compChoice === "Scissors" ? false : true;
             }
              else if (userChoice === "Scissors"){
             //rock,paper
             userWin = compChoice === "Rock" ? false : true;
             }
             showWinner (userWin,userChoice,compChoice);
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
