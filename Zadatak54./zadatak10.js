function ispisPiramide(brojRedova){
    let str = '';
    let arr= [];
    brKolona = brojRedova
    for (let i = 1; i < brKolona+1; i++) {
        arr.push(i);   
    }
    for (let j = 0; j < brojRedova; j++) {     
        // if(brKolona < brojRedova){
        //     let spaceNum = brojRedova - brKolona;
        //     for (let i = 0; i < spaceNum; i++) {
        //         arr.push(' ');                            
        //     }
        // }
        brKolona -= 1;
        str = String(arr);
        str = str.replace(/,/g,' ');        
        console.log(str);
        arr[j]= ' ';
    }

}
ispisPiramide(5);