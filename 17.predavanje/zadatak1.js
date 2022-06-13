// 1. Kreirajte funkciju koja vraća broj ponavljanja elemenata u nizu. Ova 
//funkcija vraca objekt, gdje su ključevi jedinstveni elementi, a vrijednosti 
//su broj ponavljanja svakog elements. 
// PRIMJERI:

// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

// getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

// getFrequencies([]) ➞ {}
function getFrequencies(arr){
    let obj = {};
    let letter = '';
    let counter = 0;
    while(arr.length!=0){
        letter = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if(letter === arr[i]){
                counter++;
                arr.splice(i,1);
                i--;
                // console.log(counter)
            }
        }
        obj[letter]=counter;
        counter=0;
        // console.log(arr);
    }
    return obj;
}

console.log(getFrequencies(["A", "B", "A", "A", "A"]));
console.log(getFrequencies([true, false, true, false, false]));
console.log(getFrequencies([1, 2, 3, 3, 2]));
