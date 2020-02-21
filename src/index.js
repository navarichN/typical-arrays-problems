
exports.min = function min (array) {
    if(!array || array.length < 1){
        return 0;
    }
    if(array.length < 1){
        return 0;
    }
    for(let i = 0; i < array.length; i++){
        array.sort((a, b) => b - a);
        if(i === array.length - 1){
            return array[i];
        }
    }
}

exports.max = function max (array) {
    if(!array || array.length < 1){
        return 0;
    }
    for(let i = 0; i < array.length; i++){
        array.sort((a, b) => b - a);
    }
    return array[0];
}

exports.avg = function avg (array) {
    if(!array || array.length < 1){
        return 0;
    }
    let a = 0;
    for(let i = 0; i < array.length; i++){
       a = a + parseInt(array[i]);
    } 
    a = a / array.length ;
return a;
}
