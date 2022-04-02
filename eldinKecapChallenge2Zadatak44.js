let arr = new Array(20);
let suma = 0 ;
for(let i = 0 ; i < arr.length ; i++ ){
    arr[i] = Math.floor(Math.random()*(100-1)+1) ;
}
for(let i = 0 ; i < arr.length ; i++){
    if(i%2===0){
        suma += arr[i];
       
    }
}
console.log(`Suma svih brojeva sa parnim indexom je ${suma}`);