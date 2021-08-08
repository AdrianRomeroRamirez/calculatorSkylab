// Ejecuta la función calcular hasta que que el usuario cancele
do {

    calcular();

} while(confirm("Deseas seguir introduciendo números para calcular?"))

// Mensaje de despedida
alert("Gracias por usar nuestra aplicación");


// Función que pide un numero y avisa y reitera hasta que no se introduzca
function preguntarNum() {
    let num;
    do {
        // Pide el numero
        num = prompt("Introduce un número");

        if (isNaN(num)) {
            alert("No es un número");
        }

    // No sale hasta que se introduzca un número
    } while (isNaN(num))
    return num;
}

// Función que calcula los resultados dependiendo si se introduce 0, 1 o 2 números
function calcular() {

    let results = [];
    let numeros = [];

    do {

        let num = preguntarNum();

        numeros.push(num);

    } while (confirm("Introducir más números?"))

    // filtra el array para eliminar los hecos que contengan null
    let numerosFiltrados = numeros.filter(el => el != null);

    // Si no se introduce ningún número avisa de ello
    if (numerosFiltrados.length === 1 && numerosFiltrados[0] === null) {

        alert("No se ha introducido ningún número");

        // Si el primer parámetro está vacío te calcula la raiz cuadrada del segundo
    } else if (numerosFiltrados.length === 1) {

        // Mensaje por pantall
        alert("La raíz cuadrada de " + numerosFiltrados[0] + " es " + calcSqrt(numerosFiltrados[0]));

        // Si tiene más parámetros
    } else {

        // Calcula los resultados
        let sum = calcSum(numerosFiltrados).toFixed(3);
        let rest = calcRest(numerosFiltrados).toFixed(3);
        let mult = calcMult(numerosFiltrados).toFixed(3);
        let div = calcDiv(numerosFiltrados).toFixed(3);

        

        // Los introduce en el array
        results.push(sum, rest, mult, div);

        // Los muestra por pantalla
        mostrarResult(results);

    }

}

// Devuelve la raiz cuadrada del número pasado por parámetro
function calcSqrt(num) {
    return Math.sqrt(num).toFixed(3);
}

// Devuelve la suma de los números
function calcSum(numeros) {

    let sum = 0;

    numeros.forEach(element => sum = sum + Number(element))

    return sum;

}

// Devuelve la resta de los números
function calcRest(numeros) {

    let rest = 0;

    numeros.forEach(element => rest = rest - element)

    return rest;
}

// Devuelve la multiplicación de los números
function calcMult(numeros) {

    let mult = 1;

    numeros.forEach(element => mult = mult * Number(element))

    return mult;
}

// Devuelve la división de los números
function calcDiv(numeros) {

    let div = 1;

    numeros.forEach(element => div = Number(element) / div)

    return div;
}

// Muestra los resultados por pantalla
function mostrarResult(results) {

    // Mensaje por pantalla
    alert("La suma es: " + results[0] +
        "\nLa resta es: " + results[1] +
        "\nLa multiplicación es: " + results[2] +
        "\nY la división es: " + results[3]);

}



