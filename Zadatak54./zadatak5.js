let fakt = 1;
function faktorijel (num){
    fakt *= num ;
    if(num === 1 ){
        return fakt;
    }
    return faktorijel(num-1);
}
console.log(faktorijel(5));