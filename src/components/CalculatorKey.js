import React from 'react'

const CalculatorKey = (props) => {
    return (
        <div className="calculator-button">
            <button className={`${props.className}`} onClick={() => props.onClick(props.keyValue)}>
                {props.keyValue}{" "}
            </button>
            
        </div>
    )
}

export default CalculatorKey
