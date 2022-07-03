function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 !== 0;
}

const meuArray = [1, 34, 23, 12, 6, 3,];

console.log(filtraPares(meuArray));