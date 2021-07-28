// Función que pide un numero y avisa y reitera hasta que no se introduzca
function preguntarNum() {
    do {
        // Pide el numero
        var num = prompt("Introduce un número");
        // No sale hasta que se introduzca un número

        if (isNaN(num)) {
            alert("No es un número");
        }

    } while (isNaN(num) || (num < 0))
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
        alert("La raíz cuadrada de " + num2 + " es " + Math.sqrt(num2).toFixed(3));

        // Igual pero con el segundo parámetro
    } else if (num2 === null) {

        // Mensaje por pantallagit a
        alert("La raiz cuadrada de " + num1 + " es " + Math.sqrt(num1).toFixed(3));

        // Si los dos parámetros tienen números
    } else {

        // Operaciones matemáticas
        let sum = Number(num1) + Number(num2);
        let rest = num1 - num2;
        let mult = num1 * num2;
        let div = num1 / num2;

        // Introducción al array
        results.push(Number(sum.toFixed(3)));
        results.push(Number(rest.toFixed(3)));
        results.push(Number(mult.toFixed(3)));
        results.push(Number(div.toFixed(3)));

        // Mensaje por pantalla
        alert("Se va a operar con los números " + num1 + " y " + num2 +
                 "\nLa suma de es: " + results[0] +
                 "\nLa resta es: " + results[1] + 
                 "\nLa multiplicación es: " + results[2] +
                 "\nY la división es: " + results[3]);

    }

}

calcular();