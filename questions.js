//How can you reverse a string?

let string="hello"
let rev=string.split('').reverse().join('')
console.log(rev);

// Write a program to print the series 14, 28, 20, 40, 32, 64, ...… till N terms
// Number of terms = 10

let n=10
let num=14

for(i=1;i<=10;i++){
    console.log(num);
    if(i%2!=0){
        num =num*2
    }
    else{
        num=num-8
    }
    
}

//Write a program to print the series series: 1296, 648, 216, 108, 36, ... till N terms
// Number of terms will be 6

let n1=6
let num1=1296

for(i=1;i<=6;i++){
    console.log(num1);
    if(i%2!=0){
        num1=num1/2
    }else{
        num1=num1/3
    }
    
}
//Reverse a number (not a string)

let number=123
let reverse=0

//palindrome

let str="avaa"
let reversedStr=""
for(a of str){
    // console.log(a);
    reversedStr=a+reversedStr
    
}
console.log(str===reversedStr?"palindrome":"not palindrome");

//factorial

let fact=1
for(i=1;i<=5;i++){
    fact=fact*i
}
console.log(fact);



