const lista = [
    {
        nome: "Sabonete",
        valor: 5
    },

    {
        name: 'Café',
        valor: 9
    },

    {
        name: 'Oleo',
        valor: 5
    }
]

const saldoDiponivel = 25;

function calculaSaldo(saldoDiponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log(`Rodada `, index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.valor;
    }, saldoDiponivel)
};

console.log(calculaSaldo(saldoDiponivel, lista));

