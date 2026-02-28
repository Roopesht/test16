from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import time
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

user_list = {1: "Mohan", 2: "Rohit", 3:"Vishwa" }
session_list = {1: "Intro python"}

@app.get("/")
def def_index():
    """This is the information about this method"""
    return ({"message": "Welcome 1!"})

@app.get("/users/{user_id}") #Path param
def get_user (user_id: int):
    user_name = user_list.get(user_id, "Not found")

    return ({"message": f"Name: {user_name}"})

@app.get("/items") #Query param
def get_items(item_id: int):
    return ({"message": f"Details of item_id = {item_id}"})

class LoginObj(BaseModel):
    name: str
    password: str

credentials = {"roopesh": "roopesh1", "kiran": "pwd", "vishwa": "1", "rohit":"r"}

@app.post("/login")
def login_func(cred: LoginObj):
    time.sleep(2)
    print (f"Received login credentials: name: {cred.name} and password: {cred.password}")
    expected_pwd = credentials.get (cred.name, "not found")
    if     cred.password == expected_pwd:
        return ({"message": f"Login is successful", "success": True})
    else:
        return ({"message": f"User name or password is incorrect", "success": False})


#localhost:8000/login