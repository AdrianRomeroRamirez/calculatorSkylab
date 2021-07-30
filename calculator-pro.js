// Ejecuta la función calcular hasta que que el usuario cancele
do {

    calcular();

} while(confirm("Deseas seguir introduciendo números para calcular?"))

// Mensaje de despedida
alert("Gracias por usar nuestra aplicación");


// Función que pide un numero y avisa y reitera hasta que no se introduzca
function preguntarNum() {
    do {
        // Pide el numero
        var num = prompt("Introduce un número");

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

    let num1 = preguntarNum();
    let num2 = preguntarNum();

    // Si no se introduce ningún número avisa de ello
    if (num1 === null && num2 === null) {

        alert("No se ha introducido ningún número");

        // Si el primer parámetro está vacío te calcula la raiz cuadrada del segundo
    } else if (num1 === null) {

        // Mensaje por pantall
        alert("La raíz cuadrada de " + num2 + " es " + calcSqrt(num2));

        // Igual pero con el segundo parámetro
    } else if (num2 === null) {

        // Mensaje por pantallagit a
        alert("La raiz cuadrada de " + num1 + " es " + calcSqrt(num1));

        // Si los dos parámetros tienen números
    } else {

        // Calcula los resultados
        let sum = calcSum(num1, num2).toFixed(3);
        let rest = calcRest(num1, num2).toFixed(3);
        let mult = calcMult(num1, num2).toFixed(3);
        let div = calcDiv(num1, num2).toFixed(3);

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
function calcSum(num1, num2) {
    return Number(num1) + Number(num2);
}

// Devuelve la resta de los números
function calcRest(num1, num2) {
    return num1 - num2;
}

// Devuelve la multiplicación de los números
function calcMult(num1, num2) {
    return num1 * num2;
}

// Devuelve la división de los números
function calcDiv(num1, num2) {
    return num1 / num2;
}

// Muestra los resultados por pantalla
function mostrarResult(results) {

    // Mensaje por pantalla
    alert("La suma es: " + results[0] +
        "\nLa resta es: " + results[1] +
        "\nLa multiplicación es: " + results[2] +
        "\nY la división es: " + results[3]);

}



