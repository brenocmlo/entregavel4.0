const contarNoIntervalo = require('../funcoes/contagem');

test('conta corretamente os números dentro do intervalo', () => {
  const { resultado, valores } = contarNoIntervalo([1, 5, 10, 15], 5, 12);
  expect(resultado).toBe(2);
  expect(valores).toEqual([5, 10]);
});
