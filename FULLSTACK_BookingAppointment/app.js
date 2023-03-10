const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const userRoute = require('./routes/user');
const cors = require('cors');
const app=express();

app.use(cors())

app.use(bodyParser.json({extended:false}));

app.use(userRoute);

sequelize.sync()
.then((result)=>{
    app.listen(3000);
})
.catch(err=>console.log(err));