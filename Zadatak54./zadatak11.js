function ispisTabMnozenja (){
    let arr = []; 
    let arr2d = [];
    
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            arr[i] = i*j;          
        }        
        arr2d.push(arr);
    }
    console.table(arr2d);
}
ispisTabMnozenja();