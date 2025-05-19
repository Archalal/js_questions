//Reverse a string using JavaScript.
const string="archa"
let reverse=string.split('').reverse().join('')
console.log(reverse);
let rev=""
for(a of string){
    rev =a+rev   
}
console.log(rev);

//Find the largest number in an array.
let array=[1,2,3,4,5,9,4]
let largest=array.reduce((a,b)=>a>b?a:b)
console.log(largest);



//Check if a string is a palindrome.
let string1="ihii"
let rev1=""
console.log(string.length,"hi");


for(i=string1.length-1;i>=0;i--){
    rev1 +=string1[i]

}
console.log(rev1);

//Flatten a nested array (e.g. [1, [2, 3], [4, [5]]] => [1,2,3,4,5])

let arr2=[1, [2, 3], [4, [5]]] 
console.log(arr.flat(Infinity));


//*
// * *
// * * *
// * * * *

for(i=1;i<=5;i++){
    let row=""
    for(j=1;j<=i;j++){
        row +="*"+" "
    }
    console.log(row);
    
}
let aa = [1, 2, 3];
let bb = aa;
bb.push(4);
console.log(bb);


let arr3 = ['a', 'b', 'a', 'c', 'b', 'a']; // Example array

let freq = {};

for(i=0;i<=arr3.length-1;i++){
    // console.log(arr3[i]);
    let word=arr3[i]
    if(freq[word]){
        freq[word]++
    }else{
        freq[word]=1
    }
    
}
console.log(freq);

//🔁 4. Count vowels in a string
let vowel=["a","e","i","o","u"]
let stringFind="archaA"
let count=0
for(a of stringFind){
    if(vowel.includes(a.toLowerCase())){
        count++
    }
    

}
console.log(count);

//🔁 8. Find the sum of all elements in an array

let array1=[1,2,3]
let sum=0
let final=array1.reduce((a,b)=>a+b,0)
console.log(final);

//🔁 10. Merge two arrays and sort them
let arr4=[1,7,2,3]
let arr5=[...arr4,5,6].sort()
console.log(arr5);


//Q1. Program to print the series: 14, 28, 20, 40, 32, 64, ... for N = 10
let n=10;
let firstNumber=14
for(i=1;i<=n;i++){
    console.log(firstNumber);
    if(i%2!=0){
        firstNumber =firstNumber*2
    }else{
        firstNumber -=8
    }
    
}

//1. Reverse a number (not a string)
let number=123
let reverseNumber=0
while(number>0){
     reverseNumber=reverseNumber*10+number%10
     number=Math.floor(number/10)
}
console.log(reverseNumber);

//3. Find factorial of a number
let number1=5
let fact=1
for(i=1;i<=number1;i++){
    fact *=i
}
console.log(fact);

//4. Print Fibonacci series up to N terms

let c=1
let d=2
console.log(c);
console.log(d);
for(i=3;i<=10;i++){
    let e=c+d
console.log(e);
c=d
d=e
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
            break
        }
    }
  console.log(isPrime?`${i} prime`:`${i} not prime`);
  
    
}

//Swap two variables without using a third variable
let var1=3
let var2=4
var1=var1+var2
var2=var1-var2
var1=var1-var2
console.log(var1,var2);


let str4="listen"
let str5="silent"
console.log(
    str4.split('').sort().join('')=== str5.split('').sort().join('')?"Yes it is a anagrams":"no anagrams"
);

//. Sort an array without using sort()
let array2=[1,2,3,5,6,7.9,10]
// let sortedArray=


//Print duplicate values from an array.
let arr8=[1,2,3,3]
let duplicatedValue=[]
arr8.filter((a)=>
    !duplicatedValue.includes(a)&&duplicatedValue.push(a)
)
console.log(duplicatedValue);
