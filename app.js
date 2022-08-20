console.log("Hello Loops!");
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let sum = 0;
let count = 0;

for (let num = 1; num <= 10; num++) {
    count++;
    sum += num;
}

console.log(`The average number between 1 and 10 is: ${sum / count}`);


let start = 0;
let end = 10;
let i = 1;

for (let i=1; i<=100;i++){
    if (i %2 == 1) {
        console.log(i, "odd");
    } else if (i % 2 == 0) {
        console.log(i, "even");
    
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
   let output = "";

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FIZZBUZZ");
    } else if (i % 3 == 0) {
        console.log(i, "FIZZ");
    } else if (i % 5 == 0) {
        console.log(i, "BUZZ");
    }
}
// exercise 3 //


let whileI = 0

while (whileI <= end) {
    if (i % 2 == 1) {
        console.log(whileI, "odd");
    }

    whileI++;
}
let doWhileI = 0;

do {
    if (doWhileI % 2 == 1) {
        console.log(doWhileI, "odd");
    }
    doWhileI++;
}  while (doWhileI <= end); {




         if (i % 2 == 0) 
        console.log(Number= " +i)");
        console.log(doWhileI, "even");
}


// exercise 4 //

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);
let foundValue = false;

for (let num = 0; num <= n; num++) {
    if (num == value) {
        console.log("Found Value");
        break;
    }

if (foundValue) console.log("Didn't find value");
}


// exercise 5 //


let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++) {
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log(i, "FIZZBUZZ");
    } else if (i % fizzDivisor == 0) {
        console.log(i, "FIZZ");
    } else if (i % buzzDivisor == 0) {

    }
}

let doWhileF = start;

do {
    let output = "";

    if (doWhileF % 3 == 0) {
        output += "FIZZ";
    }
    
    if (doWhileF % 5 == 0) {
        output += "BUZZ";
    }
    output && console.log(doWhileF, output);

    doWhileF++;
} while (doWhileF <= end);
