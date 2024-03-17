// Import the dotenv package to load environment variables from a .env file
import dotenv from "dotenv";
// Import the express package to create the server and handle routes
import express from "express";
// Import the mongoose package to interface with MongoDB
import mongoose from "mongoose";
// Import the cors package to enable Cross-Origin Resource Sharing
import cors from "cors";

// Initialize dotenv to load the .env file
dotenv.config();

// Create an Express application
const app = express();
// Define the port number. Use the value from the environment variables or a default value
const PORT = process.env.PORT || 3000;

// Use cors middleware to enable all CORS requests
app.use(cors());
// Use express.json middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB Atlas using the connection URI from the environment variables
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas")) // Log a message on successful connection
  .catch((err) => console.error("Could not connect to MongoDB Atlas", err)); // Log an error if the connection fails

// Define a Mongoose schema for the Todo model with text and completed fields
const todoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
});

// Create a Mongoose model for the Todo schema
const Todo = mongoose.model("Todo", todoSchema);

// Define a GET route to fetch all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find(); // Fetch all todos from the database
    res.status(200).json(todos); // Send a 200 OK response with the todos
  } catch (err) {
    res.status(500).json({ message: err.message }); // Send a 500 Internal Server Error response if an error occurs
  }
});

// Define a POST route to create a new todo
app.post("/todos", async (req, res) => {
  const todo = new Todo({
    text: req.body.text, // Set the text from the request body
    completed: req.body.completed, // Set the completed status from the request body
  });

  try {
    const newTodo = await todo.save(); // Save the new todo to the database
    res.status(201).json(newTodo); // Send a 201 Created response with the new todo
  } catch (err) {
    res.status(400).json({ message: err.message }); // Send a 400 Bad Request response if an error occurs
  }
});

// Define a PUT route to update an existing todo
app.put("/todos/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
    });
    res.status(200).json(updatedTodo); // Send a 200 OK response with the updated todo
  } catch (err) {
    res.status(400).json({ message: err.message }); // Send a 400 Bad Request response if an error occurs
  }
});

// Define a DELETE route to delete an existing todo
app.delete("/todos/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id); // Delete the todo with the specified ID
    res.status(204).send(); // Send a 204 No Content response to indicate successful deletion
  } catch (err) {
    res.status(500).json({ message: err.message }); // Send a 500 Internal Server Error response if an error occurs
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
