/*Escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.*/

const gifts1 = [3, 1, 2, 3, 4, 6, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)

function prepareGifts(gifts) {
    let sinRepetir = [...new Set(gifts)].sort((a, b) => a - b);
    return sinRepetir;
}

console.log(preparedGifts1) // [1, 2, 3, 4, 5]