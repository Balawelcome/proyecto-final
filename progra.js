// Función para Sumar y Dividir dos números
function sumarYDividir() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const suma = num1 + num2;
        const division = num2 !== 0 ? (num1 / num2).toFixed(2) : 'No se puede dividir entre cero';
        document.getElementById('result1').innerText = `Suma: ${suma} \n División: ${division}`;
    } else {
        document.getElementById('result1').innerText = 'Por favor, ingrese números válidos.';
    }
}

// Función para Sumar tres números
function sumaTresNumeros() {
    const num1 = parseFloat(document.getElementById('num3').value);
    const num2 = parseFloat(document.getElementById('num4').value);
    const num3 = parseFloat(document.getElementById('num5').value);

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        const suma = num1 + num2 + num3;
        document.getElementById('result2').innerText = `Suma: ${suma}`;
    } else {
        document.getElementById('result2').innerText = 'Por favor, ingrese números válidos.';
    }
}

// Función para Verificar Edad
function verificarEdad() {
    const edad = parseInt(document.getElementById('edad').value, 10);

    if (!isNaN(edad)) {
        const esMayorDeEdad = edad >= 18 ? 'Eres mayor de edad.' : 'Eres menor de edad.';
        document.getElementById('result3').innerText = esMayorDeEdad;
    } else {
        document.getElementById('result3').innerText = 'Por favor, ingresa una edad válida.';
    }
}

// Función para Verificar Notas
function verificarNotas() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && !isNaN(nota4)) {
        const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
        let calificacion;

        if (promedio >= 90) {
            calificacion = 'Excelencia';
        } else if (promedio >= 80) {
            calificacion = 'Muy Bueno';
        } else if (promedio >= 70) {
            calificacion = 'Bueno';
        } else {
            calificacion = 'Necesita Mejorar';
        }

        document.getElementById('result4').innerText = `Promedio: ${promedio.toFixed(2)} - Calificación: ${calificacion}`;
    } else {
        document.getElementById('result4').innerText = 'Por favor, ingresa todas las notas válidas.';
    }
}

// Función para Precio del Cine con descuento por edad
function precioCine() {
    const edad = parseInt(document.getElementById('edadCine').value, 10);

    if (!isNaN(edad)) {
        let precio = 10; // Precio base

        if (edad < 12) {
            precio -= 5; // Descuento para menores de 12 años
        } else if (edad >= 65) {
            precio -= 3; // Descuento para mayores de 65 años
        }

        document.getElementById('result5').innerText = `Precio del Cine: $${precio.toFixed(2)}`;
    } else {
        document.getElementById('result5').innerText = 'Por favor, ingresa una edad válida.';
    }
}

// Función para Imprimir números del 1 al 4
function imprimir1al4() {
    let resultado = '';
    for (let i = 1; i <= 4; i++) {
        resultado += i + ' ';
    }
    document.getElementById('result6').innerText = resultado;
}

// Función para Verificar si el número es mayor a 100
function mayorQue100() {
    const numero = parseFloat(document.getElementById('numMayor').value);

    if (!isNaN(numero)) {
        const mensaje = numero > 100 ? 'El número es mayor a 100.' : 'El número no es mayor a 100.';
        document.getElementById('result7').innerText = mensaje;
    } else {
        document.getElementById('result7').innerText = 'Por favor, ingresa un número válido.';
    }
}

// Función para Verificar si el número es menor a 100
function menorQue100() {
    const numero = parseFloat(document.getElementById('numMenor').value);

    if (!isNaN(numero)) {
        const mensaje = numero < 100 ? 'El número es menor a 100.' : 'El número no es menor a 100.';
        document.getElementById('result8').innerText = mensaje;
    } else {
        document.getElementById('result8').innerText = 'Por favor, ingresa un número válido.';
    }
}

// Función para Mostrar Números Pares
function numerosPares() {
    let resultado = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            resultado += i + ' ';
        }
    }
    document.getElementById('result9').innerText = resultado;
}

// Función para Sumar números del 1 al 100
function suma1al100() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    document.getElementById('result10').innerText = `Suma de 1 a 100: ${suma}`;
}

// Función para Imprimir números del 1 al 10
function imprimir1al10() {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += i + ' ';
    }
    document.getElementById('result11').innerText = resultado;
}

// Función para Calculadora Digital
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value) || '';
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

// Función para Juego de Adivinanza
function adivinanza() {
    const adivinanza = parseInt(document.getElementById('guess').value, 10);
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;

    if (!isNaN(adivinanza)) {
        if (adivinanza === numeroSecreto) {
            document.getElementById('result13').innerText = `¡Correcto! El número secreto era ${numeroSecreto}.`;
        } else {
            document.getElementById('result13').innerText = `Incorrecto. El número secreto era ${numeroSecreto}.`;
        }
    } else {
        document.getElementById('result13').innerText = 'Por favor, ingresa un número válido.';
    }
}

// Función para Calculadora de Factoriales
function calcularFactorial() {
    const numero = parseInt(document.getElementById('factorialInput').value, 10);
    let resultado = 1;

    if (!isNaN(numero) && numero >= 0) {
        for (let i = 1; i <= numero; i++) {
            resultado *= i;
        }
        document.getElementById('result14').innerText = `Factorial de ${numero}: ${resultado}`;
    } else {
        document.getElementById('result14').innerText = 'Por favor, ingresa un número válido mayor o igual a 0.';
    }
}

// Función para Promedio de 4 Notas
function promedioNotas() {
    const nota1 = parseFloat(document.getElementById('nota5').value);
    const nota2 = parseFloat(document.getElementById('nota6').value);
    const nota3 = parseFloat(document.getElementById('nota7').value);
    const nota4 = parseFloat(document.getElementById('nota8').value);

    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && !isNaN(nota4)) {
        const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
        document.getElementById('result15').innerText = `Promedio de las notas: ${promedio.toFixed(2)}`;
    } else {
        document.getElementById('result15').innerText = 'Por favor, ingresa todas las notas válidas.';
    }
}
