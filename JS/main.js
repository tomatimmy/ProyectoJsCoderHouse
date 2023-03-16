const formulario = document.getElementById("formulario");

class Calculadora {
    constructor(capital, interes, periodo) {
        this.capital = capital;
        this.interes = interes;
        this.periodo = periodo;
    }
}

fetch('opciones.json')
    .then(response => response.json())
    .then(data => {
        const datalist = document.getElementById('opciones');
        data.forEach(item => {
            const opcion = document.createElement('option');
            opcion.text = item.text;
            datalist.appendChild(opcion);
        });
    })


arrayValores = [];
arrayResultados = [];

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const capitalInicial = document.getElementById("capitalInicial");
    const tasaInteres = document.getElementById("tasaInteres");
    const periodo = document.getElementById("periodo");

    const calcular = new Calculadora(capitalInicial.value, tasaInteres.value, periodo.value);
    arrayValores.push(calcular);
    localStorage.setItem("Valores", JSON.stringify(arrayValores));

    const calculoIntComp = function () {
        let k = parseInt(calcular.capital);
        let i = parseInt(calcular.interes);
        let n = parseInt(calcular.periodo);
        return k * Math.pow(1 + i / 100, n);
    }

    let final = calculoIntComp();
    final = final.toFixed(2);
    arrayResultados.push(final);

    const divResultado = document.getElementById('resultado');

    if (calcular.capital !== '' && calcular.interes !== '' && calcular.periodo !== '') {
        Toastify({
            text: "CATculanding...",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "gray",
            }
        }).showToast();
        divResultado.innerHTML = `<p>Bueno, si me haces caso y no gastas en tonterías como Samu, con $${calcular.capital}
        Samuelines de inversión incial, en ${calcular.periodo} años, a una tasa de interés del ${calcular.interes}%, vas
        a tener: $${final} Samuelines. Es decir, vas a seguir siendo pobre, pero no tanto. Gracias por participar.</p>`;
        verHistorial.style.display = 'block';
    } else {
        divResultado.innerHTML = `<p>Por favor rellená todos los campos para poder realizar el cálculo en forma eficiente.</p>`;
        Toastify({
            text: "TE FALTAN VALORES AMIGO!",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "gray",
            }
        }).showToast();
        arrayResultados = [];
    }

    formulario.reset();
})

const restablecer = document.getElementById('restablecer');

restablecer.addEventListener("click", () => {
    Toastify( {
        text: "Restableciendo...",
        duration: 3000, 
        gravity: "top",
        position: "right", 
        style: {
            background: "gray",
        }
    }).showToast();
    const divResultado = document.getElementById('resultado');
    const divHistorial = document.getElementById('divHistorial');
    const tituloHistorial = document.getElementById('tituloHistorial');
    divResultado.innerHTML = '';
    divHistorial.innerHTML = '';
    tituloHistorial.style.display = 'none';
    localStorage.clear();
    arrayValores = [];
})

const verHistorial = document.getElementById('verHistorial');
const divHistorial = document.getElementById('divHistorial');
const tituloHistorial = document.getElementById('tituloHistorial');

verHistorial.addEventListener("click", () => {
    tituloHistorial.style.display = 'block';
    divHistorial.innerHTML = '';
    let historial = JSON.parse(localStorage.getItem('Valores'));
    contadorPosicion = 1;
    i = 0;
    historial.forEach(valor => {
        const div = document.createElement('div');
        div.innerHTML = `<p>El valor ${contadorPosicion} de capital ingresado ha sido $${valor.capital},
        en un periodo de ${valor.periodo} años, a una tasa de interés del ${valor.interes}%, obteniendo un resultado final de $${arrayResultados[i]} Samuelines.</p>`;
        contadorPosicion++;
        i++;
        divHistorial.appendChild(div);
    })
    divHistorial.style.display = 'flex';
})

