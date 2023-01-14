const express=require('express');
const userController=require('../controllers/user');
const router=express.Router();
router.post('/add-user',userController.addUser);
router.get('/get-user',userController.getUser);
router.delete('/delete-user/:id',userController.deleteUser);
router.post('/edit-user/:id',userController.editUser);
module.exports=router;
