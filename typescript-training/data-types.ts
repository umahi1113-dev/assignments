// Syntax to store the data in TypeScript
// Syntax : Declaration Variable : DataType = Data ;

// Based on the nature of the data types, data types in JavaScript are divided into two different categories.

//1. Primitive data types => Immutable data types : meaning , can't change the original value
//2. Non-Primitive data types => Mutable data types : meaning , original value can be modified

/********************************/
/***Primitive-DataTypes**********/ 
/********************************/

// number => The data type that can store numbers with decimals or without decimals is called the number data type.
// Number should be stored without any quotation
 let num1 : number = 10;
 let num2 : number = 10.65;

console.log(num1);


 //String => The datatype that can store a collection of characters
 //String should be stored always within the quotations: single quotes,double quotes, or backticks.
 let name1 : string = '"Mrs" Uma Maheswari';
 let name2 : string = "'Mrs' Uma Maheswari";
 console.log(name1);
 console.log(name2); 

 


//boolean=> A boolean represents the result of a condition in the form of true or false.
let isJavaScriptFun : boolean = true;
let isSkyGreen : boolean = false;



//undefined=> `undefined` represents a variable that has been declared but not assigned to any value
let empAge : undefined;
console.log(empAge);

//null=> `null` represents a variable that has been declared and assigned to a `null` value intentionally
let salary : null  = null;
console.log(salary);

//union (|)
//union represents more than one data type within the same variable.
let address : string | number | boolean ;
address = "Hyderabad";
address = true;
address = 500018;


//any
//'any' represents any data type is allowed.Basically, we are removing the type safety from TypeScript.
let empAddress : any;
empAddress = "Hyderabad";
empAddress = true;
empAddress = 500088;
empAddress = undefined;
empAddress = null ;


/********************************/
/***Non-Primitive-DataTypes******/ 
/********************************/



//Object=> Object Datatype represents a collection of key-value pairs stored together.
//Here, in TS we should specify data type before only as interface for object

interface empInfo {
    "empName"     : string,
    "empId"       : number,
    "visaStatus"  : boolean,
    "address" : {
    "city"        : string,
    "state"       : string,
    "country"     : string
    }
}
// Object
let empData : empInfo =  {
    "empName"     : "Bharath Reddy",
    "empId"       : 1234,
    "visaStatus"  : true,
    "address" : {
    "city"        :"Kadapa",
    "state"       : "Andhrapradesh",
    "country"     : "India"
    }
}

//process:1
console.log(empData);
console.log(empData.empName);
console.log(empData.address.city);

//process:2
console.log(empData["empName"]);
console.log(empData["address"]["city"]);


//Array=> Array Datatype can represent a collection of values stored together.


//After Array
let fruits : string[] = ["Apple", "Banana" , "Orange"];
let prices  : number [] = [100,200,300];
let fruitsAndPrices : (string | number)[]= ["Apple", 100, "Banana", 200, "Orange", 300];
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

//Accessing Array Elements
console.log(fruits[0]);//Apple
console.log(fruits[1]);//Banana
console.log(prices[2]);//300
console.log(fruitsAndPrices[4]);//Orange


//tuple : Tuple is an ordered array

// tuple v/s normal array
//Problem statement: Store the employee name, the employee ID and visa status within the array.

//Array:  no prescribed order
let employeeInfo :(string | number | boolean)[] = [1234, "Bharath", true];

//Tuple:  it accepts datatype like only pre-described order and datatypes only
let employeeInfoTuple :[string, number, boolean] = ["Bharath", 1234, true];

//Function => Function Datatype represents a block of reusable code that can be executed when called.
//Function represents a block of code or a collection of statements written together to complete a specific task.

function launchBrowserAndLogin(browserName: string,url: number): void
{
    console.log("Launch the ${browserName} Browser");
    console.log(`Enter the URL: ${url}`);
    console.log("Enter the username as 'Uma' and password as 'Uma@123'");
    console.log("Click on the login button");
}
 function logoutAndCloseBrowser(): void // if we are not returning anything means keep void
{
    console.log("Logout from the application");
    console.log("Close the browser");
}

function getAccountBalance(): number {
    console.log("Navigate to the account balance page");
    let accountBalance = 100000;
    return accountBalance;
}

function getAccountStatement():(string|number)[]{
    console.log("Navigate to the account statement page");
    let accountStatement : (string|number)[] = ["savings", 10000, "current", 12000];
    return accountStatement;
}

//Below are three data types from the ES6 version and part of non-primitive data types.

//1. Set => Set Represents a collection of unique values
//2. Map => Map Represents a collection of key-value pairs
//3. Date => Date Represents a specific point in time

//1. Set
let empIds: Set <number>= new Set();
empIds.add(1234);
empIds.add(5678);
empIds.add(7890);
empIds.add(1234); // Duplicate value, will not be added
console.log(empIds);

//2. Map (Duplicate keys are not allowed, but dupliacte values are allowed)
let empDataMap: Map <string, string | number | boolean> = new Map();
empDataMap.set("empName", "Mickey Mouse");
empDataMap.set("empId", 2345);
empDataMap.set("visaStatus", true);
empDataMap.set("empId",1234);//Adding duplicate key
empDataMap.set("newEmpId", 1234);//Adding duplicate value
console.log(empDataMap);

//3. Date// here we are not storing anything so need to specify

let date = new Date();
console.log(date);

//Current Date

let currentDate = date.getDate();//same
console.log(currentDate);

//Current Month

let currentMonth = date.getMonth();// 0-11 which means january is treated as 0 if we want january is treated as 1 add +1=> date.getMonth()+1
console.log(currentMonth);

//Current Day

let currentDay = date.getDay(); //0-6 which means sunday is treated as 0
console.log(currentDay);

//Current Year

let currentYear = date.getFullYear();
console.log(currentYear);


const IndianDate = new Date();
console.log(IndianDate.toLocaleTimeString("en-IN",{
    timeZone: "Asia/Kolkata"

}));
