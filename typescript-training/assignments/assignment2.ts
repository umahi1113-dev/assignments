// A bank evaluates loan applicants based on the following criteria:

// 1. Credit Score:
// o If the credit score is above 750, the loan is automatically approved.
// o If the credit score is between 650 and 750, additional checks are performed.
// o If the credit score is below 650, the loan is denied.

let creditScore : number = 650 ;

if(creditScore >= 750) {
    console.log("Loan : Automatically Approved");
}else if(creditScore >= 650 && creditScore <= 750) {
    console.log("Loan : Additional checks are performed");
}else {
    console.log("Loan : Denied");
}

// 2. Income:
//For credit scores between 650 and 750, the customer’s income must be at least $50,000 for the loan to be considered.

let newCreditScore : number = 700;
let income : number = 50000;
if(newCreditScore > 650 && newCreditScore <750){
    if ( income >= 50000){
        console.log("Loan considered : true");
    }else {
        console.log("Loan considered : false");
    }
}

// 3. Employment Status:
//  If the customer’s income is at least 50,000, the system checks whether the customer is employed.
//  If the customer is unemployed, the loan is denied.

let  newincome: number = 50000;
const isEmployed: boolean = true;

if (newincome >= 50000) {
    if (isEmployed) {
        console.log(`Loan considered: true`);
    } else {
        console.log(`Loan denied: customer is unemployed`);
    }
}

// 4. Debt-to-Income Ratio:
// o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
// o If the DTI ratio is less than 40%, the loan is approved.
// o If the DTI ratio is 40% or greater, the loan is denied.

// Create common function and then based on below details, print whether user is eligible to get the loan or not
//  customerName = "John Doe";
//  creditScore = 720;
//  income = 55000.0;
//  isEmployed  = true;
//  debtToIncomeRatio  = 35.0;

function checkLoanEligibility(
    customerName: string,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
): void {

    if (income >= 50000) {
        if (isEmployed) {
            if (debtToIncomeRatio < 40) {
                console.log(`${customerName}: Loan Approved`);
            } else {
                console.log(`${customerName}: Loan Denied`);
            }
        } else {
            console.log(`${customerName}: Loan Denied`);
        }
    } else {
        console.log(`${customerName}: Loan Denied`);
    }
}






