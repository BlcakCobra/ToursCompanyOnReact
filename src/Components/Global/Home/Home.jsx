import React, { useEffect, useRef } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ThirdMain from '../ThirdMain/ThirdMain';
import  SecondMain  from '../SecondMain/SecondMain';
import { useState } from 'react';
export default function Home(props) {
  const scrollRef = useRef(null);
  const scrollRefMain = useRef(null)
  const scrollRefSecondMain = useRef(null)

  const handleScroll = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollMain = () => {
    scrollRefMain.current.scrollIntoView({ behavior: 'smooth' });
  }
  const handleScrollSecondMain = () => {
    scrollRefSecondMain.current.scrollIntoView({ behavior: 'smooth' });
  }
  const [lang, setLangId] = useState(+window.localStorage.getItem('id') || 0);
  const changeLangId = (id) => {
    window.localStorage.setItem('id', id);
    setLangId(id);
  }

  return (
    <>
      <Header
        cardsData={props.cardsData}
        miniText={props.miniText}
        globalImg={props.globalImg}
        navbar={props.navbar}
        titles={props.titles}
        languages={props.languages}
        handleScroll={handleScroll}
        scrollRef={scrollRef}
        lang = {lang}
        setLangId = {setLangId}
        changeLangId = {changeLangId}
      />
      <Main scrollRef={scrollRef}
        globalImg={props.globalImg}
        miniText={props.miniText}
        titles={props.titles}
        scrollRefMain={scrollRefMain}
        handleScrollMain={handleScrollMain} />
        <SecondMain
        globalImg={props.globalImg}
        sliderImages={props.sliderImages}
        scrollRefMain={scrollRefMain}
        handleScrollSecondMain={handleScrollSecondMain}
        />
    <ThirdMain
    globalImg={props.globalImg}
    titles={props.titles}
    miniText={props.miniText}
    secSectionCard={props.secSectionCard}
    scrollRefSecondMain={scrollRefSecondMain}
    />
    <Footer 
    footLogo={props.footLogo}       
    titles={props.titles}/>
    </>
  );
}