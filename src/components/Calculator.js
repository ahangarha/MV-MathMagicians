import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

export default function Calculator() {
  const [calcObj, setCalcObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const onClick = (buttonName) => {
    setCalcObj({ ...calcObj, ...calculate(calcObj, buttonName) });
  };

  const result = calcObj.next || calcObj.total;

  const buttonsTitles = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', '⨉',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  return (
    <div className="calculator-wrapper">
      <div className="result-section">
        {Number(result)}
      </div>
      {
        buttonsTitles.map((btnTitle) => (
          <Button value={btnTitle} onClick={onClick} key={btnTitle} />
        ))
      }
    </div>
  );
}
