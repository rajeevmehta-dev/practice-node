// let inputData = [1,2,3,4,-1];
// function getSum(arr) {
//     return arr.reduce((acc, pre) => {
//          acc *= pre;
//          return acc;
//      }, 1);
// }
//
// function getResult(param) {
//     return param.map((item,index, arr) => {
//         let ar = [...arr];
//         ar.splice(index,1);
//      //   console.log(ar);
//         return getSum(ar);
//     })
// }
//
// console.log(getResult(inputData));


// Input
//
// Output [-24, -12, -8, -6, 24]


Array.prototype.forEach = function (callBack) {
    for (let i = 0; i < this.length;
         i++
    ) {
        callBack(this[i], i, this);
    }
};

    [1, 3, 4].forEach((item) => {
    console.log(item);
})

