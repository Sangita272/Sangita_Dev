import React, { useState } from 'react'
import { SketchPicker } from 'react-color'
import ntc from "ntc";

const Index = () => {
  const [color, setColor] = useState("White");
  const [colorName, setColorName] = useState('')
  const [showColor, setShowColor] = useState(false)

  const convertToName = (val) => {
    const n_match = ntc.name(val);
    const n_rgb = n_match[0]; // RGB value of closest match
    const n_name = n_match[1]; // Text string: Color name
    const n_exactmatch = n_match[2];
    console.log('name====', n_match, n_rgb, n_name,n_exactmatch)
    setColor(n_name)
    setColorName(n_rgb)
  }


  return (
    <>
      <button onClick={() => setShowColor(showColor => !showColor)}>
        {showColor ? "close color picker" : "pick a color"}
      </button>
      {
        showColor && <SketchPicker color={color} onChange={updated => convertToName(updated.hex)} />
      }
      <h2>you picked {color} {colorName}</h2>
      <div style={{height:100, width:100, borderColor:'#000', borderWidth:1, backgroundColor: colorName}}>

      </div>
    </>
  )
}

export default Index