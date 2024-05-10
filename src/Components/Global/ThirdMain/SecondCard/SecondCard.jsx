import React from 'react';

export default function SecondCard(props) {
  return (
    <>
        {props.secSectionCard.map((el, cardIndex) => {
            return(
                <div key={cardIndex}  className = {el ? "sec_card": "" }>
                  <img src={el.img} alt="" className='sec_card_img'/>
                  </div>
            );
        })}
    </>
  );
}