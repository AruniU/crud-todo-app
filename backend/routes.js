const express = require("express");//express is used to import

const Todo = require("./models/todo");

const router = express.Router();

router.get("/todos",async(req,res)=>{
  const todos = await Todo.find();

  res.status(200).json(todos);
 });

 router.post("/todos",async(req,res)=>{
    const {task} = req.body;
    if(!task){
        return res.status(400).json({msg:"Todo is required."});
    }

    const newTodo = new Todo({task})
    await newTodo.save();
    res.status(201).json(newTodo);
   });

   router.put("/todos:id",(req,res)=>{  
    res.status(200).json({msg:"Put todos /api/todos"});
   });

   router.delete("/todos:id", async(req,res)=>{
    const{id}=req.paramas;
    await Todo.findByIdAndDelete(id);

    res.status(200).json({msg:"Todo delete unsuccessfully"});
   });

   module.exports = router;