const ehPrimo = require('../funcoes/isPrime');

test('17 deve ser primo', () => {
  const { numero } = ehPrimo(17);
  expect(numero).toBe(17);
});

test('18 não deve ser primo', () => {
  const resultado = ehPrimo(18);
  expect(resultado.passos.some(p => p.includes('não é primo'))).toBeTruthy();
});
