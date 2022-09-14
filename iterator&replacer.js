// Programa para iterar y reemplazar un valor hasta llegar al valor indicado en la línea 4. Colocar en la variable "x" el string a iterar y reemplazar. Se creará un único string en la variable "y" con todas las iteraciones. Ejemplo con iteraciones sobre fórmula de Excel para abarcar las celdas indicadas en 31 hojas.
let x = '=Hoja1!A1+Hoja1!B1+';
let y = '';
let count = 1;
while (count < 31) {
    x = x.replaceAll(`Hoja${count}`, `Hoja${count + 1}`);
    count += 1;
    y = y + x;
};
y.slice(0, -1);