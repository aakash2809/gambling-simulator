var stake = 100;
const BET_AMOUNT = 1;

checkWinOrLoss = () => {
    ((Math.floor(Math.random() * 10) % 2) == BET_AMOUNT) ?
        console.log("Win") : console.log("Loss");
}

console.log("Welcome to Gambling Simulator");
checkWinOrLoss();