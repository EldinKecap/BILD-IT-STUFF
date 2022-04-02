let kocka1 ;
let kocka2 ;
let kocka3 ;
let i = 0 ;

while(true){
    i++;
    kocka1 = Math.ceil(Math.random()*6);
    kocka2 = Math.ceil(Math.random()*6);
    kocka3 = Math.ceil(Math.random()*6);
    
    if(kocka1 === kocka2 && kocka2 === kocka3){
        console.log(`U ${i}. bacanju dobiju se brojevi ${kocka1},${kocka2},${kocka3}`);
        break;
    }
    
}