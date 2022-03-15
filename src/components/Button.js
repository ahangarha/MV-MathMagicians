import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { value, onClick } = props;

  let className = /[0-9.]/.test(value) ? 'btn' : 'btn btn-operation';
  className += value === '0' ? ' btn-0' : '';

  return (
    <button
      className={className}
      onClick={() => onClick(value)}
      type="button"
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => null,
};
