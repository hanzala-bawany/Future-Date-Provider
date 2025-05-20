import { useState } from 'react'
import "./Slider.css"

export const Slider = ({datechanger}) => {

  const [sliderChanger, setSliderChanger] = useState(1)
  const [counter, setCounter] = useState(0)


  function handleSliderChange(e) {
    const value = Number(e.target.value)
    setSliderChanger(value)
  }

  function counterIncr() {
    setCounter(counter + sliderChanger)
  }
  function counterDecr() {
    if (counter == 0) return console.log("sliderChanger is already at 0");
    if (counter - sliderChanger < 0) return setCounter(0)
    setCounter(counter - sliderChanger)
  }

  datechanger(counter)


    return (
      <div id="sliderParent">

        <div className="slider">
          <input 
          type="range" 
          min="1" 
          max="50" 
          onChange={handleSliderChange} 
          className="slider"/>

          <p>slider Changer Value: {sliderChanger}</p>
        </div>


        <div className="counter">
          <button onClick={counterDecr}>Decrement</button>
          <span>Count : {counter}</span>
          <button onClick={counterIncr}>Increment</button>
        </div>

      </div>
  )
}

