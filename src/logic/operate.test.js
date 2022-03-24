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
