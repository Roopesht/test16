import { useState } from "react";
// FeedbackForm.jsx — child sends up
export  default function FeedbackForm({ onAdd }) {
  const [text, setText] = useState("");
  return (
    <>
        <h2>Feedback form</h2>

    <form onSubmit={(e) => { e.preventDefault(); onAdd(text); setText(""); }}>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
    </>
  );
}