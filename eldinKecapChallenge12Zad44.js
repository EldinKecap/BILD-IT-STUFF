let matrica = [[],[],[],[]] ;
let suma = 0 ;
for (let i = 0; i < matrica.length; i++) {
   for (let j = 0; j < 4; j++) {
       matrica[i][j] = Math.floor(Math.random()*(20-1)+1); 
   }
}

for (let i = 0; i < matrica.length; i++) {
    for (let j = 0; j < matrica[i].length; j++) {
         if((i+j)%2 != 0 ){
            suma += matrica[i][j];
            
         }
    }
 }

 
 console.log(`Suma brojeva sa indexima cija je suma neparan broj je ${suma}`)