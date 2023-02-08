//Saludamos al usuario y preguntamos si quiere usar la herramienta obligandolo a darnos un input
let saludar = prompt('Bienvenido a CATculcalo! Si querés usar la calculadora de interés compuesto, escribí "cat". Si querés salir, escribí "bye". Algo tenés que escribir, loro: ');


//Declaramos funciones para comenzar el proceso y para saludar al usuario en caso que decida irse

let capitalInicial = function() {
    let capital = prompt('Para comenzar a ayudarte, decime con cuánto querés empezar a ahorrar: ');
    while (true) {
    if ((capital == null) || (capital.toLowerCase() == 'salir')) {
        raton();
        break;
    } else if (parseInt(capital) > 0) {
        arrayParametros.push(capital);
        tasaInteres();
        break;
    } else {
        capital = prompt('Tiene que ser un número, y tiene que ser mayor que cero.. "genio".\n\nSi querés seguir siendo pobre, escribí salir, presiona ESC o dale a cancelar. Amargo.');
    }
    }
}

let tasaInteres = function() {
    let tasaInteres = prompt('A qué tasa de interés querés que haga mi magia? \nNo pongas el % y que sea un número positivo, crack: ');
    while (true) {
    if ((tasaInteres == null) || (tasaInteres.toLowerCase() == 'salir')) {
        raton();
        break;
    } else if (parseInt(tasaInteres) > 0) {
        arrayParametros.push(tasaInteres);
        periodo();
        break;
    } else {
        tasaInteres = prompt('Se nota que no entendés bien el espanish.\nUN NUMERO POSITIVO SIN SIGNO "%". \n\nSi querés seguir siendo pobre, escribí salir, presiona ESC o dale a cancelar. Amargo.');
    }
    }
}

let periodo = function() {
    let periodo = prompt('En cuántos años querés que te haga millonario?');
    while (true) {
    if ((periodo == null) || (periodo.toLowerCase() == 'salir')) {
        raton();
        break;
    } else if (parseInt(periodo) > 0) {
        arrayParametros.push(periodo);
        andaPallaBobo;
        break;
    } else {
        periodo = prompt('Que difícil me la estás haciendo.\nAÑOS NABO!\nES UN PERIODO DE TIEMPO!!! \n\nSi querés seguir siendo pobre, escribí salir, presiona ESC o dale a cancelar. Amargo.');
    }
    }
}


//Declaramos función hippie
raton = () => alert('Nos vemos en Disney, ratónnn!');

arrayParametros = [];

//Declaramos función para analizar el interés compuesto
//TODOS: "-Ay, un economista, seguro que es el alma de la fiesta.."

//Fórmula interés compuesto (obtenida en gerencie.com)
// K * (1+i) ^ n
// K = capital inicial
// i = interés (porcentual)
// n = número de períodos (en este caso, años)

// En un futuro no tan lejano, la calculadora va a permitir:
// -Ingresar un refuerzo mensual de capital
// -Mostrar los intereses obtenidos en forma mensual, trimestral, semestral y anual :)

let andaPallaBobo = function() {    
    let k = arrayParametros[0];
    let i = arrayParametros[1];
    let n = arrayParametros[2];
    return k * Math.pow(1 + i / 100, n);
}



//Comenzamos con el analisis logico

while (true) {
    if (saludar == null || saludar.toLowerCase() == 'bye') {
        raton();
        break;
    } else if (saludar.toLowerCase() === 'cat') {
        capitalInicial();
        break;
    } else {
        saludar = prompt('No entendiste, no? "cat" para empezar, "bye" para salir. Genio.');
    }
}

if (arrayParametros.length == 3) {
let final = andaPallaBobo()
alert('Bueno, si me hacés caso y no gastás compulsivamente como Samu:\n\nCon una inversión de $' + arrayParametros[0] + ' schmeckles, en ' + arrayParametros[2] + ' años, vas a tener $' + final.toFixed(2) + ' Schmeckles. Lo que factura Messi por minuto más o menos.\n\nANDA PALLA BOBO!!!');
}