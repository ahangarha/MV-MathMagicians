import React, { useEffect, useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';
import './Calculator.css';

export default function Calculator() {
  const [calcObj, setCalcObj] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [math, setMath] = useState('hi');

  const onClick = (buttonName) => {
    setCalcObj({ ...calcObj, ...calculate(calcObj, buttonName) });
  };

  useEffect(() => {
    const { total, next, operation } = calcObj;

    const newMath = [' '];
    [total, operation, next].forEach((item) => {
      if (item !== null) newMath.push(item);
    });

    // if we only have result, no math should be shown
    if (newMath.length === 2 && total !== null) {
      newMath.pop();
    }

    setMath(newMath.join(' '));
  }, [calcObj]);

  const result = calcObj.total || calcObj.next;

  const buttonsTitles = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', '⨉',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  return (
    <div className="calculator-tab-wrapper">
      <div className="calculator-info">
        <h2>
          Let&apos;s do some math!
        </h2>
        <p>
          Use this calculator to do basic math operations.
          If you find any issue or bug, please report it to
          the project repository by opening a new&nbsp;
          <a href="https://github.com/ahangarha/MV-MathMagicians/issues" target="_blank" rel="noopener noreferrer">issue</a>
          .
        </p>
      </div>
      <div className="calculator-wrapper">
        <div className="result-section">
          {Number(result)}
          <div className="math">{math}</div>
        </div>
        {
          buttonsTitles.map((btnTitle) => (
            <Button value={btnTitle} onClick={onClick} key={btnTitle} />
          ))
        }
      </div>
    </div>
  );
}
