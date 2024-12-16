import { useState, useEffect } from "react";


export default function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    useEffect(function myEffect() {
        console.log('my effect was called')
    }, [count])
    const increment = () => {
        setCount((c) => setCount(c + 1))
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+1</button>
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={handleChange} />
        </div>
    )
}