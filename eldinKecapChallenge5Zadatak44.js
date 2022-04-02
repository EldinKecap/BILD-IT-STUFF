let arr = new Array(20);
for (let i = 0; i < arr.length; i++) {
    arr[i]= Math.floor(Math.random()*( 100 - 1 ) + 1 );   
}
console.log(`Prvi niz :`);
console.table(arr);

// arr.reverse();


    let tempArr = [];
    for( let i = 0 ; i < arr.length ; i++ ){  
     tempArr [i] = arr[i];
    }
    for( let i = 0 ; i < arr.length ; i++ ){  
        arr [i] = tempArr[tempArr.length-1-i];
    }

console.log(`Obrnuti niz :`);
console.table(arr);