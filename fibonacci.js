
const prompt = require('prompt-sync')({ sigint: true });

function verificarNumeroFibonacci() {
    const numero = Number(prompt("Digite um número para verificar se ele pertence à sequência de Fibonacci: "));

    if(numero < 0) { return `O número: ${numero}, não é um número válido para a sequência de Fibonacci.` }
    
    if(numero === 0 || numero === 1) {
        return `O número: ${numero}, pertence a sequência de Fibonacci.`;
    }
    
    let valorAnterior = 0, valorAtual = 1;
    
    while(valorAtual <= numero) {
        if(valorAtual === numero) {
            return `O número: ${numero}, pertence a sequência de Fibonacci.`;
        };

        const proximoValor = valorAnterior + valorAtual;
        valorAnterior = valorAtual;
        valorAtual = proximoValor;

    }

    return `O número: ${numero}, não pertence a sequência de Fibonacci.`;
};

console.log(verificarNumeroFibonacci());