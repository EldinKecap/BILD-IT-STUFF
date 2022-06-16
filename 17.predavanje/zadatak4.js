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
    //ubacim u objekat sva slova
    for(let i of str){
        obj[i]=null;
    }
    let start=0;
    // console.log(obj)
    // dodjelim niz koji sadrzi prvi index i drugi index na kojem se pojavilo slovo
    next:
    for (const key in obj) {
        for (let i = 0; i < str.length; i++) {
            if (key === str[i]) {
                counter++
                // console.log(i)
                if (start === 0 && i!=0 && counter === 1) {
                    start = i ;
                    // console.log(start,key) 
                }
                if (counter===2) {
                    counter = 0;
                    obj[key]=[start,i];
                    start = 0;
                    continue next
                }
            }
            
        } 
        counter = 0;   
    }
    let min = Infinity;
    // odredim najmanji drugi index 
    for (const key in obj) {
        if(obj[key]!=null){
            if(obj[key][1]<min){
                min = obj[key][1];
                // console.log(key,obj[key][0],obj[key][1],min)
            }
        }
    }
    // brisem propertyje koji nisu sa najmanjim zadnjim indexom
    for (const key in obj) {
        if (obj[key]===null) {
            delete obj[key];
        }
        if (obj[key]!==undefined) {
            if (obj[key][1]!=min) {
                delete obj[key];
                
            }
        }
       
    }
    return obj
}
console.log(recurIndex('DXTDXTXDTXD'));
console.log(recurIndex("YXZXYTUVXWV")); 
console.log(recurIndex("YZTTZMNERXE"));
console.log(recurIndex("AREDCBSDERD"));
