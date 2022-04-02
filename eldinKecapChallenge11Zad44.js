let matrica = [[],[],[],[]];

for (let i = 0; i < matrica.length; i++) {
    for (let j = 0; j < 4; j++) {
        matrica[i][j] = Math.floor(Math.random()*(20-1)+1);     
    }    
}

console.table(matrica);