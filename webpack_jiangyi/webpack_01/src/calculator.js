function add(a,b){
    return parseFloat(a) + parseFloat(b);
}

function substract(a,b){
    return parseFloat(a) - parseFloat(b);
}

function multiply(a,b){
    return parseFloat(a) * parseFloat(b);
}

function divide(a,b){
    return parseFloat(a) / parseFloat(b);
}

module.exports = {
    add:add,
    substract:substract,
    multiply:multiply,
    divide:divide
}