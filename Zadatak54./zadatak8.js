//podjeli niz na dijelove ovisno o koliko dijelova se proslijedi u funkciju 
function podjelaNiza(arr,parts){
    let arr2d=[];
    let tempArr=[];  
    let br = 0 ;
    for(let i = 0; i < arr.length ; i++){
        tempArr[br] = arr[i]; 
        br++;
        if(br === parts){
            console.log(tempArr);
            arr2d.push(tempArr);
            br = 0;
            }
        }

    return arr2d;
}
console.log(podjelaNiza([1,2,3,4,5,6,7,8],3));