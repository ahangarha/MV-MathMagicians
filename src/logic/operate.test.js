import operate from './operate';

describe('Plus Operation', () => {
  test('1 + 2 = 3', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('-1 + -2 = -3', () => {
    expect(operate(-1, -2, '+')).toBe('-3');
  });
});

describe('minus Operation', () => {
  test('10 - 2 = 8', () => {
    expect(operate(10, 2, '-')).toBe('8');
  });

  test('0 - 2 = -3', () => {
    expect(operate(0, 2, '-')).toBe('-2');
  });
});
describe('times Operation', () => {
  test('2 * 4 = 8', () => {
    expect(operate(2, 4, '⨉')).toBe('8');
  });

  test('0 * 2 = 0', () => {
    expect(operate(0, 2, '⨉')).toBe('0');
  });

  test('2 * 0 = 0', () => {
    expect(operate(2, 0, '⨉')).toBe('0');
  });
});
describe('divide Operation', () => {
  test('4 / 2 = 2', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });

  test('0 / 2 = 0', () => {
    expect(operate(0, 2, '÷')).toBe('0');
  });

  test('2 / 0 = Error Message', () => {
    expect(operate(2, 0, '÷')).toBe('Can\'t divide by 0.');
  });
});
