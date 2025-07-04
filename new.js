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

    let 

}





