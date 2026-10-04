// How to store data in JavaScript?

// Syntax : Declaration Variable = Data ;

// Variable : A variable is nothing but the name of the memory location where we are going to store the data. At a later point in time, this is going to use in execution

// In JavaScript, variables are divided into two different categories.

//1.Local variables => The variable declared inside the block => Can be accessed only inside the block.
//2.Global variables => The variables declared outside of the block => Can be accessed everywhere.

let empName = "Bharath"; //Global

{
    let empAge = 35; // Local
    //console.log(empName); //able to access
    //console.log(empAge); //able to access

}

console.log(empName); //able to access
console.log(empAge); // not able to access