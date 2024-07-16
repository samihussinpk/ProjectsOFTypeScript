import inquirer from "inquirer";

let myPin: number = 1122;
let myBalance : number = 10000;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message:"Kindly enter your pin",
        type:"number"
    }
])

if(myPin === pinAnswer.pin){
    console.log("Your pin is correct");    

    let operationAns = await inquirer.prompt([
        {
            name: "opereations",
            message:"Kindly select any option",
            type:"list",
            choices:["withdraw","Fast cash","check balance"]
        }
    ])
    if(operationAns.opereations === "withdraw"){
        let amountAns = await inquirer.prompt([
            {
                name:"amount",
                message:"Kindly enter your amount",
                type:"number"
            }
        ])
        if(amountAns.amount <= myBalance){
        let remainingBalance = myBalance - amountAns.amount;
        console.log(`The remaining balance is ${remainingBalance}`);
        }
        else{
            console.log("you have insufficient balance");
            
        }
         
    }
    else if(operationAns.opereations === "Fast cash"){
        let fastCashAns = await inquirer.prompt([
            {
                name:"fastCashAmount",
                type:"list",
                choices:["1000","2000","3000","5000","10000","15000","20000"]
            }
        ])
        if(fastCashAns.fastCashAmount <= myBalance){
            let remainingBalance2 = myBalance -fastCashAns.fastCashAmount
            console.log(`The remaining balance is  ${remainingBalance2}`);
            
        }
        else{
            console.log("You have insufficient amount");
            
        }
    }
    else if (operationAns.opereations ==="check balance")
        console.log(myBalance);
        
    
}
else(
    console.log("your pin is not correct")    
)

