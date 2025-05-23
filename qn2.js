let num=123
let rev=0
while(num>0){
    rev=rev*10+num%10
    console.log(rev);
    console.log(Math.floor(num/10));
    
    
    
}
// console.log(rev);

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

