const soma = require('../funcoes/somatorio');

test('soma os números corretamente', () => {
  const { resultado } = soma([1, 2, 3, 4]);
  expect(resultado).toBe(10);
});
