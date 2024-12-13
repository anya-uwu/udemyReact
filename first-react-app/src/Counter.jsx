import { useState } from "react";

export default function Counter() {
    
    const [num, setNum] = useState(5)
    const changeNum = () => {
        setNum(10)
    };

    return (
        <div>
            <p>the count is {num}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    )
}