function atmMachine(input) {
    let moneyData = {};
    let atmBalance = 0;
    //let sortedMoney = {};

    for (let row of input) {

        let operation = row.length;

        if (operation > 2) {

            let banknotes = row;

            for (let banknote of banknotes) {
                if (!moneyData[banknote]) {
                    moneyData[banknote] = 1;
                } else {
                    moneyData[banknote]++;
                }
            }

            //sortedMoney = Object.entries(moneyData).sort((a, b) => b[0] - a[0]);

            let totalMoney = banknotes
                .map((x) => +x)
                .reduce((acc, cur) => {
                    return acc + cur;
                });

            atmBalance += totalMoney;

            console.log(`Service Report: ${totalMoney}$ inserted. Current balance: ${atmBalance}$.`);

        } else if (operation === 2) {
            
            let balance = +row[0];
            let withdrawnMoney = +row[1];

            if (balance < withdrawnMoney) {

                console.log(`Not enough money in your account. Account balance: ${balance}$.`);

            } else if (withdrawnMoney > atmBalance) {

                console.log(`ATM machine is out of order!`);
                
            } else {

                atmBalance -= withdrawnMoney;

                console.log(`You get ${withdrawnMoney}$. Account balance: ${balance - withdrawnMoney}$. Thank you!`);

                let bills = Object.keys(moneyData);
                for (let i = bills.length - 1; i >= 0; i--) {
                    let bill = bills[i];
                    if (withdrawnMoney < bill) {
                        continue;
                    } else {
                        if (moneyData[bill] === 0) {
                            continue;
                        } else {
                            moneyData[bill]--;
                            withdrawnMoney -= bill;
                            i++;
                        }
                    }
                }
            }
        } else if (operation === 1) {
            let banknote = row[0];
            if (moneyData[banknote] === undefined) {
                console.log(`Service Report: Banknotes from ${banknote}$: 0.`);
            } else {

                console.log(`Service Report: Banknotes from ${banknote}$: ${moneyData[banknote]}.`);
            }

        }
    }
}
atmMachine([
    [5],
    [20, 5, 100, 20, 1],
    [457, 25],
    [5],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],
]);