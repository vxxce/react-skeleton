import React, { useState } from 'react'
import './App.css'

const Something = ({aProp}) => {
  console.log(aProp)
  return null
}

const App = () => {
  const [h1, setH1] = useState("Boiler & Plate")

  const does = () => {
    h1 === "Boiler & Plate"
      ? setH1("Plate & Boiler")
      : setH1("Boiler & Plate")
  }
  
  return (
    <>
      <h1 onClick={does}>{h1}</h1>
      <div className="ball"></div>
      <Something aProp={"some data"} />
    </>
  )
}

export default App
