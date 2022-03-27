from flask import Flask, render_template, jsonify, request
import random

words = [
  {
    "inputs": 5,
    "category": "Sports",
    "word": "chess",
  },
  {
    "inputs": 6,
    "category": "Country Name",
    "word": "France",
  },
  {
    "inputs": 5,
    "category": "Country Name",
    "word": "India",
  },
  {
    "inputs": 7,
    "category": "Outdoor Game Name",
    "word": "Cricket",
  }
];

app = Flask(__name__)

# Creating the route for the getting the word;

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/get_template")
def get_template():
  return jsonify({
    "status" : "success",
    "word" : random.choice(words)
  })


if __name__ == "__main__":
  app.run()