import CardRow from "./CardRow";
import React from 'react'

export default function CardContainer(props) {

    return (
      <div className="col">
        <CardRow cards={props.cardsData.slice(0, 2)} />
        <CardRow cards={props.cardsData.slice(2, 4)} />
      </div>
    );
  }