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
for (let num = 1; num <= 100; num++) {
    if (num % 2 == 1) {
      console.log(num + " Odd");
    }
  }
  console.log("EXERCISE 2:\n==========\n");
  for (let num = 1; num <= 100; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
      console.log(num + " FIZZBUZZ");
    } else if (num % 3 == 0) {
      console.log(num + " FIZZ");
    } else if (num % 5 == 0) {
      console.log(num + " BUZZ");
    }
  }
  console.log("EXERCISE 3:\n==========\n");
  let num = 1;
  while (num <= 100) {
    if (num % 2 != 0) {
      console.log(num++ + " Odd");
      continue;
    }if (num % 2 == 0) {
      num++;
    }
  }
  num = 0;
  do {
    if (num % 2 != 0) {
      console.log(num++ + " Odd");
      continue;
    }if (num % 2 == 0) {
      num++;
    }
  } while (num <= 100);
  num = 1;
  while (num <= 100) {
    if (num % 3 == 0 && num % 5 == 0) {
      console.log(num + " FIZZBUZZ");
      num++;
    } if (num % 3 == 0) {
      console.log(num + " FIZZ");
      num++;
    }if (num % 5 == 0) {
      console.log(num + " BUZZ");
      num++;
    }if (num % 3 != 0 || num % 5 != 0) {
      num++;
    }
  }
  num = 1;
  do {
    if (num % 3 == 0 && num % 5 == 0) {
      console.log(num + " FIZZBUZZ");
      num++;
    }if (num % 3 == 0) {
      console.log(num + " FIZZ");
      num++;
    }if (num % 5 == 0) {
      console.log(num + " BUZZ");
      num++;
    }if (num % 3 != 0 || num % 5 != 0) {
      num++;
    }
  } while (num <= 100);



  console.log("EXERCISE 4:\n==========\n");
  
  let value = Math.round(Math.random() * 500);
  let n = Math.round(Math.random() * (500 - 100) + 100);
  if (value > n) {
    console.log("Did not find value");
  }
  for (let m = 0; m != n; m++) {
    if (m == value) {
      console.log(m + " Found value!");
      break;
    }
  }
  

  console.log("EXERCISE 5:\n==========\n");

  let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
  let gameStart = Math.round(Math.random() * (10 - 1) + 1);
  let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
  let gameEnd = Math.round(Math.random() * (1000 - 1) + 1);
    for(i = gameStart; i <= gameEnd; i++){
      if(i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log("FIZZBUZZ");
    }
    else if (i % fizzDivisor == 0){
        console.log("FIZZ");
    }
    else if(i % buzzDivisor == 0){
        console.log("BUZZ");
    }
}
      