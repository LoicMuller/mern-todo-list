import TodoMessage from "../models/todoMessage.js";
import mongoose from "mongoose";

export const getTodos = async (req, res) => {
  try {
    const todoMessages = await TodoMessage.find();

    res.status(200).json(todoMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  const todo = req.body;

  const newTodo = new TodoMessage(todo);

  try {
    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  const { id: _id } = req.params;
  const todo = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No todo with that id");
  }

  const updatedTodo = await TodoMessage.findByIdAndUpdate(
    _id,
    { ...todo, _id },
    { new: true }
  );

  res.json(updatedTodo);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }

  await TodoMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};

export const completeTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }

  const todo = await TodoMessage.findById(id);
  const updatedTodo = await TodoMessage.findByIdAndUpdate(
    id,
    { completed: !todo.completed },
    { new: true }
  );

  res.json(updatedTodo);
};
