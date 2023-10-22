import React from 'react'
import '../styles/global.css'

export default function Background(props) {
    const Backgroundstyle = {
        position: 'absolute',
        width: '100%',  // Ensures the image takes the full width of the container
        height: '100%', // Ensures the image takes the full height of the container
        objectFit: 'cover',
        zIndex: '-1',
        opacity : '0.45',
     }; 
  
    return (
    <>
  
    <img style={ Backgroundstyle } src = {props.imageobject} alt = "background">
    
    </img>
    
    </>
  )
}
