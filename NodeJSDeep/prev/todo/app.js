const express = require("express");
const mongoose = require("mongoose");
const Todo = require('./models/todo');

mongoose.connect("mongodb://localhost/todo-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hi!");
});

router.get('/todos', async(req,res)=>{
    const todos = await Todo.find().sort('-order').exec();
    res.send({todos});

});

router.post('/todos', async(req,res)=>{
    const{value, done} = req.body;
    const maxOrderTodo = await Todo.findOne().sort('order').exec();
    let order = 1;
    
    if(maxOrderTodo){
        order = maxOrderTodo.order + 1;
    }

    const todo = new Todo({value, order, done});
    await todo.save();

    res.send({todo});
});

router.patch('/todos/:todoId', async(req,res)=>{
    const {todoId} = req.params;
    const {order, value, done} = req.body;

    const todo = await Todo.findById(todoId).exec();
    if(order){
        const targetTodo = await Todo.findOne({order}).exec();
        if(targetTodo){
            targetTodo.order = todo.order;
            await targetTodo.save();
        }
        todo.order = order;
    }
    if(value){
        todo.value = value;
    }
    if(done){
        todo.done = done;
        todo.doneAt = done ? new Date() : null;
    }
    await todo.save();

    res.send({});
})

router.delete('/todos/:todoId', async(req,res)=>{
    const {todoId} = req.params;
    
    const todo = await Todo.findOneAndDelete({_id:todoId}).exec();
    res.send({todo});
});


app.use("/api", express.json(), router);
app.use(express.static("./assets"));

app.listen(8080, () => {
  console.log("서버가 켜졌어요!");
});