from fastapi import FastAPI
app = FastAPI()

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

