import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import RenderMarksSheet from './rendermarks'
import TodoList from './todolist';
import Timer from './timer';
import PeopleSearch from './PeopleSearch';
import Counter from './counter';
import MapFunc from './mapfunction';
import Login from './loginfunctions';

import GroceryList from './grocery';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> abc </h1>
        {/*
        <Greeting name="Roopesh" title="Mr" />
        <RenderMarksSheet name="Roopesh" maths={85} science={90} english={80} social={75} />
        <Greeting name="Roopesh" title="Mr" />
        <Counter />
        <TodoList />
        <Counter />
        <PeopleSearch />
        <Login/>
        <MapFunc />
        */}

        <GroceryList />
        
      </div>
    </>
  )
}

function Greeting(props) {
  return <h1>hello {props.title}. {props.name}</h1> ;
}





export default App
