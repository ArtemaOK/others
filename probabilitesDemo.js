// Demo program for showing probabilities (POSITIVES vs NEGATIVES) in a certain amount of tests. An array called "list" will be created with the results, and then they'll be added to an object which will show the POSITIVES and NEGATIVES.

// Change the number below with the amount of tests you want. 
let testAmount = 1000;
// Change the number below with the theorical probability (between 1 y 100) of a negative.
let negProbability = 99;

let count = 0;
let number = 0;
let list = [];
let object = { POSITIVES: 0, NEGATIVES: 0 };

while (count < testAmount) {
    number = Math.floor(Math.random() * 100) + 1;
    if (number > negProbability) {
        list.push('POSITIVES');
    } else {
        list.push('NEGATIVES');
    }
    count += 1;
}
// This loop will add the results to the object:
for (const result of list) {
    // The first part of the next line specifies the KEY and the second part specifies its' VALUE:
    object[result] = object[result] += 1;
}
// The next lines show the amount of POSITIVEs and NEGATIVEs.
console.log('POSITIVES:', object.POSITIVES);
console.log('NEGATIVES:', object.NEGATIVES);