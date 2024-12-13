import { useState } from "react"
import './colorBox.css'

export default function ColorBox() {
    const colors = [
        "#E53935",
        "#E91E63",
        "#9C27B0",
        "#673AB7",
        "#3F51BF",
        "#2196F3",
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFEB3B",
        "#FF9800",
        "#FF5722",
    ];

    const randomChoice = (arr) =>{
        const idx = Math.floor(Math.random() * colors.length);
        return arr[idx]
    }

    const [color, setColor] = useState(randomChoice(colors))

    const changeColor = () => {
        const randomColor = randomChoice(colors)
        setColor(randomColor)
    }

    return (
        <div className="colorBox" style={{backgroundColor: color}} onClick={changeColor}></div>
    )
}