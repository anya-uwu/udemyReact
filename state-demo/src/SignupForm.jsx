import { useState } from "react"

export default function SignupForm() {
    // const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const updateFirstName = (evt) => {
        setFirstName(evt.target.value)
    }
    const updateLastName = (evt) => {
        setLastName(evt.target.value)
    }
    return (
        <div>
            {/* <label htmlFor="username">Enter your username</label>
            <input type="text" value={username} placeholder="username" onChange={updateUsername}/> */}
            {/* <button>Submit</button> */}
            <label htmlFor="firstname">Enter your first name</label>
            <input id="firstname" type="text" value={firstName} placeholder="First name" onChange={updateFirstName}/>
            <label htmlFor="lastname">Enter your last name</label>
            <input id="lastname" type="text" value={lastName} placeholder="Last name" onChange={updateLastName}/>
            <button>Submit</button>
        </div>
    )
}