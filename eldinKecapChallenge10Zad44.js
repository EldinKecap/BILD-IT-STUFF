let A = 45362792 ;
let B = A.toString() ;
let temp = [];
for(let i = 0 ; i < B.length ; i++){
    temp[B.length-1 - i] = B.charAt(i);
}
for(let i = 0 ; i < temp.length ; i++ ){
 temp[i] = Number(temp[i]);   
}

for (let i = 0; i < temp.length; i++) {
    if(temp[i] % 2 === 0){
        temp.splice(i,1);
        i--;
    }
}

B = +temp.toString().replace(/,/g, '');

console.log(`Broj A je ${A} .`,`Broj B je ${B}.`,`
Razlika broja A i B  je : ${A - B}`);
