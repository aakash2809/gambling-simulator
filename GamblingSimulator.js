var stake = 100;
const BET_AMOUNT = 1;
var fiftyPercentageLoss = stake - (stake / 100) * 50;
var fiftyPercentageWin = stake + (stake / 100) * 50;
var NumberOfMonthsPerMonth = {
    "Jan": 31, "Feb": 28, "Mar": 31, "Apr": 30, "May": 31, "Jun": 30,
    "jul": 31, "Aug": 31, "Sep": 30, "Oct": 31, "Nov": 30, "Dec": 31
};

//check for win or loss
checkWinOrLoss = () => {
    ((Math.floor(Math.random() * 10) % 2) == BET_AMOUNT) ?
        console.log(`Win`) : console.log(`Loss`);
}

//This mthod for resign for the day if 50% loss or 50% win and re
resignDay = () => {
    let cash = stake;
    while (cash < fiftyPercentageWin && cash > fiftyPercentageLoss) {
        ((Math.floor(Math.random() * 10) % 2) == BET_AMOUNT) ?
            (cash = cash + 1) : (cash = cash - 1);
    }
    return cash;
}
//Print record month wise
printMonthlyRecord = (monthName, totalLostAmount, totalWonAmount, numberOfLostDays, numberOfWonDays) => {
    console.log(`\nmonth       :  ${monthName}`);
    console.log(`loss ammont :  ${totalLostAmount}`);
    console.log(`Won ammount :  ${totalWonAmount}`);
    console.log(`lost days   :  ${numberOfLostDays}`);
    console.log(`won days    :  ${numberOfWonDays}`);
};

//This method is for play and update win and loss money day wise
gamblingToatalAmountUpdate = () => {
    for (var monthName in NumberOfMonthsPerMonth) {
        var winOrLossMoney = 0;
        var day = 1;
        var numberOfWonDays = 0;
        var numberOfLostDays = 0;
        var totalWonAmount = 0;
        var totalLostAmount = 0;

        while (day <= NumberOfMonthsPerMonth[monthName]) {
            if (resignDay() == fiftyPercentageWin) {
                winOrLossMoney = fiftyPercentageWin - stake;
                totalWonAmount = totalWonAmount + winOrLossMoney;
                numberOfWonDays++;
            }
            else {
                winOrLossMoney = stake - fiftyPercentageLoss;
                totalLostAmount = totalLostAmount + winOrLossMoney;
                numberOfLostDays++;
            }
            day = day + 1;
        }

        printMonthlyRecord(monthName, totalLostAmount, totalWonAmount, numberOfLostDays, numberOfWonDays);
    }
}

console.log(`Welcome to Gambling Simulator`);
gamblingToatalAmountUpdate();
