// Ejercicio 3.
// Implemente su propia función filter

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtroPares(a) {
    let filtrado = [];
    a.forEach((e) => {
        if (e % 2 == 0) {
            filtrado.push(e);
        }
    });
    return filtrado;
}

console.log(filtroPares(array));
