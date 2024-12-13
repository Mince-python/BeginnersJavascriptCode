//  Javascript variable and Data type

// Three ways to declare a variable: var, let, const

// Data Types

// String: text data, words or sentence
// Number
// boolean {true or false}
// Null: absenceof any value
// undefined: a variable without any value
// symbol:  unique identifier
// json: javasript object notation
// object: 
// array


// let name = "john Doe"
// console.log(typeof name)

// let age = 20
// console.log(typeof age)

// let anotherAge = '20'
// console.log(anotherAge)
// console.log(typeof anotherAge)

// Boolean
// let isAvailable = true

// let isEaten = false

// console.log(isAvailable)
// console.log(typeof isAvailable)

// let car = null

// console.log(typeof car)

// // Javascript operator

// let a = 6;
// let b = 4;

// console.log(a + b) //Addition
// console.log(a - b) //subtraction
// console.log(a * b) // multiplication
// console.log(a / b) //division
// console.log(a % b) //modulus

// let ageTosin = 25
// let houseNo = '56'

// let combine = ageTosin + houseNo

// console.log(combine) //concatination

// let x = 6

// x += 5

// console.log(x)

// comparison operator return or output either true or false

// let a = 7
// let b = 3
// let c = '7'
// let d = 3

// console.log(a > b)
// console.log(a < b)
// console.log(a == b)
// console.log(a == c) //double equal check for only data type
// console.log(a===c) //triple equal operator check for both data value and data type
// console.log(b === d)
// console.log(b =! d)

// Logical Operator

// AND, OR, NOT

// let p = true
// let q = false
// let r = false
// let s = true
// let t = false

// console.log(p && q)
// console.log(p || q)


// console.log(p && q && r && s)
// console.log(p || r || t)

// console.log(!p)
// console.log(!r)

// Conditional Statement
// IF, ELSE IF, SWITCH

// let agex = 12

// if(agex > 18){
//     console.log('You are and Adult')
// }

// else if(agex < 18 && agex >= 13){
//     console.log('You are a teenager')
// }
// else{

//     console.log('You are a child')
// }

// SWITCH
// let day = 3
// let dayname

// switch (day){
//     case 1:
//         dayname = 'Monday'
//         break;
//     case 2:
//         dayname = 'Tuesday'
//         break;
//     case 3:
//         dayname = 'Wednesday'
//         break;
//     case 4:
//         dayname = 'Thurday'
//         break;
//     case 5:
//         dayname = 'Friday'
//         break;
//     case 6:
//         dayname = 'Saturday'
//         break;
//     case 7:
//         dayname = 'Sunday'
//         break;
// }
// console.log(dayname)

// PartOne Assignment {Switch & case}

let age = 15
let validAge

switch (age){
    case age < 18:
        validAge = "You are not eligible"
        break;
    case age <= 15:
        validAge = "Oops.. You are a teenager"
        break;
    case age >= 18:
        validAge = "You are Eligible"
        break;

}
console.log(validAge)

// Loops
// for loop
// while loop
// Do..while loop

// for loop: initiation, condition, increment/decrement



// while (i < 2){
//     console.log(i)
//     i++
// }