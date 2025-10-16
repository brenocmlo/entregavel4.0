function quickSort(arr) {
    const passos = [];
    const arrayOriginal = [...arr];
  
    function particionar(array, baixo, alto) {
      const pivo = array[alto];
      let i = baixo - 1;
      for (let j = baixo; j < alto; j++) {
        if (array[j] <= pivo) {
          i++;
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      [array[i + 1], array[alto]] = [array[alto], array[i + 1]];
      return i + 1;
    }
  
    function quickSortHelper(array, baixo, alto) {
      if (baixo < alto) {
        const indicePivo = particionar(array, baixo, alto);
        passos.push(`Particionado com pivô ${array[indicePivo]} no índice ${indicePivo}`);
        quickSortHelper(array, baixo, indicePivo - 1);
        quickSortHelper(array, indicePivo + 1, alto);
      }
    }
  
    quickSortHelper(arr, 0, arr.length - 1);
    passos.push(`Array original: [${arrayOriginal}]`);
    passos.push(`Array ordenado: [${arr}]`);
  
    return { resultado: arr, passos };
  }
  
  module.exports = quickSort;
      