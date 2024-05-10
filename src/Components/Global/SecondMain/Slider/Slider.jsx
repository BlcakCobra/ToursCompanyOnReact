import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Slider({ sliderImages, activeId, thisSlide }) {
  const { t } = useTranslation();


  return (
    <>
      <div className='slider'>
        {sliderImages.map((el, index) => (
          <div className={`slide ${index === activeId ? "activee" : ""}`} key={index} onClick={() => { thisSlide(index);}}>
            <div className="slide-content">
              <img src={el.img} alt={el.alt} />
              <div className="slide-text">
                <h2>{t(`MoreSecondMain.slide.${index}.title`)}</h2>
                <p>{t(`MoreSecondMain.slide.${index}.description`)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}