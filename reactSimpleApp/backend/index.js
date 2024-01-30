//basic few express routes and middleware.
const express = require("express");
const { basicSchemaCreate, idSchemaUpdate } = require("./types.js");
const { todo } = require("./db.js");

const app = express();

app.use(express.json()); // middleware to parse the json request

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.post("/todo", async function (req, res) {
  const { title, description } = req.body;
  const parseBody = basicSchemaCreate.parse({ title, description });
  if (!parseBody.success) {
    res.status(411).json({
      msg: "Wrong input ",
    });
    return;
  }
  await todo.create({
    title: title,
    description: description,
    completed: false,
  });

  res.json({
    msg: " Todo Created",
  });
});

app.put("/completed", async function (req, res) {
  const { id } = req.body;
  const parseBody = idSchemaUpdate.parse({ id });
  if (!parseBody.success) {
    res.status(411).json({
      msg: "Wrong ID  ",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});
