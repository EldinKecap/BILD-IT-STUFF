let arr = new Array(20);
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random()*(100-1)+1);
}
console.log(`Prvi niz :`);
console.table(arr);

for (let i = 0; i < arr.length; i++) {
    
    let tempOldValue = arr[i];
    let rand = Math.floor(Math.random()*(arr.length - 1)+ 1);
    let tempRandValue = arr[rand];
    arr[rand] = tempOldValue;    
    arr[i] = tempRandValue;
}
console.log(`Izmjesan niz :`);
console.table(arr);