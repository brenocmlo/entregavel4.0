function contarNoIntervalo(conjuntoDados, inicio, fim) {
    const passos = [];
    const dentroDoIntervalo = [];
  
    passos.push(`Contando valores entre ${inicio} e ${fim}`);
    for (const valor of conjuntoDados) {
      if (valor >= inicio && valor <= fim) {
        dentroDoIntervalo.push(valor);
        passos.push(`${valor} está no intervalo`);
      } else {
        passos.push(`${valor} está fora do intervalo`);
      }
    }
  
    return {
      resultado: dentroDoIntervalo.length,
      valores: dentroDoIntervalo,
      passos
    };
  }
  
  module.exports = contarNoIntervalo;
  