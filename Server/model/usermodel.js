const mongoose=require("mongoose");
const db=require("../config/db.js")
const schema = mongoose.Schema;
const UserSchema= new schema({
Email:{
    required:true,
    type:String,
    validate: {
        validator: (value) => {
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          return value.match(re);
        },
        message: "Please enter a valid email address",
      },
      unique:true
},
password:{
type:String,
required:true
}


})
const usermodel=db.model("user",UserSchema)
module.exports=usermodel;