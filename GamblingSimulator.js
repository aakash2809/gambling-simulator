var stake = 100;
const BET_AMOUNT = 1;

//check for win or loss
checkWinOrLoss = () => {
    ((Math.floor(Math.random() * 10) % 2) == BET_AMOUNT) ?
        console.log("Win") : console.log("Loss");
}

//This mthod for resign for the day if 50% loss or 50% win
resignDay = () => {
    let cash = stake;
    while (cash < 150 && cash > 50) {
        ((Math.floor(Math.random() * 10) % 2) == BET_AMOUNT) ?
            (cash = cash + 1) : (cash = cash - 1);
    }
    console.log(cash);
}

console.log("Welcome to Gambling Simulator");
checkWinOrLoss();
resignDay();