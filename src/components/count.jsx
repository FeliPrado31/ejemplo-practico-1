import React from 'react'

export const Count = ({ count, setCount }) => {
    return (
        <>
            <h1>Contador</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}> -1</button>
        </>
    )
}
