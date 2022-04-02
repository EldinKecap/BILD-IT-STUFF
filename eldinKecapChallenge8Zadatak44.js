let str = `Make it work, make it right, make it fast.`;
console.log(`String "${str}" sa uklonjenim samoglasnicima :`);
// console.log(str.replace(/a|e|i|o|u/g,''));
let correctedStr = [];

for( let i = 0 ; i < str.length ; i++){
    if(str.charAt(i) != 'a' && str.charAt(i) != 'A'&& str.charAt(i) != 'e'&& str.charAt(i) != 'E'&& str.charAt(i) != 'i'&& str.charAt(i) != 'I'&& str.charAt(i) != 'o'&& str.charAt(i) != 'O'&& str.charAt(i) != 'u'&& str.charAt(i) != 'U'){
       correctedStr.push(str.charAt(i));
    }
}

str = "";

for( let i = 0 ; i < correctedStr.length ; i++){
    str = str.concat(correctedStr[i]);
    
}

console.log(str);


