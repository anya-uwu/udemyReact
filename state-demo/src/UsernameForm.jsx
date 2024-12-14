import { useState } from "react"

export default function UsernameForm() {
    const [username, setUsername] = useState('');
    const updateUsername = (evt) => {
        setUsername(evt.target.value)
    }
    return (
        <div>
            <label htmlFor="username">Enter your username</label>
            <input type="text" value={username} placeholder="username" onChange={updateUsername}/>
            <button>Submit</button>
        </div>
    )
}