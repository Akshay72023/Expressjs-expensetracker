const express= require('express');

const expenseController= require('../controller/expense');
const router= express.Router();

router.get('/expense/get-expense',expenseController.getExpense);

router.post('/expense/add-expense',expenseController.postExpense);
  
router.delete('/expense/delete-expense/:expenseId',expenseController.deleteExpense);

router.get('/expense/edit-expense/:expenseId',expenseController.editExpense);


module.exports= router;
