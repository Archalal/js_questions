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
    
}
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(countVowels("javascript")); // Output: 3
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(4)); // false
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
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
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
function fibonacci(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    console.log(a);
    [a, b] = [b, a + b];
  }
}

fibonacci(5);
// Output: 0, 1, 1, 2, 3
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([2, 7, 3, 9, 1])); // 9
