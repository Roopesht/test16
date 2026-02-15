export default function RenderMarksSheet(props) {
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
