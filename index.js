const express = require('express');
const app = express();

app.use(express.json());
const todos = require('./todos');

app.get('/', (req,res)=>{
  res.send('Welcome to todolist')
})
app.get('/todo', (req,res)=>{
  res.send('Welcome to todoApplication')
  console.log('hellos')
})

app.get('/todos', (req, res) => {
  res.json(
    {
      success: "ok",
      message: "fetched todo succesfully",
      results: todos
    }
  );
});
app.post('/todos', (req, res)=>{
  const newTodo= req.body;
  todos.push(newTodo);
  res.status(201).json({
    success: "ok",
      message: "added todo in todos succesfully",
      results: todos
  });
  
})
const port = 3000;

//to find a  single todo item by id
app.get('/todos/:id', (req, res) => {
  const { id } = req.params;

  const todoo = todos.find(todoo => todoo.id === parseInt(id));

  if (!todoo) {
    return res.status(404).json({ error: 'your todo item is not available we are sorrrry!!!! found' });
  }

  return res.json({ todoo});
});
//Route to delete a todo item
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;

  const index = todos.findIndex(todo => todo.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'TODO item not found' });
  }

  todos.splice(index, 1);

  return res.json({ message: 'TODO item deleted successfully!!!!!!!!s' });
});
// Route to update a TODO item by its ID
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const index = todos.findIndex(todo => todo.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'TODO item not found' });
  }

  todos[index].title = title || todos[index].title;
  todos[index].description = description || todos[index].description;

  return res.json({ message: 'TODO item updated successfully', todo: todos[index] });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//this is the catch error
app.use ('*', (req, res)=>{
  res.status(401).json({
    success: "false",
    message: "Not found"
  })
})

