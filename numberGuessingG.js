import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
let answer = await inquirer.prompt([
    {
        name: "userGuess",
        message: "Kindly enter your guessed number b/w 1 to 10 \nn",
        type: "number"
    }
]);
if (answer.userGuess === systemGeneratedNo) {
    console.log("your number is", answer.userGuess, "and system number is", systemGeneratedNo);
    console.log("Yeah! your number is same as system number. you have won!");
}
else {
    console.log("your number is", answer.userGuess, "and system number is", systemGeneratedNo);
    console.log("No match! try again!");
}
