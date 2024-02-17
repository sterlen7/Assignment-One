//1 Program to check even or odd number 

function isEvenOrOdd(Number) {
    return (Number % 2 === 0) ? 'The number is even' : 'The number is odd'
}
//example
console.log(isEvenOrOdd(100))


// 2 . Array of favorite foods 

const favoriteFruits = ['pawpaw', 'apple', 'mango', 'kiwi']
favoriteFruits.forEach(favoriteFruits => {
    console.log(`${favoriteFruits} is my favorite fruit `)
});

// 3 To uppercase()

const love = 'i love node js'
console.log(love.toUpperCase())

// 4 Palindrome

// 5 age  variable 

const myAge = 23
console.log(`I am ${myAge} years old `)

//6 numbers from 1 to 10 

const number = 11

for (let i = 1; i < number; i++) {
    console.log(i)
}

//7 positive, negative, zero 

// function myNumber(checkNumber) {

//     switch (checkNumber) {
//         case checkNumber < 0:
//             return 'The number is negative';


//         case checkNumber > 0:
//             return 'The number is positive';

//         default:
//             return 'Zero'

//     }
// }

// console.log(myNumber(5))

function checkNumber(number) {
    if (number > 0) {
        console.log(`The number is positive`)
    } else if (number < 0) {
        console.log(`The number is negative `)
    } else {
        console.log(`The number is zero`)
    }
}
//example
checkNumber(-5)
checkNumber(4)
checkNumber(0)

//8 toLower case

const myString = 'I LOVE NODE JS'

console.log(myString.toLowerCase())

//9 array sum

const arrayNumbers = [6, 7, 8]
let sum = 0

for (let i = 0; i < arrayNumbers.length; i++) {
    sum += arrayNumbers[i]
}

console.log(sum)

//10 Leap year c 
// function checkLeapYear(year) {
//     if (year % 400 === 0) {
//         console.log('It is a leap Year ')
//     } else if (year % 100 !== 0) {
//         console.log('It is not a leap year')
//     }
// }

// checkLeapYear(2024)

function checkLeapYear(year) {
    return (year % 400 == 0 || year % 100 !== 0 && year % 4 == 0) ? 'It is a leap year ' : 'It is not a leap year'
}

// example
console.log(checkLeapYear(2025))
console.log(checkLeapYear(2024))

//11 num sum 

const num1 = 30;
const num2 = 40;

console.log(num1 + num2)

// 12 day using switch statement 
let day = 'Monday'

function checkDay(day) {


    switch (day) {
        case 'Tuesday':
            return 'It is tuesday!'
        case 'wednesday':
            return 'It is wednesday!'
        case 'thursday':
            return 'It is thursday!'
        case 'friday':
            return 'It is friday!'

        default:
            return 'It is monday'
    }
}
//example
console.log(checkDay('Monday'))
console.log(checkDay('friday'))

//13 area of rectangle

function areaRectangle(length, breadth) {
    return length * breadth
}

console.log(`The area of the rectangle is ${areaRectangle(5, 6)} cm `)

//14 parseInt and float 

const strNumber = '30'
const floatNumber = '23.5'

console.log(parseFloat(floatNumber))
console.log(parseInt(strNumber))

//15 exist in array

// const friends = ['David', 'Mike', 'Tom']

// function ifExist(name) {
//     for (let i = 0; i < friends.length; i++) {

//         return (name == [friends] ? 'It exists' : 'Does not exist')
//     }
// }
// console.log(ifExist('Tom'))


//16 Prime umber check

//17 harmattan

const isHarmattan = false

if (isHarmattan != true) {
    console.log('It is raining')
} else {
    console.log('It is dry')
}

//18 print even numbers
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//19 factorial 

// let numb = 1
// function facCheck(number) {
//     for (let i = 0; i <= number; i++) {
//         numb *= i
//     }
//     return result
// }
// const numb1 = 5
// console.log(facCheck(num1))

//20 to string 

const myyAge = 23
console.log(myAge.toString())

//21. Colors Array 
const colorsArray = ['blue', 'white', 'yellow', 'red']
const lengthOfArray = console.log(colorsArray.length)

//22 valid email

// function isValidEmail(email) {
//     if (!email.includes('@', '.com'))
//         return 'Invalid email'
// }
// const email1 = yakhabib90
// console.log(isValidEmail(email1))

//23largest number

let numA = 30
let numB = 6
let numC = 80

let maximumNumber = Math.max(numA, numB, numC)

console.log(`the largest number is`, maximumNumber)

//24Logical operators

//25 celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}
const celciustoFar = celsiusToFahrenheit(300)
console.log(`The temperature in fahrenheit is ${celciustoFar}F `)
// const tempCelsius = tempFahrenheit - 273

// example


//26 string to number 

const abNumb = '20';

console.log(parseInt(abNumb));

//27declare age 

const age = ''

//28 number to 5 
const fNumber = 5

for (i = 1; i <= fNumber; i++) {
    console.log(i)
}

// 29 combination of logical operator && and ||
function userValidation(age, email, password) {

    const newUserValid = age && email && password
    if (userValidation = age && email && password) {
        return 'Welcome Back'
    } else if (userValidation !== age || email || password) {
        return 'Incorrect details'
    }
}
//example
const userSterlen = userValidation(21, true, false)
console.log(userSterlen)









