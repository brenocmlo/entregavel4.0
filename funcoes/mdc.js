function calcularMDC(a, b) {
    const passos = [];
    const originalA = a, originalB = b;
  
    passos.push(`Calculando MDC(${a}, ${b}) pelo algoritmo de Euclides`);
    while (b !== 0) {
      const resto = a % b;
      passos.push(`${a} = ${b} * ${Math.floor(a / b)} + ${resto}`);
      a = b;
      b = resto;
    }
  
    passos.push(`MDC(${originalA}, ${originalB}) = ${a}`);
    return { resultado: a, passos };
  }
  
  module.exports = calcularMDC;
  