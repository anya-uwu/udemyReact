import { useState } from "react";

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0)
    const toggleIsHappy = () => setIsHappy(!isHappy)
    const incrementCount = () => setCount(count + 2)
    return (
        <div>
            <h2 onClick={toggleIsHappy}>{isHappy ? '^_^' : 'T_T'}</h2>
            <p>{count}</p>
            <button onClick={incrementCount}></button>
        </div>

    )
}