import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Blog from './Blog/Blog'
export default function Global(props) {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home footLogo={props.footLogo} cardsData={props.cardsData } miniText={props.miniText}  globalImg={props.globalImg} navbar={props.navbar} titles={props.titles} secSectionCard={props.secSectionCard} languages={props.languages}     sliderImages={props.sliderImages}/>}/>
        <Route path='/Home' element={<Home footLogo={props.footLogo} cardsData={props.cardsData } miniText={props.miniText}  globalImg={props.globalImg} navbar={props.navbar} titles={props.titles} secSectionCard={props.secSectionCard} languages={props.languages}     sliderImages={props.sliderImages}/> }/>
        <Route path='/Blog' element={<Blog globalImg ={props.globalImg} navbar={props.navbar}/>}/>
    </Routes>
    </>
  )
}
