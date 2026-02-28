import { useState } from "react"

export function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>

    )
}

export default  function Login() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [name, setName] = useState ("")
    const [pwd, setPwd] = useState ("")
    const [status, setStatus]=useState("")
    const [errMsg, setErrMsg] = useState("")
    const [loading, setLoading] = useState(false)


    async function login () {
        setErrMsg("")
        setLoading(true)
        const resp= await fetch("http://127.0.0.1:8000/login/", {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body:  JSON.stringify ({name:name, password: pwd})
        });
        const data = await resp.json()
        setLoading(false)
        if( data.success) 
            setStatus("Successful")
        else {
            setStatus("Login failed")
            setErrMsg(data.message)

        }




    }

    return (
        <>
        {loggedIn ? <Dashboard /> : 
            <div>
                <h1>Login</h1> <br />
                user name: <input value={name} onChange={(e) => setName(e.target.value)} ></input><br />
                password: <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" ></input><br />

                <button onClick={login} >Login</button>
                {loading && <p> Its loading, please wait!</p>}

                <p style={{'color': 'red'}}> {errMsg} </p> 


            </div>
            
        }
        </>
    )
}
