function kalk(num1,op,num2){
    switch (op){
        case '-':
        return num1 - num2;
        
        case '+':
        return num1 + num2;
        
        case '/':
        return num1 / num2;
        
        case '*':
        return num1 * num2;
        
        default:
        return 'Nije operator ili nije podrzan';
        
    }
}
console.log(kalk(4,'-',2));
