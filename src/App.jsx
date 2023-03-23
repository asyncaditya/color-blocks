import React, { useState, useEffect, useRef } from 'react'
import './App.css'


function App() {

  const appRef = useRef();
  const [colors, setColors] = useState([]);

  const handleRemove = (index) => {
    let _colors = [...colors];
    _colors.splice(index, 1);
    setColors(_colors);
    appRef.current.style.backgroundColor = colors[index]

  }

  useEffect(() => {
    fetch('https://run.mocky.io/v3/288760fc-f055-4bf7-bcb1-bda5157bfef3')
      .then(res => res.json())
      .then(res => setColors(res))
  }, [])

  return (
    <div className="App" ref={appRef}>
      {
        colors.map((color, index) => {
          return (
            <div
              className='box'
              style={{ backgroundColor: color }}
              onClick={() => handleRemove(index)}
            />
          )
        })
      }
    </div>
  )
}

export default App
