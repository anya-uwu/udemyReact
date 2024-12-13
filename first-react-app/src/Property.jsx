export default function Property({ name, rating, price }) {
    return (
        <li>
            <h2>{name}</h2>
            <h3>${price} a night</h3>
            <h4>{rating} stars</h4>
        </li>
    )

}