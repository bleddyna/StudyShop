import React, { useState } from 'react'
function CardArticle(props) {
    const [point, setPoint] = useState(0);
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
    let total = props.price * point;
    const [disable, setDisable] = useState(true);
    return (
        <div>
            <h1>Pizza : {props.name}</h1>
            <h2>Prix: {props.price}€</h2>
            <button onClick={removeSomePoint} disabled={disable}>-</button> <span>Quantité: {point} </span><button onClick={addSomePoint}>+</button>
            <h3>TOTAL: {total} €</h3>
        </div>
    )
}

export default CardArticle