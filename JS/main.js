class Calculadora {
    constructor(capital, interes, periodo) {
        this.capital = capital;
        this.interes = interes;
        this.periodo = periodo;
    }
}


const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const capitalInicial = document.getElementById("capitalInicial");
    const tasaInteres = document.getElementById("tasaInteres");
    const periodo = document.getElementById("periodo");

    const calcular = new Calculadora(capitalInicial.value, tasaInteres.value, periodo.value);
    const calcularJSON = JSON.stringify(calcular);
    localStorage.setItem("Valores", calcularJSON);
    // Por el workflow de la app, no resulta necesario recuperar el Json, será limpiada al realizar
    // un nuevo cálculo o al presionar restablecer.


    let andaPallaBobo = function() {
        let k = parseInt(calcular.capital);
        let i = parseInt(calcular.interes);
        let n = parseInt(calcular.periodo);
        return k * Math.pow(1 + i / 100, n);


    }

    let final = andaPallaBobo();
    final = final.toFixed(2);

    Toastify( {
        text: "CATculado!",
        duration: 3000, 
        gravity: "top",
        position: "right", 
        style: {
            background: "gray",
        }
    }).showToast();
    
    const divResultado = document.getElementById('resultado');

    if (calcular.capital !== '' && calcular.interes !== '' && calcular.periodo !== '') {
        divResultado.innerHTML = `<p>Bueno, si me haces caso y no gastas en tonterías como Samu, con $${calcular.capital}
        Samuelines de inversión incial, en ${calcular.periodo} años, a una tasa de interés del ${calcular.interes}%, vas
        a tener: $${final} Samuelines. Es decir, vas a seguir siendo pobre, pero no tanto. Gracias por participar.</p>`;
    } else {
        divResultado.innerHTML = `<p>Por favor rellená todos los campos para poder realizar el cálculo en forma eficiente.</p>`;
        Toastify( {
            text: "TE FALTAN VALORES AMIGO!",
            duration: 3000, 
            gravity: "top",
            position: "right", 
            style: {
                background: "gray",
            }
        }).showToast();
        localStorage.clear();
    }

    formulario.reset();
})

const restablecer = document.getElementById('restablecer');

restablecer.addEventListener("click", () => {
    const divResultado = document.getElementById('resultado');
    divResultado.innerHTML = '';
    localStorage.clear();
    Toastify( {
        text: "Restableciendo...",
        duration: 3000, 
        gravity: "top",
        position: "right", 
        style: {
            background: "gray",
        }
    }).showToast();
})
