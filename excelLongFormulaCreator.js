// Program built for creating Excel formulas for various sheets on a single file. Sheets must be numbered and ordered for this to work (Sheet1, Sheet2...), and the formula in the first sheet is used as the model (x) for creating the new formula (y), iterating and replacing the specified value (count) until reaching the value specified on line 5.
// Example with iterations on Excel formula to sum A1 + B1 in 31 sheets.
let x = '+Hoja1!A1+Hoja1!B1';
let y = '';
let count = 1;
while (count < 31) {
    x = x.replaceAll(`Hoja${count}`, `Hoja${count + 1}`);
    count += 1;
    y = y + x;
};
y;