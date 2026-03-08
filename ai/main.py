from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthCredentials
from pydantic import BaseModel
from typing import List
from posts import router as posts_router

app = FastAPI()
app.include_router(posts_router)
security = HTTPBearer()

# Secret token for demonstration
SECRET_TOKEN = "your-secret-token-here"

# Dependency to verify Bearer token
def verify_token(credentials: HTTPAuthCredentials = Depends(security)):
    token = credentials.credentials
    if token != SECRET_TOKEN:
        raise HTTPException(status_code=403, detail="Invalid authentication credentials")
    return token

class User(BaseModel):
    id: int
    name: str

# Sample data
users_db = [
    User(id=1, name="Alice Johnson"),
    User(id=2, name="Bob Smith"),
    User(id=3, name="Charlie Brown"),
    User(id=4, name="Diana Prince")
]

@app.get("/users")
async def get_users():
    """
    Returns a list of all users
    """
    return users_db

@app.get("/users/{user_id}")
async def get_user(user_id: int, _: str = Depends(verify_token)):
    """
    Returns a specific user by ID (requires authentication)
    """
    for user in users_db:
        if user.id == user_id:
            return user
    raise HTTPException(status_code=404, detail="User not found")

