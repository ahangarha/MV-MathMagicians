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
    this.setState({
      calcObj: calculate(calcObj, buttonName),
    });
  }

  render() {
    const { calcObj } = this.state;
    return (
      <div className="calculator-wrapper">
        <div className="result-section">
          {Number(calcObj.total)}
        </div>

        <Button value="AC" onClick={this.onClick} />
        <Button value="+/-" onClick={this.onClick} />
        <Button value="%" onClick={this.onClick} />
        <Button value="÷" onClick={this.onClick} />
        <Button value="7" onClick={this.onClick} />
        <Button value="8" onClick={this.onClick} />
        <Button value="9" onClick={this.onClick} />
        <Button value="⨉" onClick={this.onClick} />
        <Button value="4" onClick={this.onClick} />
        <Button value="5" onClick={this.onClick} />
        <Button value="6" onClick={this.onClick} />
        <Button value="-" onClick={this.onClick} />
        <Button value="1" onClick={this.onClick} />
        <Button value="2" onClick={this.onClick} />
        <Button value="3" onClick={this.onClick} />
        <Button value="+" onClick={this.onClick} />
        <Button value="0" onClick={this.onClick} />
        <Button value="." onClick={this.onClick} />
        <Button value="=" onClick={this.onClick} />
      </div>
    );
  }
}
