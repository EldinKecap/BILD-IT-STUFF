let karte = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
let brojKarata = 52;
let znak = ['List', 'Srce', 'Kocka', 'Mak'];
let ruka = new Array(6);
let deck = [];
let card;
let j = 0;
let x = 0;

for (let i = 0; i < brojKarata; i++) {

    deck[i] = znak[j] + ' ' +karte[x];
    x++;
    if (x === 13) {
        j++;
        x = 0;
    }
}

let i = 0;
while(i<6){
    
    card = deck[ Math.floor((Math.random() * deck.length))]
    
    if( ruka[0]!=card && ruka[1]!=card && ruka[2]!=card && ruka[3]!=card && ruka[4]!=card && ruka[5]!=card && ruka[6]!=card ){
        ruka[i]=card;
        i++;
    }
}   
console.log(`Vasa ruka je : `);
for(let a of ruka){
    console.log(a);
}
