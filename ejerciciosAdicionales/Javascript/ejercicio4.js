// Ejercicio 4
// Implemente su propia función reduce

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumoTodo(a, valorInicial) {
    a.forEach((e) => {
        valorInicial = valorInicial + e;
    });
    return valorInicial;
}

console.log(sumoTodo(array, 0));
