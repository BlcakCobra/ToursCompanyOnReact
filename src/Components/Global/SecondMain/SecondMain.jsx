import React from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from './IconButton/IconButton';
import Slider from './Slider/Slider';
import { useState } from 'react';
import ScrollBtnSecMain from '../ScrollBtn/ScrollBtnSecMain';

export default function SecondMain({ globalImg, sliderImages,scrollRefMain,handleScrollSecondMain }) {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(0);

  const prev = () => {
    if (activeId > 0) {
      setActiveId(activeId - 1);
    }
  };
  const isOpen = (index) =>{
    if(activeId !== index){
      
    }
  }
  const next = () => {
    if (activeId < sliderImages.length - 1) {
      setActiveId(activeId + 1);
    }
  };

  const thisSlide = (index) => {
    setActiveId(index);
  };
  return (
    <div className='secondMain' ref={scrollRefMain}>
      <ScrollBtnSecMain handleScrollSecondMain={handleScrollSecondMain}/>
      <div className="secondMain_text">
        <div>
          <h1 className='secondMain_h1'>{t("MoreSecondMain.title")}</h1>
          <p className='secondMain_p'>{t("MoreSecondMain.description")}</p>
        </div>
        <div className="actions">
          <IconButton direction="left" symbol="&#60;" disable={activeId === 0} onClick={prev} />
          <IconButton direction="right" symbol="&#62;" disable={activeId === sliderImages.length - 1} onClick={next} />
        </div>
      </div>
      <Slider sliderImages={sliderImages} activeId={activeId} thisSlide={thisSlide}/>
    </div>
  );
}