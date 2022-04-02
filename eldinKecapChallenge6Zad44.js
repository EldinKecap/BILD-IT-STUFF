let broj = 6;
let faktorijel = broj;
for( let i = broj ; i > 1 ; i-- ){
    faktorijel *= ( i - 1 );
}

console.log(`Faktorijel broja ${broj} je broj ${faktorijel}`);