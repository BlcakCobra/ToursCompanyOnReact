import Global from './Components/Global/Global'



import "./responsive.css"
import './App.css'


function App(props) {
  return (
    <>  
    <Global cardsData={props.cardsData }
    miniText={props.miniText}
    globalImg={props.globalImg }
    navbar={props.navbar} 
    titles={props.titles}
    secSectionCard={props.secSectionCard}
    footLogo={props.footLogo}
    languages={props.languages}
    sliderImages={props.sliderImages}
        />
    </>
  )
}

export default App
