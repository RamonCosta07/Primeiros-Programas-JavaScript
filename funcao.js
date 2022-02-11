function soma(a, b) {
    return a + b;
}

function returnEvenValues(array) {
    let evensNums = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            evensNums.push(array[i]);
        }
    }
    return console.log(evensNums);
}

let array = [2, 4, 5, 7, 1, 6, 9];

console.log(soma(7, 8));
console.log("\nNúmeros pares: ");
returnEvenValues(array);
