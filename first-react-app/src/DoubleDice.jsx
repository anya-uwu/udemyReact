export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const isWinner = num1 === num2;
    const styles = {color: isWinner ? 'green' : 'red'}
    return (
        <div className="DoubleDice" style={styles}>
            <h2>DOUBLE DICE</h2>
            <h3>{num1 === num2 ? 'You win!' : null}</h3>
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    )
};