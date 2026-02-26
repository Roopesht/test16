import { useState } from "react";

export default function FormExample() {
    const [name, setName] = useState("")

    function handleSubmit(e) {
        e.preventDefault();     // stop browser refresh
        console.log(name);      // use the state value
        setName("");            // clear input after submit
    }
    return (
        <>

    <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
    </form>
    </>
    );
}