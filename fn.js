const fn=()=>{
    let val=10
    console.log(this.val);
    console.log(arguments);
    
    
}
fn()

function far(){
    console.log("ho");
    console.log(arguments);
    
    
}
// far()


(function(){
    console.log("hip");
    
})()



function outer(){
    count=0
    return function inner(){
        count++
        console.log(count);
        
    }
}
const inc=outer()
inc()



const array=[1,3,4,5,]
array.forEach((a)=>console.log(a))


console.log(array.map((a)=>a*2));

console.log(array.find((a)=>a%2==0));


