import React, {useRef, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'
const WelcomeScreen = ({children}) => {
    const myRefDiv = useRef(null)
    const [vanta,setVanta] = useState(0)

    useEffect(() => {
        console.log("myRefDiv.current", myRefDiv.current)
        if(!vanta){
          setVanta(1)
          //activo efecto de nubes 
          Clouds({
            THREE,
            el: myRefDiv.current
          })
        }
        return () => {
          if (vanta){
            vanta.destroy()
             }
        }
    }, [vanta])
  return (
    <div className="full" ref={myRefDiv}>
      {children}
      </div>
  )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node
}

export default WelcomeScreen