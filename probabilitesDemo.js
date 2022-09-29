// Demo program for showing probabilities (POSITIVE vs NEGATIVE) in a certain amount of tests.
let count = 0;
let number = 0;
let list = [];
let object = { POSITIVE: 0, NEGATIVE: 0 };
// The number below specifies the amount of tests. 
while (count < 1000) {
    number = Math.floor(Math.random() * 100) + 1;
    // The number below specifies the theorical probability (between 1 y 100) of a NEGATIVE.
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
// The next lines show the amount of POSITIVEs and NEGATIVEs.
console.log('POSITIVE:', object.POSITIVE);
console.log('NEGATIVE:', object.NEGATIVE);