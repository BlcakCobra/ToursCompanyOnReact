import React from 'react'
import NavBar from '../NavBar/NavBar'

export default function Blog(props) {
  return (
    <>
    <div className='blogBoxOne' style={{backgroundImage:`url(${props.globalImg[4]})`}}>
      <NavBar globalImg={props.globalImg} navbar={props.navbar}/>
    </div>
    </>
    )
}
