export default function ColorList({ colors }) {
    return (
        <div>
            <h4>Color List</h4>
            <ul>
                {colors.map((c) => (
                    <li style={{color: c}}>{c}</li>
                ))}
            </ul>
        </div>
    )

}