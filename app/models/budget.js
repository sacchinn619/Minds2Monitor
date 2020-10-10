const mongoose =require('mongoose')

const Schema=mongoose.Schema
const budgetSchema= new Schema({
    budget:{
        type:String
    }
})
//create a Model
 const Budget= mongoose.model('Budget',budgetSchema)

 module.exports = Budget