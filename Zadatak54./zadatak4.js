function absolutna(num){
    if(num<0){
       return num*=(-1);
    }
    return num;
}

console.log(absolutna(-3));