import ColorBox from "./ColorBox";
import './colorGrid.css'

export default function ColorGrid() {
    const boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes.push(<ColorBox />)
    }
    return (
        <div className="colorGrid">
            {boxes}
        </div>
    )
}