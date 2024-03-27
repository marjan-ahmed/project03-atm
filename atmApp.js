import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue("Welcome To Marjan ATM Machine"));
console.log("\n");
let balance = 20000; //in Dollar
console.log(`You Balance is ${balance}`);
//my ATM pin
const myPin = 3623;
const userInputPin = await inquirer.prompt([
    {
        name: "userPin",
        type: "number",
        message: "Enter your pin:"
    }
]);
if (userInputPin.userPin === myPin) {
    console.log(chalk.blue("Correct Pin!"));
    console.log("\t");
    console.log("What do you want to do?");
    const option = await inquirer.prompt([
        {
            name: "userOpt",
            type: "list",
            choices: ['Withdraw', 'Check balance'],
            message: "Enter your choice:"
        }
    ]);
    if (option.userOpt === 'Withdraw') {
        const withdraw = await inquirer.prompt([
            {
                name: "userWithdraw",
                type: "list",
                choices: [500, 1000, 5000, 1000, 15000,],
                message: "Enter your amount:"
            }
        ]);
        const totalAmount = balance - withdraw.userWithdraw;
        console.log(chalk.green(`${totalAmount} are left in your balance`));
        console.log(chalk.yellow("Thank you for visiting our ATM"));
    }
    ;
    if (option.userOpt === 'Check balance') {
        console.log(chalk.green(`Your current balance is ${balance}`));
        console.log(chalk.yellow("Thank you for visiting our ATM"));
    }
}
else {
    console.log("\t");
    console.log(chalk.red("Invalid Pin"));
}
