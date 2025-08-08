// How can you reverse a string?
let string="ava"
let revString=string.split('').reverse().join('')
console.log(string);



// Program to print the series: 14, 28, 20, 40, 32, 64, ... for N = 10
let firstNo=14
let limit=10
for(i=1;i<=limit;i++){
    console.log(firstNo);
    if(i%2!=0) {
        firstNo *=2
    }   else{
        firstNo -=8
    }
}
// Program to print the series: 1296, 648, 216, 108, 36, ... for N = 6

// Reverse a number (not a string)
let noString=123
let reverseString=0

while(noString>0){
    reverseString=reverseString*10+noString%10
    noString=Math.floor(noString/10)
}
console.log(reverseString);


// Check if a string is a palindrome

let palindrome="ana"
let revStr=""
for(i=palindrome.length-1;i>=0;i--){
    revStr=revStr+palindrome[i]
}
console.log(revStr);


// Find factorial of a number
let number=5
let fact=1
for(i=1;i<=number;i++){
    fact *=i
}
console.log(fact);


// Print Fibonacci series up to N terms

let a=1
let b=2
let end=5
console.log(a);
console.log(b);
for(i=3;i<=end;i++){
    c=a+b
    console.log(c);
    a=b
    b=c
    

}




// Find sum of digits of a number

let sumOfDigit=0
let sumOfNumber=123
while(sumOfNumber>0){
    sumOfDigit=sumOfDigit+sumOfNumber%10
    sumOfNumber=Math.floor(sumOfNumber/10)
}
console.log(sumOfDigit);


// Print all even numbers from 1 to N

// Check if a number is prime
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
    console.log(isPrime?`${i} prime`:`${i} not a prime`);
    
}

// Swap two variables without using a third variable
let ab=10
let bc=20
ab=ab+bc
bc=ab-bc
ab=ab-bc
console.log(ab,bc);


// Count vowels in a string
let name="archaA"
let vowels=["a","e","i","o","u"]
count=0
for(a of name){
    if(vowels.includes(a.toLowerCase())){
        count++
    }
}
console.log(count);


// Print multiplication table of a number
let mult=2
for(i=1;i<=20;i++){
    console.log(`${i}*${mult}=${i*mult}`);
    
}

// Find the largest of three numbers
let array=[10,30,20]
let largest=array.reduce((a,b)=>
    a>b?a:b
)
console.log(largest);




// Reverse a string without using built-in methods

// Find the sum of even and odd numbers separately from 1 to N

//Remove duplicates from an array
let arr=[1,2,3,4,6,6,4]
let duplicate=[]
let arrMapped=arr.filter((a)=>
    !duplicate.includes(a)&&duplicate.push(a)
)
console.log(duplicate);
// Flatten a nested array ([1, [2, [3]]] → [1, 2, 3]).

let arr1=[[1, [2], [3]]]
console.log(arr1.flat(Infinity));
