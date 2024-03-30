#! usr/bin/env node
import inquirer from "inquirer";

const myPin = 3623;
const myBalance = 15000; //Ponds

console.log("Welcome to ATM machine (by Marjan Ahmed)");

const question1 = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin:"
    }
]);

if(question1.pin === myPin){
    console.log("Correct Pin!");
    console.log("\t");

    const question2 = await inquirer.prompt([
        {
            name: "cashSys",
            type: "list",
            choices: ['Cash Withdrawal', 'Check Balance'],
            message: "Enter your payment method:"
        }
    ]);

    console.log("\t");

    if(question2.cashSys === 'Cash Withdrawal'){

        const withdrawal = await inquirer.prompt([
            {
                name: "userCash",
                type: "list",
                choices: ['Fast Cash', 'User Amount'],
                message: "Enter your cash withdrawal method:"
                
            }
        ]);

        console.log("\t");

        if(withdrawal.userCash === 'Fast Cash'){

            const fastCashMeth = await inquirer.prompt([
                {
                    name: "userFastCash",
                    type: "list",
                    choices: [500,1000,5000,1000,15000,20000],
                    message: "Enter your amount:"
                }
            ]);

            console.log("\t");

            const calculate = myBalance - fastCashMeth.userFastCash;
            console.log("You Balance is",calculate); 
        }

        else if(withdrawal.userCash === 'User Amount'){
            const userAmount = await inquirer.prompt([
                {
                    name: "userGivenAmount",
                    type: "number",
                    message: "Enter your amount:"
                }
            ]);

            console.log("\t");

            const calculate = myBalance - userAmount.userGivenAmount;
            console.log("Your Balance is",calculate); 
            console.log("\t");

        }
    }

    else if(question2.cashSys === 'Check Balance') 
    {
        console.log(`Your balance is ${myBalance}`);
    }
}

else{
    console.log("Invalid Pin");
};