import Background from "../components/background";
import Heading from "../containers/heading"
import bgimage from '../media/background.png'
import React from 'react'
import '../styles/global.css'

export default function Landing() {
  return (
    
    <>
    <Background imageobject = {bgimage}/>
    <Heading imageobject = {[['']]}/>
  
    </>


  )
}
