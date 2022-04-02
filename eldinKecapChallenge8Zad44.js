let str = `Make it work, make it right, make it fast.`;
let correctedStr = [];

for( let i = 0 ; i < str.length ; i++){
    if(str.charAt(i) != 'a' && str.charAt(i) != 'A'&& str.charAt(i) != 'e'&& str.charAt(i) != 'E'&& str.charAt(i) != 'i'&& str.charAt(i) != 'I'&& str.charAt(i) != 'o'&& str.charAt(i) != 'O'&& str.charAt(i) != 'u'&& str.charAt(i) != 'U'){
       correctedStr.push(str.charAt(i));
    }
}
str = correctedStr.toString();
console.log(str);