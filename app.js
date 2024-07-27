// Exercise 1
function tobe(){
    let name = ("tobechukwu");
let age = 17;
let isstudent = true;
console.log(name,isstudent)
}
tobe();
function bring(){
    let isstudent = true;
    alert(isstudent)
}

// Exercise 2
let a = 5;
let b = 10;
function changes(){
    let a = b
    console.log('a = '+ a);
}
function changesb(){
    let b= a;
    console.log('b = ' + b);
}
changes();
changesb();

// Exercise 2 other solution
// let a = 5
// let b = 10
// let dad = a
// a = b
// b = dad
// console.log('a =' + a)
// console.log('b =' + b)

// Exercise 4
let x = 5
let y = 2
function sum(){
z = x + y
console.log(z)
}
function differentiate(){
    z = x - y
console.log(z)
}
function multiplication(){
    z = x * y
console.log(z)
}
function quotient(){
    z = x / y
console.log(z)
}
sum()
differentiate()
multiplication()
quotient()

// Exercise 4
let greeting = "Hello"
let subject = "World"
let result = greeting + " " + subject
console.log(result)

//  Exercise5
let temperature = 60
let weather;
 
if (temperature > 30) {
    weather = "Hot";
}else if (temperature >= 20 && temperature <= 30) {
weather = "warm"
} else {
    weather = "cold";
}

console.log(weather)
