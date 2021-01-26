module.exports = function reversed (n) {
//   return Number((''+n).split('').reverse().join(''));
//    var arr = (''+n).split('');

//    if(arr[0] == '-'){
//        arr.splice(0,0);
//        arr.reverse();
//    } else{
//        arr.reverse();
//    }

//    return Number(arr);

return parseInt(n.toString().split("-").map(x=> x.split("").reverse().join("")).join(""));
}
