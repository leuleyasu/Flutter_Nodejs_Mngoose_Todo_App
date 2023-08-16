const app =require('./app');
const db =require('./config/db.js');
const usermodel=require("./model/usermodel.js")
const ports=3000;


app.listen(ports,()=>{
    console.log('listening')
})