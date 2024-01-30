const mongoose = require("mongoose");

// mongodb url handy
//mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos

mongoose.connect(
  "mongodb+srv://tusharsparsh23:Dq8M4BjUQBnMpaQl@cluster0.rqym3d2.mongodb.net//todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = { todo };
