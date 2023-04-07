// ANSWER# 01

let num1 = prompt("Write a first number");
let num2 = prompt("Write a second number");

if (num1 > num2){
  console.log("First number is greater i.e " + num1);
}
else {
  console.log("Second number is greater i.e " + num2);
} 

// ANSWER# 02

let num = prompt("write a number")
if (num > 0 ){
  alert("The sign is +")
}
else if (num < 0 ) {
    alert("The sign is -")

}
else {
  alert("The given number is zero")
}

//ANSWER# 03
let numA = prompt("Enter number A");
let numB = prompt("Enter number B");
let numC = prompt("Enter number C");
let numD = prompt("Enter number D");
let numE = prompt("Enter number E");


let greatestNum = Math.max(numA, numB, numC, numD, numE);
console.log("The Greatest Number is "+ greatestNum+".");

/* if(numA>numB && numA>numC && numA>numD && numA>numE){
  console.log("A is greater i.e " + numA)
  //and for B,C,D and E.... else if .... else
} */

// ANSWER# 04

for (let i = 0; i <= 15; i++ ){
if( i % 2 === 0){
  console.log(i + "\tis even");
}
else {
    console.log(i + "\tis odd");

}
}

// ANSWER# 05

let marks = { 
  subA : 97, subB : 59, subC : 88, subD : 95 , subE :92, subF : 96
};
// let numOfSub = Object.keys(marks).length;
console.log(marks)

let avg = (marks.subA + marks.subB + marks.subC + marks.subD + marks.subE + marks.subF) / 6 ;

console.log(avg); 


if (avg <= 100 && avg >= 90){
  console.log("A Grade");
}
else if (avg < 90 && avg >= 80){
  console.log("B Grade");
}
else if (avg < 80 && avg >= 70){
  console.log("C Grade");
}
else if (avg < 70 && avg >= 60){
  console.log("D Grade");
}
else if (avg > 100 || avg < 0){
  console.log("ERROR");
}else {
  console.log("F Grade");
}

//ANSWER# 06
for (var i=1; i <= 100; i++)
{
if (i % 15 == 0)
     console.log("FizzBuzz");
else if (i % 3 == 0)
     console.log("Fizz");
else if (i % 5 == 0)
     console.log("Buzz");
else
     console.log(i);
}

// ANSWER# 07

let str = "";
for (let i =0 ; i < 5; i++){
  str += "\n* ";
  for (let j = 0 ; j < i; j++){
    str+= " * ";
  }
}
console.log(str);
