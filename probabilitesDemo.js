// Programa de demostración de probabilidad de que un hecho ocurra (POSITIVE) o no (NEGATIVE) en una cierta cantidad de pruebas.
let count = 0;
let number = 0;
let list = [];
let object = { POSITIVE: 0, NEGATIVE: 0 };
// El número de la línea debajo indica la cantidad de pruebas a realizar. 
while (count < 1000) {
    number = Math.floor(Math.random() * 100) + 1;
    // El número de la línea debajo indica la probabilidad teórica (expresada entre 1 y 100) de que un hecho NO ocurra. Si ocurre, resultará POSITIVE.
    if (number > 99) {
        list.push('POSITIVE');
    } else {
        list.push('NEGATIVE');
    }
    count += 1;
}
for (const value of list) {
    object[value] = object[value] += 1;
}
// Las siguientes líneas muestran la cantidad de positivos y negativos que surgen de la prueba.
console.log('POSITIVE:', object.POSITIVE);
console.log('NEGATIVE:', object.NEGATIVE);