const todoTasks = require('../data')

//exporting and defining route handlers/ controllers
module.exports = {
    home: (req, res)=>{
        //sending response with text format
        console.log(res.send('Welcome to fuuuuuu!'))
       
    },

    getAllTodos: (req, res)=>{
        //sending response with json format
        res.json({
            success: true,
            message: "fetched todos successfully",
            results: todoTasks
        })
    },

    postATodo: (req, res)=>{
        todoTasks.push(req.body);
        //sending response with json format and setting status codes
        res.status(201).json({
            success: true,
            message: "added the todo successfully",
            results: req.body
        })
    }

}