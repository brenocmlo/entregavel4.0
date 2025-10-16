function ehPrimo(n) {
    const passos = [];
  
    if (n < 2) {
      return { numero: n, passos: [`${n} é menor que 2, portanto não é primo`] };
    }
  
    if (n === 2) {
      return { numero: n, passos: ['2 é o único número primo par'] };
    }
  
    if (n % 2 === 0) {
      return { numero: n, passos: [`${n} é par e maior que 2, portanto não é primo`] };
    }
  
    passos.push(`Verificando divisibilidade de 3 até √${Math.floor(Math.sqrt(n))}`);
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) {
        passos.push(`${n} não é primo (divisível por ${i})`);
        return { numero: n, passos };
      }
      passos.push(`${n} não é divisível por ${i}`);
    }
  
    passos.push(`${n} é primo`);
    return { numero: n, passos };
  }
  
  module.exports = ehPrimo;
  