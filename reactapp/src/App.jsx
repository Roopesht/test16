import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function ProfileCard(props) {
  return (
    <>
      Name: {props.name} <br/>
      Role: {props.role} <br/>
      Experience: {props.years} years <br/>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

function App() {
  return (
    <>
      <h1>Ojasa Mirai</h1>
      <ProfileCard name="Kiran" role="Architect" years={5} />
      <ProfileCard name="Suresh" role="Developer" years={3} />
      <Counter />
      

    </>
  )
}

export default App
