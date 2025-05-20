import { Dates } from './components/dates'
import { Calculation } from './components/Calculation'
import { Slider } from './components/Slider'
import './App.css'
import { useState } from 'react'

function App() {

  const [datechangerCount, setDatechangerCount] = useState(0)
  const [calculationByBtn, setCalculationByBtn] = useState(true)
  const [calculationBySlider, setCalculationBySlider] = useState(false)
  const [calculationBtnName, setCalculationBtnName] = useState("Slider")

  function datechanger(value) {
    setDatechangerCount(value)
  }

  function calculationChanger() {

    setCalculationByBtn(!calculationByBtn)
    setCalculationBySlider(!calculationBySlider)
    calculationBtnName === "Slider" ? setCalculationBtnName("Btn Counter") : setCalculationBtnName("Slider") 

  }




  return (
    <div id="mainParent">

      <h1>Step Counter</h1>

      <div id="main">

        <button onClick={calculationChanger} id='calculationChanger'> {calculationBtnName}</button>

        {  
            calculationByBtn ? <Calculation datechanger={datechanger} />  :   <Slider datechanger={datechanger} />
        }

        <Dates datechangerCount={datechangerCount} />

      </div>

    </div>
  )
}

export default App
