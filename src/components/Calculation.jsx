import React, { useState } from 'react'
import "./Calculation.css"

export const Calculation = ({datechanger}) => {

    const [step, setStep] = useState(1)
    const [counter, setCounter] = useState(0)

    function stepIncr() {
        setStep(step + 1)
    }
    function stepDecr() {
        if (step === 1) return console.log("step is already at 0");
        setStep(step - 1)
    }

    function counterIncr() {
        setCounter(counter + step)
    }
    function counterDecr() {
        if (counter == 0) return console.log("step is already at 0");
        if (counter - step < 0) return setCounter(0)
        setCounter(counter - step)
    }

    datechanger(counter)


    return (
        <div className="calculation">
            <div className="step">
                <button onClick={stepDecr}>Decrement</button>
                <span>Step : {step}</span>
                <button onClick={stepIncr}>Increment</button>
            </div>

            <div className="counter">
                <button onClick={counterDecr}>Decrement</button>
                <span>Count : {counter}</span>
                <button onClick={counterIncr}>Increment</button>
            </div>
        </div>

    )
}
