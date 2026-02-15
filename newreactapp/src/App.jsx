import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import RenderMarksSheet from './rendermarks' 
import TodoList from './todolist';
import Timer from './timer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* 
        <Greeting name="Roopesh" title="Mr" />
        <RenderMarksSheet name="Roopesh" maths={85} science={90} english={80} social={75} />
        <Greeting name="Roopesh" title="Mr" />
        <Counter />
        <TodoList />
        */}

        <Timer />



      </div>
    </>
  )
}

function Greeting(props) {
  return <h1>hello {props.title}. {props.name}</h1> ;
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button style={{backgroundColor: 'blue', color: 'white'}} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={{backgroundColor: 'red', color: 'white'}} onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}





export default App
