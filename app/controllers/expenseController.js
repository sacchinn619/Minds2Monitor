const Expense =require('../models/expense')

const expenseController={}

expenseController.post=(req,res)=>{
   const body=req.body
   const expense= new Expense(body)
   expense.save()
   .then((expense)=>{
     res.json(expense)
   })
   .catch((err)=>{
       res.json(err)
   })

}
expenseController.get=(req,res)=>{
Expense.find({})
.then((expense)=>{
    res.json(expense)
})
.catch((err)=>{
    res.json(err)
})

}
expenseController.update=(req,res)=>{
    const id = req.params.id 
    const body = req.body 
    Expense.findByIdAndUpdate(id,body, { new: true, runValidators: true})
    .then((expense)=>{
        res.json(expense)
    })
    .catch((err)=>{
        res.json(err)
    })
    
    }
expenseController.delete=(req,res)=>{
        const id = req.params.id 
        Expense.findByIdAndDelete(id)
            .then((expense) => {
                res.json(expense)
            })
            .catch((err) => {
                res.json(err)
            })
        
        }
module.exports=expenseController