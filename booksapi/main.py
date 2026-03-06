from requests import request
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

books = []  # Our data storage

# CREATE
@app.post("/books")
def add_book(title: str):
    book = {"id": len(books) + 1, "title": title}
    books.append(book)
    return book

# READ
@app.get("/books")
def get_books():
    return books

# DELETE
@app.delete("/books/{book_id}")
def delete_book(book_id: int):
    # Remove book logic here
    return {"message": "Book deleted"}

