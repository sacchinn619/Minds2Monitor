const Budget = require('../models/budget')


const budgetController={}

budgetController.post=(req,res)=>{
   const body=req.body
   const budget= new Budget(body)
   budget.save()
   .then((budget)=>{
     res.json(budget)
   })
   .catch((err)=>{
       res.json(err)
   })

}
budgetController.get=(req,res)=>{
Budget.find({})
.then((budget)=>{
    res.json(budget)
})
.catch((err)=>{
    res.json(err)
})

}
budgetController.update=(req,res)=>{
        const id = req.params.id 
        const body = req.body 
        Budget.findByIdAndUpdate(id,body, { new: true, runValidators: true})
        .then((budget)=>{
            res.json(budget)
        })
        .catch((err)=>{
            res.json(err)
        })
        
        }

module.exports=budgetController