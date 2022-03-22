import React from 'react';
import './Quote.css';

export default function Quote() {
  return (
    <blockquote>
      Mathematics is the most beautiful and most powerful creation of the human spirit.
      <span className="quote-ref">
        — Stefan Banach, Polish mathematician
      </span>
    </blockquote>
  );
}
