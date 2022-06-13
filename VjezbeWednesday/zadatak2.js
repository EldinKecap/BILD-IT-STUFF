function maxNumber(num){
    let arrNum = String(num);
    arrNum = arrNum.split('');
    length = arrNum.length
    let arr=[];
    for (let i = 0; i <  length; i++) {
        // console.log(...arrNum)
        // console.log()
        // arr.push(Math.max(...arrNum))
        // arrNum.splice(arrNum.splice(arrNum.indexOf(String(Math.max(...arrNum))),1));
        
    }
    return arr;
    // arrNum = arrNum.split('');
    // arrNum.sort().reverse();
    // arrNum = arrNum.join(',');
    // console.log(arrNum)
    // return Number(arrNum.replace(/,/g,''));
}
console.log(maxNumber(673442));