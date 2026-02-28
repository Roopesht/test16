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
import FormExample from './form';
import FeedbackForm from './feedback_form';
import FeedbackList from './feedback_list';


import GroceryList from './grocery';
import GreetingService from './GreetingService';

function App() {
  const [count, setCount] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);

  function addFeedback(text) {
    setFeedbacks([...feedbacks, text]);
  }

  return (
    <>
      <div>
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
        <Timer />
        <FeedbackForm onAdd={addFeedback} />
        <FeedbackList items={feedbacks } />
        <GreetingService />

        */}
        <Login/>

      </div>
    </>
  )
}

function Greeting(props) {
  
}





export default App
