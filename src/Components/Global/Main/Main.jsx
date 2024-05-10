import React from 'react';
import ScrollBtnMain from '../ScrollBtn/ScrollBtnMain';
import { useTranslation } from 'react-i18next';
export default function Main(props) {
  const {t} = useTranslation()
  return (
    <div className='main' ref={props.scrollRef} >
      <div className="main_left" style={{backgroundImage: `url(${props.globalImg[2]})`}}>
        <div className="left_title">
        <h1 className='left_h1'>{t("Main.mainLeft.title")}</h1>
        </div>
      </div>
      <div className="main_right">
        <div className="right_title">
          <div className='right_title_box'>
          <h1 className="right_title_h1">{t("Main.mainRight.title")}</h1>
          <p className='right_title_p'>{t("Main.mainRight.description")}</p>
          </div>
          <ScrollBtnMain
            scrollRefMain={props.scrollRefMain}
            handleScrollMain={props.handleScrollMain}
            miniText={props.miniText}
          />
        </div>
      </div>
    </div>
  );
}