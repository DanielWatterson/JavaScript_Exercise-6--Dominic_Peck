console.log("==== Welcome to the functions exercise! ====")
console.log("---------------------------------------------------------------- \n");


// TODO: Create a function called greet that takes a name parameter
// TODO: Make the greet function return "Hello, [name]!"
console.log("==== This function is called greet and it takes a name as a parameter. ====\n");
function greet(name) {
    return "Hello, " + name + "!";
}

const userName = "Dominic";

console.log(greet(userName));
console.log("---------------------------------------------------------------- \n");
// TODO: Create a function called add that takes two parameters
// TODO: Make the add function return the sum of both parameters
console.log("==== This function is called add and it takes two parameters while having a function to return the sum of both parameters. ====\n");
function add(num1, num2) {
    return num1 + num2;
}

const num1 = 10;
const num2 = 20;
console.log(add(num1, num2));
console.log("---------------------------------------------------------------- \n");
console.log("==== This function calls both functions and store their results in variables ====\n");

// TODO: Call both functions and store their results in variables

function superFood() {
    return "Pizza";
}

function superBeverage() {
    return "Coke";
}

// TODO: Print the results to the console

console.log ("The most important super food is " + superFood() + "! And the most important super beverage is " + superBeverage() + "!");