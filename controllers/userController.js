const UserModel = require('../models/userModel');


const UserController ={
    RegisterUser: async (req,res)=>{
        try {
            const {fullname,username, password} = req.body ;
            const user = new UserModel({fullname,username, password});
            await user.save();
            res.status(200).json({message : 'success'});
        } catch (error) {
            res.status(500).json({error : error.message});
        }
    },
    LoginUser: async(req,res)=>{
        try {
            const {username, password} = req.body;
            const user = await UserModel.findOne({username, password});
            if(user) {
                res.status(201).json({message : 'success'});
            } else {
                res.status(400).json({message : 'error'});
            }
        } catch (error) {
            res.status(401).json({error : error.message});
        }
    }
}

module.exports = UserController;