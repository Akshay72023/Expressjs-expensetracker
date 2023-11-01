const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controller/error');
const sequelize = require('./util/database');
const cors = require('cors');

const expenseRoute= require('./routes/expense');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(expenseRoute);
app.use(errorController.get404);

sequelize
  .sync()
  .then(result => {
    console.log('Database Connected');
    app.listen(5000, () => {
      console.log('Server started on port 5000');
   });
})
 .catch(err => {
   console.error('Database Connection Error:', err);
});
