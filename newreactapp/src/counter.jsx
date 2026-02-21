import { useState } from 'react';
export default function Counter() {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);
    const [firstName, setFirstName] = useState('Ram');
    const [lastMame, setLastName] = useState('Kirana');



    function increment() {
        setCount(count + 1);
        console.log('The value of count: ', count);
    }
    function decrement() {
        setCount(count - 1);
    }
    function calcFullName () {
        fullName = firstName + ' ' + lastMame;
        
    }
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>


            <button onClick={() => setShow(!show)}>
                Toggle
            </button>
            {show && <p>Hello!</p>}
        </div>
    );
}



