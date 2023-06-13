const express = require('express');
//importing named exports
const { getAllTodos, home, postATodo } = require('../controllers/todoController')

const router = express.Router();

// defining routes for the api
router.get('/', home)

router.get('/todos', getAllTodos)

router.post('/todos', postATodo)

//exporting data
module.exports = {
    router
}