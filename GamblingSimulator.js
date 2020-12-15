var stake = 100;
const BET_AMOUNT = 1;
var fiftyPercentageLoss = stake - (stake / 100) * 50;
var fiftyPercentageWin = stake + (stake / 100) * 50;

//check for win or loss
checkWinOrLoss = () => {
    ((Math.floor(Math.random() * 10) % 2) == BET_AMOUNT) ?
        console.log("Win") : console.log("Loss");
}

//This mthod for resign for the day if 50% loss or 50% win and re
resignDay = () => {
    let cash = stake;
    while (cash < fiftyPercentageWin && cash > fiftyPercentageWin) {
        ((Math.floor(Math.random() * 10) % 2) == BET_AMOUNT) ?
            (cash = cash + 1) : (cash = cash - 1);
    }
    return cash;
}

//This method is for play and update win and loss money day wise
gamblingToatalAmountUpdate = () => {
    var day = 1;
    var winOrLossMoney = 0;
    while (day <= 20) {
        if (resignDay() == fiftyPercentageWin) {
            winOrLossMoney = fiftyPercentageWin - stake;
            console.log("amount win on day " + day + " is " + winOrLossMoney);
        }
        else {
            winOrLossMoney = stake - fiftyPercentageLoss;
            console.log("amount loss on day " + day + " is " + winOrLossMoney);
        }
        day = day + 1;
    }
}

console.log("\nWelcome to Gambling Simulator\n");
gamblingToatalAmountUpdate();
