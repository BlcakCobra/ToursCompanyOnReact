import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { globalImg,secSectionCard,miniText,navbar, titles ,cardsData,footLogo,languages,sliderImages } from '../db.js'
import { BrowserRouter } from 'react-router-dom'
import i18n from '../i18next.js'
// import { Provider } from 'react-redux'

import './index.css'
// import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  <Suspense>
  <BrowserRouter>
    <App cardsData={cardsData}
    globalImg={globalImg}
    navbar={navbar}
    miniText={miniText}
    titles={titles}
    secSectionCard={secSectionCard}
    footLogo={footLogo}
    languages={languages}
    sliderImages={sliderImages}
          />
  </BrowserRouter>
  </Suspense>
  // </Provider>
)
