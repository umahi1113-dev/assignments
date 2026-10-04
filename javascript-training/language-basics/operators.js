//Syntax to store the data in JavaScript
//Syntax : Declaration Variable = Data ;

// let = data can modify later 'n' number of times
// const = data cannot modify (fixed)
// var = based on situation

//Operartors : Operators are a set of special characters used in the JavaScript program to perform different types of operations.

//Based on the nature of the operation that we are going to perform, we can divide these operators into five different categories.

//1.Arithemtic operators
//2.Assignment operators
//3.Comparison operators
//4.Logical operators
//5.Ternary operator




//1. Arithmetic operators => Arithmetic operators are all about , set of special characters used to perform mathematical operations.

// + => Addition
// - => Subtraction
// * => Multiplication
// / => Division
// % => Modulus 
// ++ => Increment ( Increase the value by 1 )
// -- => Decrement ( Decrease the value by 1 )


let a = 30;
let b = 20;

console.log("1.Arithmetic operators");
console.log(a++); //post increment
console.log(a);
console.log(++a); //pre increment
console.log(a);
console.log(b--); //post decrement
console.log(b);
console.log(--b); //pre decrement
console.log(b);


// 2.Assignment operators => Assignment operators are all about Set of special characters used to assign a value to the variable
 // to increase the value more than 1 use assignment operators
// = 
// +=
// -=
// *=
// /=
// %=

console.log("2.Assignment operators");
let i = 10;
console.log(i);

i+=5; // i = i+5 => 10+5 =15
console.log(i);

i-=10; // i = i-10 => 15-10=5
console.log(i);

i*=20; // i = i*20 => 20*5=100
console.log(i); 

i/=5; // i = i/5 => 100/5=20
console.log(i);

i%=2; // i = i%2 => 20%2 =0(remainder)
console.log(i);


//3.Comparison operators => Set of special characters used in a programming language to compare two different values
console.log("3.Comparison operators");

// ==(Loose equality) , ===(Strict equality), >, <, >=,<=,!=,!==
// ==(Loose equality) => Loose equality can verify only data without considering the data type.
// ===(Strict equality) => Strict equality can verify both data as well as data types.

let x = 10; // number
let y = 10; // number
let z = "10"; //text => not add just print

console.log(x+y);
console.log(x+z);

console.log(x==y);
console.log(x==z);

console.log(x===y);
console.log(x===z);

console.log(x!=z);

console.log(x!==z);


// 4. Logical operator => Set of special characters used to build logic by combining multiple conditions together

// && => Logical AND => will return true if all conditions are true
// || => Logical OR => will return true atleast one conditions is true
// ! => Logical NOT => will return opposite result

console.log("4.Logical operators");
let p = 10;
let q = 20;
let r = 30;

console.log(p<q && q>r); // true AND false =>false
console.log(p<q || q>r); //true OR false => true
console.log(!(p<q || q>r)); // !(//true OR false)=>not(true) => false


//5.Ternary operator => Ternary operator is a special character used to perform a conditional operation. It's a shorthand of an if-else consitional statement.

console.log("5.Ternary operator");
//Syntax : let result = (condition) ? value-if-true : value-if-false;

let age = 17;
let result = (age>=18) ? "Eligible" : "Not Eligible";
console.log(result);




