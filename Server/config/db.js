const mongoose=require('mongoose');
const connection=mongoose.createConnection('mongodb://127.0.0.1:27017/newTodo').
on("open",()=>{ console.log("mongoose connected");
}).on("error",()=>{ console.log("mongoose got an error")})
module.exports=connection;