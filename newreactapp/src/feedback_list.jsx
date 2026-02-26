import { useState } from "react";

// FeedbackForm.jsx — child sends up
export  default function FeedbackList({ items }) {
  const [error, setError] = useState(false);
  return (
    <>
    <p>List of feedbacks</p>
    {items.length === 0 && (
      <p style={{ color: "gray" }}>No feedback yet. Be the first!</p>
    )
  }

    {error ? <p style={{color:"red"}}>There is an error</p> :
    <>

    {items.map( (feedback) =>
    <p>{feedback}</p>
    )}
    </>
  }

    </>
  );
}

