
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


console.log("For Loop:");
for (let i = 0; i <=100; i++) {
    if (i % 2) {
        console.log(i);
    }
}

console.log("Do-While Loop:");
let i = 0;

do {
    if (i % 2) {
        console.log(i);
    }
    i++;
}
while(i <=100);

console.log("While Loop:");
i = 0;

while(i <=100) {
    if (i % 2) {
        console.log(i);
    }
    i++;
}


// Exercise 2 Section	// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(i = 1; i <=100; i++) {
    if (i % 3 + i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (i % 3 == 0) {
        console.log("FIZZ");
    } else if (i % 5 == 0) {
        console.log("BUZZ");
    } else {
        console.log(i);
    }
}



//function fizzBuzz(start, end){
  //for(let num=start; num <= end; num++){
    //  if(num % 5 === 0 && num % 3 === 0){
        //console.log("FizzBuzz")
     // }
      //else if(num % 3 === 0){
        //console.log("Fizz")
      //}
      //else if(num % 5 === 0){
        //console.log("Buzz")
     // }
      //else {
        //console.log(num)
      //}
  //}
//}
