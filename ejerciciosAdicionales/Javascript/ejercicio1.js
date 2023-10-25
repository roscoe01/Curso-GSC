// Ejercicio 1.
// Implemente su propia función map

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumar1(numero) {
    return numero + 1;
}

function map(array) {
    let newArray = [];
    array.forEach((bebo) => {
        newArray.push(sumar1(bebo));
    });
    console.log(newArray);
    return newArray;
}

map(array);
