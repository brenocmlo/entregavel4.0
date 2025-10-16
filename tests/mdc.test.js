const calcularMDC = require('../funcoes/mdc');

test('MDC de 48 e 18 deve ser 6', () => {
  const { resultado } = calcularMDC(48, 18);
  expect(resultado).toBe(6);
});
