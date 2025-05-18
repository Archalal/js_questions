// ✅ Reverse a string
// Input: "hello" → Output: "olleh"

let string="hello"
let reverse=string.split('').reverse().join('')
console.log(reverse);


//✅ Check if a string is a palindrome

let str="avaa"
let revStr=""
for(a of str){
    revStr =a+revStr
}
console.log(str===revStr?"true":"false");

//✅ Find the factorial of a number
let number=5
fact=1
for(i=1;i<=number;i++){
    fact=fact*i
}
console.log(fact);

//✅ Print the Fibonacci series up to N terms

let aa=1
let b=2
console.log(aa);
console.log(b);
for(i=3;i<=5;i++){
    c=aa+b
    console.log(c);
    aa=b
    b=c
    
}

//✅ Check if a number is even
for(i=1;i<=10;i++){
    if(i%2==0){
        console.log(`${i} even`);
        
    }
}

//✅ Find the largest/smallest number in an array
let arr=[1,2,7,9]
let largest=arr.reduce((a,b)=>a>b?a:b)
console.log("largest no is",largest);


//✅ Find the sum of digits of a number

let num1=123
let sumOf=0
while(num1>0){
    sumOf=sumOf+num1%10
    num1=Math.floor(num1/10)
}
console.log(sumOf);


//✅ Count the number of vowels in a string
let string1="archa"
let vowel=["a","e","i","o","u"]
let count=0
for(a of string1){
    if(vowel.includes(a)){
        count++
    }
}
console.log(count);

//✅ Remove duplicate values from an array

let array=[1,4,2,3,4,5,5]
let duplicateArray=[]
let mapped=array.map((a)=>
!duplicateArray.includes(a)&&duplicateArray.push(a))
console.log(duplicateArray);

//✅ Swap two variables without using a third variable

let first=1
let second=2
first=first+second
second=first-second
first=first-second
console.log(first,second);


//✅ Add all elements of an array
let arraySum=[1,2,3]
let sumOfArray=arraySum.reduce((a,b)=>a+b,0)
console.log(sumOfArray);
// ✅ Reverse an array manually

//✅ Sort an array without using sort() function

//✅ Check if a number is prime

for(i=1;i<=20;i++){
    isPrime=true
    if(i<2){
        isPrime=false
    }
  for(j=2;j<i;j++){
    // j<4 true
    //4/2
    if(i%j==0){
        isPrime=false

    }
  }
  if(isPrime){
    console.log(i,"prime");
    
  }else{
    console.log(i,"not prime");
    
  }
    
}


