import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  message: String,
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const TodoMessage = mongoose.model("TodoMessage", todoSchema);

export default TodoMessage;
