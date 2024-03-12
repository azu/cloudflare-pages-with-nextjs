"use client";
import { useState } from "react";

export const Counter = () => {
    const [state, setState] = useState(0)
    return (
        <div>
            <h1>Client</h1>
            <p>State: {state}</p>
            <button onClick={() => setState(state + 1)}>Increment</button>
            <button onClick={() => setState(state - 1)}>Decrement</button>
        </div>
    )
}
