
// rest
function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
    // arguments.map
    // arguments
    // return a + b;
}

console.log(somar(10, 20, 30))

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30))

//spread
const numeros = [1,2,3,4]
console.log(...numeros)

const timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'sao paulo']
const timesDeFutebolDoRio = ['vasco', 'bota fogo', 'flamengo', 'fluminense']

// const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);

const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];

console.log(timesDeFutebol)

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna);

// desestruturação
// const motorDoCarroDaAnna = carroDaAna.motor;
const { motor: motorDoCarroDaAnna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaAnna);
console.log(motorDoCarroDaJulia);

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)