import './Slots.css'

// export default function Slots({ val1, val2, val3 }) {
//     if (val1 === val2 && val1 === val3) {
//         return (
//             <div>
//                 <h1>{val1}{val2}{val3}</h1>
//                 <h2 className="win" >You win!</h2>
//                 <h3>Congrats!!!</h3>
//             </div>

//         )
//     } else {
//         return (
//             <div>
//                 <h1>{val1}{val2}{val3}</h1>
//                 <h2 className="lose" >You lose</h2>
//             </div>
//         )
//     }

// }

// SOLUTION

export default function Slots({val1, val2, val3}) {
    const isWinner = val1 === val2 && val2 === val3;

    return (
        <div>
            <h1>{val1}{val2}{val3}</h1>
            <h2 style={{color: isWinner ? 'green' : 'red'}}>{isWinner ? 'You win!' : 'You lose'}</h2>
            {isWinner && <h3>Congrats</h3>}
        </div>
    )
}