import React from 'react';
import NavBar from '../NavBar/NavBar';
import CardContainer from './Card/CardContainer';
import ScrollBtn from '../ScrollBtn/ScrollBtn';
import { useTranslation } from 'react-i18next';


export default function Header(props) {
  const {t} = useTranslation()
  return (
    <header>
      <div className="header_img" style={{ backgroundImage: `url(${props.globalImg[0]})`}} >
        <NavBar navbar={props.navbar}
        globalImg={props.globalImg}
        lang={props.lang}
        setLangId={props.setLangId} 
        languages={props.languages}
        changeLangId={props.changeLangId}
        />
        <div className='title_card'>
        <div className="titlebox">
          <h1 className="titlebox_h1">{t("Header.Tours")}</h1>
          <p className="titlebox_p">{t("Header.ToursTitle.title1")}</p>
          <ScrollBtn miniText={props.miniText} handleScroll={props.handleScroll} scrollRef={props.scrollRef}/>
        </div>
        <CardContainer cardsData={props.cardsData} />
        
        </div>
      </div>
    </header>
  );
}