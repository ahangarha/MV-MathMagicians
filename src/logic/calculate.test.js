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

describe('Number buttons', () => {
  test('press number no previous input', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const expected = {
      total: null,
      next: '5',
    };

    const result = calculate(obj, '5');

    expect(result).toEqual(expected);
  });

  test('press number no previous operation', () => {
    const obj = {
      total: null,
      next: null,
      operation: '+',
    };
    const expected = {
      total: null,
      next: '5',
      operation: '+',
    };

    const result = calculate(obj, '5');

    expect(result).toEqual(expected);
  });
});

describe('press =', () => {
  test('with no previous input', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const expected = {};

    const result = calculate(obj, '=');

    expect(result).toEqual(expected);
  });

  test('with previous input', () => {
    const obj = {
      total: '3',
      next: '2',
      operation: '+',
    };
    const expected = {
      total: '5',
      next: null,
      operation: null,
    };

    const result = calculate(obj, '=');

    expect(result).toEqual(expected);
  });
});
