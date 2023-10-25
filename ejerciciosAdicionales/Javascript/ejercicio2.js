// Ejercicio 2.
// Implemente su propia función find

const array = ["Bebo", "Benjishenshi", "Santi", "Malcolm", "Juansito", "Rosco"];

function buscoAJuansito(a) {
    let encontrado;
    for (let e of array) {
        if (e == "Juansito") {
            encontrado = e;
            break;
        }
    }
    return encontrado;
}

console.log("Pica " + buscoAJuansito(array));
