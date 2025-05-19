for(i=1;i<=5;i++){
    let pattern=""
    for(j=1;j<=i;j++){
        pattern +=i
    }
    console.log(pattern);
    
}

// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1  

for(i=1;i<=5;i++){
    let pattern=""
    for(j=i;j>=1;j--){
        pattern +=j+" "
    }
    console.log(pattern);
    
}

//   *  
//  * *  
// * * *  

let rows=3
for(i=1;i<=rows;i++){
    let pattern=" "
    for(j=1;j<=rows-i;j++){
        pattern +=" "
    }
    for(k=1;k<=i;k++){
        pattern +="* "
    }
    console.log(pattern);
    
}

for(i=1;i<=5;i++){
    pattern=""
    for(j=i;j>=1;j--){
        pattern +=j%2
    }
    console.log(pattern);
    
}
num=1
for(i=1;i<=5;i++){
    pattern=""
    for(j=1;j<=i;j++){
        pattern +=num+" "
        num++
    }
    console.log(pattern);
    
}

// for(i=1;i<=5;i++){
//     pattern=""
//     for(j=1;j<=i;j++){
//         pattern +=j+" "
        
//     }
//     console.log(pattern);
    
// }
let row=5
for(i=1;i<=row;i++){
    pattern=""
    for(j=1;j<=row-i;j++){
        pattern +=" "
        
    }
    for(k=1;k<=i;k++){
        pattern +=k+""
    }
      for (let l = i - 1; l >= 1; l--) {
        pattern += l;
    }
    console.log(pattern);
    
   
    
}

