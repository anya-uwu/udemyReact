import Property from "./Property";
import './PropertyList.css'

export default function PropertyList({ items }) {
    return (
        <ul className="propertyList">
            {items.map((i) => (
                <Property name={i.name} price={i.price} rating={i.rating} />
            ))}
        </ul>
    )
}