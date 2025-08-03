// Q1. How can you reverse a string?

let string="hello"
let reversedString=string.split('').reverse().join('')
console.log(reversedString);

let rev=""
for(char of string){
   rev=char+rev
}
console.log(rev);

let reversed=""
for(i=string.length-1;i>=0;i--){
    reversed=reversed+string[i]
}
console.log(reversed);

//Q1. Program to print the series: 14, 28, 20, 40, 32, 64, ... for N = 10

let n=10
let firstNo=14
for(i=1;i<=10;i++){
    console.log(firstNo);
    if(i%2!=0){
        firstNo=firstNo*2
    }else{
        firstNo -=8
    }
    
}

//Q2. Program to print the series: 1296, 648, 216, 108, 36, ... for N = 6

//3 Reverse a number (not a string)

let reverseNumber=123
let reversedNumber=0
while(reverseNumber>0){
    reversedNumber=reversedNumber*10+reverseNumber%10
    reverseNumber=Math.floor(reverseNumber/10)
}
console.log(reversedNumber);

//4. Check if a string is a palindrome
let str="avaa"
let revStrinh=str.split('').reverse().join('')
console.log(str===revStrinh?"its an palindrome":"not an palindrome");


//5. Find factorial of a number

let numberBe=5
let fact=1
for(i=1;i<=numberBe;i++){
    fact=fact*i
}
console.log(fact);


//6. Print Fibonacci series up to N terms

let fib=5
let a=1,b=2
console.log(a);
console.log(b);
for(i=3;i<=fib;i++){
    let c=a+b
    console.log(c);
    a=b
    b=c
    
    
    
}
//7.Find sum of digits of a number

let digit=123
let sum=0
while(digit>0){
    sum=sum+digit%10
    digit=Math.floor(digit/10)
}
console.log("sum",sum);


//8.6. Print all even numbers from 1 to N

let limit=10
for(i=1;i<=limit;i++){
    if(i%2==0){
        console.log(i);
        
    }
}

//7. Check if a number is prime

for(i=1;i<=20;i++){
    isPrime=true
    if(i<2){
        isPrime=false
    }
    for(j=2;j<i;j++){
        if(i%j==0){
            isPrime=false
        }
    }
    if(isPrime){
        console.log(`${i} is a prime`);
        
    }else{
        console.log(`${i} not a prime`);
        
    }
}

//8. Swap two variables without using a third variable

let firstVar=5
let secondVar=2
firstVar=firstVar+secondVar
secondVar=firstVar-secondVar
firstVar=firstVar-secondVar
console.log(firstVar,secondVar);

//. Count vowels in a string

let variable="archaAA"
let vowels=["a","e","i","o","u"]
let count=0
for(a of variable){
if( vowels.includes(a.toLowerCase())){
    count++

}

}
console.log(count);

//10. Print multiplication table of a number
let multipliactionNo=2
for(i=1;i<=10;i++){
    console.log(`${i}*${multipliactionNo}=${multipliactionNo*i}`);
    
}

//11. Find the largest of three numbers
let numb=[1,2,3]
let largest=numb.reduce((a,b)=>a>b?a:b)
console.log(largest);

// 18. Reverse a string without using built-in methods

let stringRev="ava"
let revStr=""
for(a of stringRev){
    console.log(a);
    revStr=a+revStr
}
console.log(revStr);

// 15. Find the sum of even and odd numbers separately from 1 to N
let total=10;
let even=0
let odd=0
for(i=1;i<=total;i++){
    if(i%2==0){
        even=even+i
    }else{
        odd=odd+i
    }
}
console.log(even)
console.log(odd)


// / Q2. Program to print the series: 1296, 648, 216, 108, 36, ... for N = 6
let limit1=6
let firstNo1=1296
for(i=1;i<=limit1;i++){
    console.log(firstNo1);
    if(i%2!=0){
        firstNo1 =firstNo1/2
    }else{
        firstNo1=firstNo1/3
    }
    
}// Greet a user
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Archa")); // Output: Hello, Archa!
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = [];

  for (let item of arr) {
    if (seen.has(item)) {
      duplicates.push(item);
    } else {
      seen.add(item);
    }
  }

  return duplicates;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1])); // [2, 1]
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
// reverse an array

let a=[1,2,3,4,5]
// console.log(a.reverse());
let reversedArray=[]
for(i=a.length-1;i>=0;i--){
    reversedArray.push(a[i])

}
console.log(reversedArray);

//reverse a string
let string="archa"
console.log(string.split('').reverse().join(''));
let reversedString=""
for(a of string){
    reversedString=a+reversedString
    
}
console.log(reversedString);

//Find the largest/smallest number in an array.

let array=[1,2,3,4,5,5,1]
console.log(array.reduce((a,b)=>a<b?a:b));
// Remove duplicates from an array.
let newArr=[]
for(i in array){
    if(!newArr.includes(array[i])){
        newArr.push(array[i])
    }
    
}
console.log(newArr);

//Find the second largest number in an array
for(i in array){

    // let 

}
//reverse an array
let arr=[3,4,5,6]
let revArray=[]
for(i=arr.length-1;i>=0;i--){
    revArray.push(arr[i])


}
console.log(revArray);
console.log(arr.reverse());

//reverse an obj

let word="archa"
let reversedObj=""
for(i of word){
    reversedObj=i+reversedObj

}
console.log(reversedObj);
console.log(word.split('').reverse().join(""));

//// Remove duplicates from an array.
let arr1=[1,2,3,4,4,5]
let duplicate=[]
for(i=0;i<=arr1.length-1;i++){
    if(!duplicate.includes(arr1[i])){
        duplicate.push(arr1[i])
    }
    
}
console.log(duplicate);

//remove duplicate from an object

//second largest number

let arr2=[1,2,3,4,5,8]
let sorted=arr2.sort((a,b)=>b-a)
console.log(sorted[1]);








