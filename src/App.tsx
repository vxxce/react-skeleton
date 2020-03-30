import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [h1, setH1] = useState("SKELETON")

  const does = () => {
    h1 === "SKELETON"
      ? setH1("NOTELEKS")
      : setH1("SKELETON")
  }
  
  return (
    <>
      <h1 onClick={does}>{h1}</h1>
      <div className="time-is-a-flat-circle"></div>
    </>
  )
}

export default App
