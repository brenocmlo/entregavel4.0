function gerarFibonacci(n) {
    const passos = [];
  
    if (n < 2) {
      return { resultado: [], passos: ['n deve ser maior que 1'] };
    }
  
    const sequencia = [0, 1];
    passos.push('F(0) = 0, F(1) = 1');
  
    for (let i = 2; i < n; i++) {
      const proximo = sequencia[i - 1] + sequencia[i - 2];
      sequencia.push(proximo);
      passos.push(`F(${i}) = F(${i - 1}) + F(${i - 2}) = ${proximo}`);
    }
  
    return { resultado: sequencia, passos };
  }
  
  module.exports = gerarFibonacci;
  