
function soma(numeros) {
    const inicio = performance.now();
    let soma = 0;
    let operacoes = 0;
    const passos = [];

    passos.push(`Iniciando somatório de ${numeros.length} números`);
    
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
        operacoes++;
        passos.push(`Passo ${i + 1}: ${soma - numeros[i]} + ${numeros[i]} = ${soma}`);
    }

    const fim = performance.now();
    return {
        resultado: soma,
        passos: [...passos, `Soma final: ${soma}`],
      
    };
}

module.exports =  soma ;


