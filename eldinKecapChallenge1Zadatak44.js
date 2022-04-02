let arr = new Array(20);
for(let i = 0 ; i < arr.length ; i++ ){
    arr[i] = Math.floor(Math.random()*(100-1)+1) ;
}
let count = 0;
for(let i of arr){
    
console.log(`Na indexu ${count} je broj : ${i}`);
count++;
}