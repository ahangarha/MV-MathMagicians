import calculate from './calculate';

describe('AC button', () => {
  test('AC button with no previous input', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const expected = {
      total: null,
      next: null,
      operation: null,
    };

    const result = calculate(obj, 'AC');

    expect(result).toEqual(expected);
  });

  test('AC button with some previous input', () => {
    const obj = {
      total: '15',
      next: '6',
      operation: '+',
    };
    const expected = {
      total: null,
      next: null,
      operation: null,
    };

    const result = calculate(obj, 'AC');

    expect(result).toEqual(expected);
  });
});
