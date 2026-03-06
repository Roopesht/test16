import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:8000";

export default function BookManager() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");

  // Fetch books
  const loadBooks = async () => {
    const res = await fetch(`${API_URL}/books`);
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  // Add book
  const addBook = async () => {
    if (!title) return;

    await fetch(`${API_URL}/books?title=${encodeURIComponent(title)}`, {
      method: "POST",
    });

    setTitle("");
    loadBooks();
  };

  // Delete book
  const deleteBook = async (id) => {
    await fetch(`${API_URL}/books/${id}`, {
      method: "DELETE",
    });

    loadBooks();
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Book Manager</h2>

      {/* Add Book */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addBook} style={{ marginLeft: "10px" }}>
          Add Book
        </button>
      </div>

      {/* Book List */}
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ marginBottom: "8px" }}>
            {book.title}
            <button
              onClick={() => deleteBook(book.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}