const mongoose =require('mongoose');
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.URI),
        console.log('db is connected')
    }catch(error){

        console.log(error.message)
    }


}
module.exports=connectDB;