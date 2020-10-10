const mongoose =require('mongoose')

const Schema=mongoose.Schema
const expenseSchema= new Schema({
    category:{
        type:String
    },
    item:{
        type:String
    },
    amount:{
       type: String
    },
    createdAt:{
        type: Date
    }

})
//create a Model
 const Expense= mongoose.model('Expense',expenseSchema)

 module.exports = Expense