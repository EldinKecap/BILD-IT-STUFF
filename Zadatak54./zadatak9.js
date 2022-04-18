function provjeraDaLiNizSadrziBroj(arr,num){
    for (let i = 0; i < arr.length; i++) {
    if(arr[i]===num){
        return true;
    }
    }
    return false;
}
console.log(provjeraDaLiNizSadrziBroj('sdfas','a'));