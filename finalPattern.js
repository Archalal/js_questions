// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1  

for(i=1;i<=5;i++){
    row=""
    for(j=i;j>=1;j--){
        row +=j+" "
    }
    console.log(row);
    
}

//   *  
//  * *  
// * * *  

let limit=3
for(i=1;i<=limit;i++){
    pattern=""
    for(j=1;j<=limit-i;j++){
        pattern +=" "
    }
    for(k=1;k<=i;k++){
        pattern+="* "
    }
    console.log(pattern);
    
}

//1
// 10
// 101
// 1010
// 10101
for(i=1;i<=5;i++){
    row=""
    for(j=1;j<=i;j++){
        row +=j%2+" "
    }
    console.log(row);
    
}


//     1
//    121
//   12321
//  1234321
// 123454321
let n=5
for(i=1;i<=n;i++){
    pattern=""
    for(j=1;j<=n-i;j++){
        pattern +=" "
    }
    for(k=1;k<=i;k++){
        pattern +=k
    }
    for(l=i-1;l>=1;l--){
        pattern +=l
    }
    console.log(pattern);
    
}


let no=20
for(i=1;j<=no;i++){
    let isPrime=true
    if(i<2){
        isPrime=false
    }
    for(j=2;j<i;j++){
        if(i%j==0){
            isPrime=false
        }

    }
  console.log(isPrime?`${i} prime`:`${i} not prime`);
    
}

function prime(num){
   let  isPrime=true

    if(num<2){
        return isPrime=false
    }
    for(i=2;i<num;i++){
        if(num%i==0){
            return isPrime=false
        }

  
    }
    return isPrime


}
console.log(prime(2));

let arr8=[1,2,3,3]
let duplicatedValue=[]
arr8.filter((a)=>
   ! duplicatedValue.includes(a)&&duplicatedValue.push(a)
)
console.log(duplicatedValue);


