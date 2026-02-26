import { useState, useEffect } from 'react';

function GreetingService() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/greet')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return <h2>{message}</h2>;
}

export default GreetingService;
