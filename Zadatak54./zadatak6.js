function flatArr (mat2d){
   let arr = [];
   let br = 0;
   for(let i = 0 ; i < mat2d.length ; i++){
       for(let j = 0 ; j < mat2d[i].length;j++ ){
           arr[br]=mat2d[i][j];
           br++;
        }
   }
   return arr;
}
let arr2d = [[1,2,3],[4,5,6],[7,8,9]];
console.log(flatArr(arr2d));