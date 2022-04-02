let fibonacci = [0,1];
let broj = 4;
for(let i = 2 ; i < 20 ; i++ ){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log(fibonacci);

function parni(fibonacci){
    
    for(let i = 1 ; i < fibonacci.length ; i++ ){

        if( fibonacci[i] % 2 === 0 ){   //Ne mogu da napravim da ubaci i 610 u niz probo sam vise nacina slicnih ovome ali nije mi radilo (!fibonacci[i]%10===0 && fibonacci[i] % 2 === 0) 
          
           fibonacci.splice(i,1);
        }

        i++;
    }
};

parni(fibonacci);
console.log(fibonacci);