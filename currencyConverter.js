import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("Welcome To Currency Conversion Project\n"));
let exchangeRates = {
    "USD": 1, //Base currency
    "EUR": 0.9, // european currency (Euro)
    "JYP": 113, // Japenese Currecny (Yen) 
    "CAD": 1.3, //Canadian Dollar
    "AUD": 1.65, //Australian doller
    "PKR": 278.56 //Pakistani Rupees
};
let userAnswer = await inquirer.prompt([
    {
        name: "from_currency",
        message: "Select the currency to convert",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        message: "Select the currency in which you want to convert.",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount to convert",
        type: "input"
    }
]);
// Currency conversion by using formula
let fromAmount = exchangeRates[userAnswer.from_currency];
let toAmount = exchangeRates[userAnswer.to_currency];
let userAmount = userAnswer.amount;
// formulae for conversion
let baseAmount = userAmount / fromAmount;
let convertedAmount = baseAmount * toAmount;
// Converted amount will be displayed here and ".toFixed" is used to round off the amount 
console.log(`The converted amount is ${convertedAmount.toFixed(3)}`);
