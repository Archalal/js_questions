// How can you reverse a string?

let str="archa"
let rev=str.split('').reverse().join('')
console.log(rev);

let rev1=""
for(a of str){
    rev1=a+rev1
}
console.log(rev1);
let rev2=""
for(i=str.length-1;i>=0;i--){
    rev2=rev2+str[i]
   
    
}
console.log(rev2);

//Q1. Program to print the series: 14, 28, 20, 40, 32, 64, ... for N = 10

let limit=10
let firstNo=14


for(i=1;i<=limit;i++){
console.log(firstNo);
    if(i%2!=0){
        firstNo=firstNo*2
    }
   else{
    firstNo=firstNo-8
   }
    
    
}
// Q2. Program to print the series: 1296, 648, 216, 108, 36, ... for N = 6
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

