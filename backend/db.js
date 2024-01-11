const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://vraju4865:IU3TbXXN2mFadqML@venkat.maum9h0.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean

})

const todo = mongoose.model('todos',todoSchema)

module.exports={
    todo
}