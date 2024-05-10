import React, { useEffect, useRef } from 'react';
import SecondCard from './SecondCard/SecondCard'
import { useTranslation } from 'react-i18next';

export default function ThirdMain(props) {
  const {t} = useTranslation()
  return (
    <div style={{backgroundImage:`url(${props.globalImg[3]})`}} className='thirdMain' ref={props.scrollRefSecondMain} >
      <h1 className='thirdMain_h1'>{t("SecondMain.title")}</h1>
          <div className='secondCard'>
      <SecondCard secSectionCard={props.secSectionCard} />
    </div>
    </div>
  )
}
