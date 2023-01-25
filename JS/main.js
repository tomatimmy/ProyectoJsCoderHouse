//Saludamos al usuario y preguntamos si quiere usar la herramienta obligandolo a darnos un input
 let saludar = prompt('Bienvenido a CATculcalo! Si querés usar la calculadora de interés compuesto, escribí "cat". Si querés salir, escribí "bye". Algo tenés que escribir, loro: ');
 

 //Declaramos funciones para comenzar el proceso y para saludar al usuario en caso que decida irse
 let capitalInicial = function() {
    let capital = parseInt(prompt('Para comenzar a ayudarte, decime con cuánto querés empezar a ahorrar: '));
    if (isNaN(capital)) {
        console.log(capital)
        raton();
    } else if (capital > 0) {
        andaPallaBobo();
    } else {      
        while (capital <= 0) {
            capital = parseInt(prompt('Podrías intentar con un número mayor que cero, nabo?'));
            if (isNaN(capital)) {
                raton();
            } else if (capital > 0) {
            andaPallaBobo();
            }
        }
    }
}


 //Declaramos función hippie
 raton = () => alert('Nos vemos en Disney, ratonnn!');


 //Declaramos función para analizar el interés compuesto (pendiente)
 //Fórmula interés compuesto (obtenida en gerencie.com)
 // K * (1+i) ^ n
 // K = capital inicial
 // i = interés
 // n = número de períodos
 let andaPallaBobo = function() {
    //la variable capital ya la tomo de la función capitalInicial (local)
    tasaInteres = parseInt(prompt('Ingrese la tasa de interés sin el signo %: '));
    periodos = parseInt(prompt('Ingrese los períodos: '));
    alert('Calculando.. Pi por radio al cuadrado, mas la hipotenusa.. el cateto.. ANDA PALLA BOBO!');

 }

 //Comenzamos con el analisis logico
 if (saludar === 'cat') {
    capitalInicial();
 } else if (saludar == null || saludar == 'bye') {
    raton();
 } else if (saludar !== 'cat') {
    while ((saludar === '') || (saludar !== 'bye')) {
        let saludar = prompt('No entendiste, no? "cat" para empezar, "bye" para salir. Genio.');
        if (saludar === 'cat') {
            capitalInicial()
        } else if (saludar === 'bye' || saludar == null) {
            raton()
            break;
        }
    }
 }
