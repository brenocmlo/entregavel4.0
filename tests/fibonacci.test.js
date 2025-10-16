const gerarFibonacci = require('../funcoes/fibonacci');

test('gera os primeiros 8 números de Fibonacci', () => {
  const { resultado } = gerarFibonacci(8);
  expect(resultado).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
