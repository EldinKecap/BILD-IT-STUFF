// 4. Kreirajte funkciju koja identificira prvi karakter koji se ponavlja u proslijedjenom stringu. 
//Vraća karakter koji se ponavlja sa indeksom gde se prvi put pojavio i sledećim indeksom gde se ponovo 
//pojavljuje – kao objekat; ili kao prazan objekt ako je proslijeđeni argument ili null, undefined, 
//prazan niz ili ne postoji karakter koji se ponavlja.
// PRIMJERI:

// recurIndex("DXTDXTXDTXD") ➞ {"D": [0, 3]}Ï

// recurIndex("YXZXYTUVXWV") ➞ {"X": [1, 3]}

// recurIndex("YZTTZMNERXE") ➞ {"T": [2, 3]}

// recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}

// recurIndex("") ➞ {}

// recurIndex(null) ➞ {}
function recurIndex(str){
    let obj ={};
    let counter = 0;
    if (!str) {
        return obj;
    }
    for(let i of str){
        obj[i]=null;
    }
    let start=0;
    // console.log(obj)
    for (const key in obj) {
        for (let i = 0; i < str.length; i++) {
            if (key === str[i]) {
                counter++
                if (start === 0) {
                    start = i  
                }
                if (counter===2) {
                    counter = 0;
                    obj[key]=[start,i];
                }
            }
            
        }    
    }
    return obj
}
console.log(recurIndex('DXTDXTXDTXD'))
// console.log(recurIndex("YXZXYTUVXWV")); 
// console.log(recurIndex("YZTTZMNERXE"));
// console.log(recurIndex("AREDCBSDERD"));
