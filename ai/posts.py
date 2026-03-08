from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthCredentials
from pydantic import BaseModel
from typing import List
from datetime import datetime

router = APIRouter(prefix="/posts", tags=["posts"])
security = HTTPBearer()

# Secret token for demonstration
SECRET_TOKEN = "your-secret-token-here"

# Dependency to verify Bearer token
def verify_token(credentials: HTTPAuthCredentials = Depends(security)):
    token = credentials.credentials
    if token != SECRET_TOKEN:
        raise HTTPException(status_code=403, detail="Invalid authentication credentials")
    return token

class Post(BaseModel):
    id: int
    title: str
    content: str
    author_id: int
    created_at: str = None

    def __init__(self, **data):
        if 'created_at' not in data or data['created_at'] is None:
            data['created_at'] = datetime.now().isoformat()
        super().__init__(**data)

# Sample data
posts_db = [
    Post(id=1, title="First Post", content="This is the first post", author_id=1, created_at="2024-01-01T10:00:00"),
    Post(id=2, title="Second Post", content="This is the second post", author_id=2, created_at="2024-01-02T11:00:00"),
    Post(id=3, title="Third Post", content="This is the third post", author_id=1, created_at="2024-01-03T12:00:00"),
]

# Counter for new post IDs
next_post_id = 4

@router.get("/")
async def get_all_posts():
    """
    Returns a list of all posts
    """
    return posts_db

@router.get("/{post_id}")
async def get_post(post_id: int, _: str = Depends(verify_token)):
    """
    Returns a specific post by ID (requires authentication)
    """
    for post in posts_db:
        if post.id == post_id:
            return post
    raise HTTPException(status_code=404, detail="Post not found")

@router.post("/")
async def create_post(post: Post, _: str = Depends(verify_token)):
    """
    Creates a new post (requires authentication)
    """
    global next_post_id
    post.id = next_post_id
    post.created_at = datetime.now().isoformat()
    posts_db.append(post)
    next_post_id += 1
    return post
