import React from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcObj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(buttonName) {
    const { calcObj } = this.state;
    const newCalcObj = { ...calcObj, ...calculate(calcObj, buttonName) };

    this.setState({
      calcObj: newCalcObj,
    });
  }

  render() {
    const { calcObj } = this.state;
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
            <Button value={btnTitle} onClick={this.onClick} key={btnTitle} />
          ))
        }
      </div>
    );
  }
}
