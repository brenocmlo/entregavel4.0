const quickSort = require('../funcoes/quicksort');

test('ordena corretamente o array', () => {
  const { resultado } = quickSort([5, 3, 8, 1]);
  expect(resultado).toEqual([1, 3, 5, 8]);
});
