const mongoose=require('mongoose')
const userSchema = new mongoose.Schema({
fullName : {type:String , required:true },
age:Number,
hobbies: [{type:String}],
})
const user= mongoose.model("user",userSchema)
module.exports= user