const Category =require('../models/category')

const categoryController={}

categoryController.post=(req,res)=>{
   const body=req.body
   const category= new Category(body)
   category.save()
   .then((category)=>{
     res.json(category)
   })
   .catch((err)=>{
       res.json(err)
   })

}
categoryController.get=(req,res)=>{
Category.find({})
.then((category)=>{
    res.json(category)
})
.catch((err)=>{
    res.json(err)
})

}
categoryController.update=(req,res)=>{
        const id = req.params.id 
        const body = req.body 
        Category.findByIdAndUpdate(id,body, { new: true, runValidators: true})
        .then((category)=>{
            res.json(category)
        })
        .catch((err)=>{
            res.json(err)
        })
        
        }
categoryController.delete=(req,res)=>{
            const id = req.params.id 
            Category.findByIdAndDelete(id)
                .then((category) => {
                    res.json(category)
                })
                .catch((err) => {
                    res.json(err)
                })
            
            }
module.exports=categoryController