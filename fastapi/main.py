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

@app.get("/greet")
def greet():
    return {"message": "Hello, Roopesh!"}

@app.get("/hello")
import passlib

import jwt
def create_access_token(data:dict):
    return jwt.encode(data, secret_key, "HS256") 


def hellofun():
    return {"message": "Hello, Roopesh!"}

localhost/items?search=intelligent_boys&limit=10

@app.get("auth/login")
def login():
    # Get user id and password
    # CORS
    # JWT Authentication
    # RBAC    
    # use pydantic
    # How to hash the passwords (bcrypt)
    # Verify in the DB

    # if valid user ...
    create_access_token(..)

    # nginx / cloudfare - Reverse proxy
    # Cookies
    # How to add logging
    # Secrets 
    # Middleware