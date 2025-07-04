let string="archa"
console.log(string.split('').reverse().join(''));

//factorial

fact=1;
for(i=1;i<=5;i++){
    fact*=i
}
console.log(fact);


//fibonacci
let a=0;
let b=1
console.log(a);
console.log(b);
for(i=1;i<=5;i++){
    c=a+b
    console.log(c);
    a=b
    b=c
    
}

//second largest

let arr1=[1,4,50,90]
let array=

    arr1.sort((a,b)=>b-a)
  
console.log(array[1]);

//duplicates

let arr2=[1,1,4,50,90]
let newArray=[]

    arr2.forEach((a)=>{
        if(!newArray.includes(a)){
            newArray.push(a)

        }
    })

console.log(newArray);




