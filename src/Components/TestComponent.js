import React, { useState } from 'react'

function TestComponent(props) {
    const [point, setPoint] = useState(0);
    const [disable, setDisable] = useState(true);
    const addSomePoint = () => {
        setPoint(point + 1);
        if (point >= 0) {
            setDisable(false);
        }
    }
    const removeSomePoint = () => {
        setPoint(point - 1);
        if (point === 1) {
            setDisable(true);
        }
    }
    return (
        <div>
            <button onClick={removeSomePoint} disabled={disable}>-</button> <span>Voici votre compte:{point} </span><button onClick={addSomePoint}>+</button>
        </div>
    )

}

export default TestComponent