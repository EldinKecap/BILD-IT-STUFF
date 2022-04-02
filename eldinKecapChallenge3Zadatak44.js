let arr = new Array(20);
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random()*(100-1)+1);
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    
   let a = arr[i];
    
    arr[Math.floor(Math.random()*(arr.length - 1)+ 1)] = a;    
}
console.log(arr);