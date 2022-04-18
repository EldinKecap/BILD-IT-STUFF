function ispisTabMnozenja (){
    let arr = []; 
    let row = '';
    
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            arr.push(i*j);          
        }   
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]<10){
                let temp = ' ' + arr[i];
                arr[i]= temp;
            }
            
        } 
        row = String(arr);
        row = row.replace(/,/g,' ');
        arr = [];  
        console.log(row);
    }
    
}
ispisTabMnozenja();