function splitt(str){
    counterOtvorene = 0;
    counterZatvorene = 0;
    returnArr = [];
    start = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i]=='(') {
            counterOtvorene++;
        }else if(str[i]==')'){
            counterZatvorene++;
        }
        if(counterOtvorene === counterZatvorene){
            console.log(counterOtvorene,counterZatvorene)
            returnArr.push(str.slice(start,i+1));
            start=i+1;
            counterOtvorene = 0;
            counterZatvorene = 0;
        }
    }
    return returnArr;
}
console.log(splitt('(()())()(())'));
