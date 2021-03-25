import TodoMessage from "../models/todoMessage.js";

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
