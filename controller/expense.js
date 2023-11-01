const expense = require('../Models/expense');

exports.getExpense= async(req,res,next)=>{
  try{
    const expenses= await expense.findAll();
    res.status(200).json({allExpense: expenses});
  }
  catch(err){
    console.log('Get expenses is failing',JSON.stringify(err));
    res.status(500).json({error:err});
  }
};

exports.postExpense= async (req, res, next) => {
    try {
      const { expenseAmount, expenseDescription, expenseCategory } = req.body;
      const data = await expense.create({ amount: expenseAmount, description:expenseDescription, category:expenseCategory });
      res.status(201).json({ newUserExpense: data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  

exports.deleteExpense= async (req, res, next) => {
    const expenseId = req.params.expenseId;
    try {
      if(!req.params.expenseId){
        return res.status(400).json({error: 'Id is missing'})
      }
      await expense.destroy({where: { id: expenseId}});
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
 };


exports.editExpense= async (req, res, next) => {
  const expenseId = req.params.expenseId;
  try {
    const a= await expense.findByPk(expenseId);
    console.log(a);
    res.status(200).json({Expense: a});
  }
  catch(err){
    console.log('Get expense is failing',JSON.stringify(err));
    res.status(500).json({error:err});
  }
};



