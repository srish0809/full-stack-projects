const Sequelize=require('sequelize');
const sequelize= require('../util/database');
const User=sequelize.define( 'user',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
       type: Sequelize.STRING,
        allowNull:false
    },
    phonenumber:{
        type: Sequelize.INTEGER,
        unique:true
    },
    Age:{
        type: Sequelize.INTEGER,       
        allowNull:false
    },
     address:{
        type:Sequelize.STRING,
        allowNull:false 
     }
    
});
module.exports= User;