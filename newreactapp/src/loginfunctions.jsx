import { useState } from "react"

export function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>

    )
}

export default function Login() {
    const [loggedIn, setLoggedIn] = useState(false);
    function login () {
        setLoggedIn(true);
    }
    return (
        <>
        {loggedIn ? <Dashboard /> : 
            <div>
                <h1>Login</h1>
                user name: <input ></input>
                password: <input type="password" ></input>

                <button onClick={login} >Login</button>
            </div>
            
        }
        </>
    )
}
