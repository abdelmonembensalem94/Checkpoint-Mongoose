const express=require('express')
const connectDB=require('./config/connectDB')
const app=express()
 const port = 3025
 const user= require('./model/user')

 connectDB()

 // add a user
 const create=async()=>{
    try{
        const newuser = new user({
            fullName:"aziz zizo",
            age:20,
        })
        await newuser.save();
        console.log("user created")

    }catch(error){
        console.log("error creating user",error)
    }
}
create()
// add many users 
const createMany=async()=>{
    try{
        const result=await user.insertMany([
            {fullName:"monem monemo",age:28, hobbies:["basketball"]},
            {fullName:"aziz zizo",age:20, hobbies:["video games"]},
            {fullName:"yossra yossra",age:25, hobbies:["reading novels"]},
            {fullName:"chahd chaaaahd",age:28, hobbies:["gardening"]},

        ])
        console.log(result)
    }catch(error){
        console.log("error creating user ", error)
    }
}
 createMany()
// get all users
const findUserID =async()=>{
    try{
        const result= await user.findById("67c2157eeaea9a3a3680a88b");
        console.log(result)

    }catch (error){
        console.log("error finding user",error)
    }
}
findUserID ()
// get all users
const findUser =async()=>{
    try{
        const result= await user.find();
        console.log(result)

    }catch (error){
        console.log("error finding all users",error)
    }
}
findUser ()
// get user by hobby
const findOneUser =async()=>{
    try{
        const result= await user.findOne({hobbies:"basketball"});
        console.log(result)
    }catch (error){
        console.log("error finding one user",error)
    }
}
findOneUser ()
// update user

const addHobbies = async(personId)=>{
    try{
const person = await user.findById(personId)
if (person){
    person.hobbies.push('football');
    await person.save();
    console.log("hobbies added successfully:", person);
} else {
  console.log("Person not found");
}

    }catch(error){
        console.log("Error adding hobbies:", error);

    }
}
const personIdToUpdate = "67c2157eeaea9a3a3680a88c";
addHobbies(personIdToUpdate); 

// delete user by id 
const deletePerson = async(personId)=>{
    try{
        const person = await user.findByIdAndDelete(personId);
        console.log("Person deleted successfully:", person);
        }catch (error){
            console.log("Error deleting person:", error);
            }
            }
            
const personToDelete = "67c2157eeaea9a3a3680a88a"
            deletePerson(personToDelete); 

// delete user by fullName
            const deletePeopleByFullName = async()=>{
                try{
                    const result = await user.deleteOne({fullName:"yossra yossra"});
                    console.log("Person deleted successfully:", result.deletedCount);
                    }catch (error){
                        console.log(error);
                    }
                }

                deletePeopleByFullName(); 




app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running at the port ${port}`)
 })