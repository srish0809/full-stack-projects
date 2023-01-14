
const path=require('path');
const User=require('../model/user')
exports.addUser=async (req,res,next)=>{
    try{
       
         const name=req.body.name;
         const phonenumber=req.body.phonenumber;
         const Age=req.body.age;
         const address=req.body.address;
        

         if (!phonenumber) {
            throw new Error('Phone number is mandatory!');
            
         }
         const data=await User.create({
            name:name,
            phonenumber:phonenumber,
            Age:Age,
            address:address
         })
         
         res.status(201).json({newUserDetail:data})
         console.log(data);
    }
    catch(err){
   console.log('Get user is failing');
   res.status(500).json({error:err});
    }
}
exports.getUser =  async(req, res, next) => {
    try{
    const users = await User.findAll();
    res.status(200).json({allUsers : users});
    }catch(err) {
        console.log(err);
        res.status(500).json({error : err})
    }
}


exports.deleteUser = async (req, res, next) => {
    try{   
    const id = req.params.id;
    console.log(id);
    const user =  await User.findAll({where: {id:id}});
    if(!user){
        console.log('This user does not exist.');
        return res.sendStatus(400);
    }
    await User.destroy({where: {id:id}});
    res.sendStatus(200);
    }catch(err){
        console.log(err);
        res.status(500).json({error : err})
    }
}


exports.editUser=async(req,res,next) => {

    try{   
       
        const updatedname=req.body.name;
        const updatedphonenumber=req.body.phonenumber;
        const updatedAge=req.body.age;
        const updatedaddress=req.body.address;
        const id = req.params.id;

        console.log(id);
      let user = await User.update(
        {
           name:updatedname,
           phonenumber:updatedphonenumber,
           age:updatedAge,
           address:updatedaddress
        },
        {
            where:{id:id}
          
        }
        )  
        res.status(201).json({user});
       
       
        }catch(err){
            console.log(err);
            res.status(500).json({error : err})
        }

    
}
