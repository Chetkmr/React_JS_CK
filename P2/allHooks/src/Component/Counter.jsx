import React, { useState } from 'react'

const Counter = ({ counter, increaseCounter }) => {
    return (
        <>
            <h3>Counter {counter}</h3>
            <button onClick={increaseCounter}>
                Increase
            </button></>
    )
}

export default Counter