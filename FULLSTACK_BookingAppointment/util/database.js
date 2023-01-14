const Sequelize=require('sequelize');
const sequelize=new Sequelize('node_by_srashti','root','Srashti@1234',{
    dialect:'mysql',
    host:'localhost',
});
module.exports=sequelize;