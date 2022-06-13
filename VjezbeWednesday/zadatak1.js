function decode(str) {
    let abeceda = 'abcdefghijklmnopqrstuvwxyz';
    let cipher = [16,17,18,1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    abeceda = abeceda.split('');
    console.log(abeceda.length);
    str=str.toLowerCase();
    console.log(str)
    let code = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < abeceda.length; j++) {
            if (str[i]===abeceda[j]) {
                code.push(cipher[j]);
            }
        }
        if (str[i]===' ') {
            code.push(5);
        }
        
    }
    return code;
}
console.log(decode('something challenging'));
