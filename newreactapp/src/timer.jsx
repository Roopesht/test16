

import { useState, useEffect } from 'react';
function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 50);
        }, 50);
        return () => clearInterval(timer);
    }, []);
    return (
        <div>
            <h2>Timer: {count} seconds</h2>
        </div>
    );
}

export default Timer;