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

    // let 

}
//reverse an array
let arr=[3,4,5,6]
let revArray=[]
for(i=arr.length-1;i>=0;i--){
    revArray.push(arr[i])


}
console.log(revArray);
console.log(arr.reverse());

//reverse an obj

let word="archa"
let reversedObj=""
for(i of word){
    reversedObj=i+reversedObj

}
console.log(reversedObj);
console.log(word.split('').reverse().join(""));

//// Remove duplicates from an array.
let arr1=[1,2,3,4,4,5]
let duplicate=[]
for(i=0;i<=arr1.length-1;i++){
    if(!duplicate.includes(arr1[i])){
        duplicate.push(arr1[i])
    }
    
}
console.log(duplicate);

//remove duplicate from an object

//second largest number

let arr2=[1,2,3,4,5,8]
let sorted=arr2.sort((a,b)=>b-a)
console.log(sorted[1]);







