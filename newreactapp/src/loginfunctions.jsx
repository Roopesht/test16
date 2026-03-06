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
        //alert (JSON.stringify (data))
        //unicode 
        //sql = f"select * from user where uid='{name}'


        query = "selct * from user where uid = ?"
        db.execute(query, )


        setLoading(false)
        if( data.success) 
            setStatus("Successful")
        else {
            //setStatus(data.detail[0]?.msg)
            setErrMsg(data.detail[0]?.msg)

        }




    }

    return (
        <>
        {loggedIn ? <Dashboard /> : 
            <div>
                <h1>Login</h1> <br />
                <form onSubmit={login}>
                user name: <input value={name} onChange={(e) => setName(e.target.value)} minLength={5} ></input><br />
                password: <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" ></input><br />

                <input type="submit" value="Submit" ></input>
                </form>
                {loading && <p> Its loading, please wait!</p>}

                <p style={{'color': 'red'}}> {errMsg} </p> 


            </div>
            
        }
        </>
    )
}
