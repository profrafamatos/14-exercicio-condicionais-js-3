// Não faça nada neste arquivo
const classificaNumero = require('./index');

test('verifica se 5 é positivo', () => {
  expect(classificaNumero(5)).toBe('Positivo');
});

test('verifica se -3 é negativo', () => {
  expect(classificaNumero(-3)).toBe('Negativo');
});

test('verifica se 0 é zero', () => {
  expect(classificaNumero(0)).toBe('Zero');
});
