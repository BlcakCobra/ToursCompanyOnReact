import React from 'react';
import Card from './Card';

export default function CardRow({ cards }) {
  return (
    <div className="col-row">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}