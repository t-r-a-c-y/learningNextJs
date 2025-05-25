"use client";
import React, { useState } from 'react';

export default function Counter(){
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = ()=>setCount(0);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increament</button>
            <button onClick={decrement}>Decreament</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}