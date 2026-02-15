import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>
        Welcome to React!
        </h1>
        <Greeting name="Roopesh" title="Mr" />
        <RenderMarksSheet name="Roopesh" maths={85} science={90} english={80} social={75} />

      </div>
    </>
  )
}

function Greeting(props) {
  return <h1>hello {props.title}. {props.name}</h1> ;
}

function RenderMarksSheet(props) {
  //props will have name, maths, science, english, social
  //calculate total marks
  //display the marks sheet in a html table format
  const totalMarks = props.maths + props.science + props.english + props.social;
  return (
    <div>
      <h2>Marks Sheet for {props.name}</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maths</td>
            <td>{props.maths}</td>
          </tr>
          <tr>
            <td>Science</td>
            <td>{props.science}</td>
          </tr>
          <tr>
            <td>English</td>
            <td>{props.english}</td>
          </tr>
          <tr>
            <td>Social</td>
            <td>{props.social}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{totalMarks}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}




export default App
