const express = require('express')
const router = express.Router() 
const expenseController = require('../app/controllers/expenseController')
const categoryController =require('../app/controllers/categoryController')
const budgetController=require('../app/controllers/budgetController')

//expense controller Routes//
router.post('/api/expense',expenseController.post)
router.get('/api/expense',expenseController.get)
router.put('/api/expense/:id',expenseController.update)
router.delete('/api/expense/:id',expenseController.delete)

//category controller Routes//
router.post('/api/category',categoryController.post)
router.get('/api/category',categoryController.get)
router.put('/api/category/:id',categoryController.update)
router.delete('/api/category/:id',categoryController.delete)

//budget controller Routes//
router.post('/api/budget',budgetController.post)
router.get('/api/budget',budgetController.get)
router.put('/api/budget/:id',budgetController.update)

module.exports = router