import React from 'react';

export default function Footer(props) {
  return (
    <div className='footer'>
      <div className="contact">
        <div className="line_right"></div>
        <div className="logos">
          {props.footLogo.map((logo, index) => {
            return (
                <a href={logo.href}  key={index}>
                  <img src={logo.logo} alt={`Logo ${index}`} className='logos_img' />
                </a>
            );
          })}
          </div>
        <div className="line_left"></div>
      </div>
      <div className="progInfo">
        <h3 className='progInfo_h3'>{props.titles[4]}</h3>
      </div>
    </div>
  );
}