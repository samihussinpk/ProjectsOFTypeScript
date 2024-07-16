import inquirer from "inquirer";
let num1 = 10;
let num2 = 5;
let operator = await inquirer.prompt([{
        name: "Questions",
        message: "Kindly enter your  operators (+,-,*,/)",
        type: "input"
    }]);
if (operator == '+') {
    console.log(`The answer of ${num1} ${operator} ${num2} = ${num1 + num2}`);
}
else if (operator == '-') {
    console.log(`The answer of ${num1} ${operator} ${num2} = ${num1 - num2}`);
}
else if (operator == '*') {
    console.log(`The answer of ${num1} ${operator} ${num2} = ${num1 * num2}`);
}
else if (operator == '/') {
    console.log(`The answer of ${num1} ${operator} ${num2} = ${num1 / num2}`);
}
else {
    console.log("Kindly select the correct operator ");
}
