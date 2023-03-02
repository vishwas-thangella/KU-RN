const bcrypt = require('bcrypt');
const UserModel = require("../models/UserModel");
const jwt = require('jsonwebtoken');

const Adduser = async (req,res) =>{
    try{
        const found = await UserModel.findOne({Email:req.body.Email});
        if(found){
            throw new Error('user Exist !');
        }else{
            const user = new UserModel(req.body);
            const hash = await bcrypt.hash(req.body.Password,10);
            user.Password = hash;
            const saved = await user.save();
            if(saved){
                res.status(200).json({
                    success:true,
                    message:"Registraion Succeed !"
                });
            }else{
                throw new Error('failed to save !');
            }
        }
    }catch(e){
        res.status(200).json({
            success:false,
            message:e.message
        })
    }
};

const Login = async (req,res)=>{
    try{
        const user = await UserModel.findOne({Email:req.body.Email});
        if(user){
            if(await bcrypt.compare(req.body.Password,user.Password)){
                user.Password = null;
                jwt.sign({user},process.env.SECRET,{expiresIn:"2h"},(err,token)=>{
                    if(!err){
                        res.status(200).json({token:token,success:true});
                    }else{
                        throw new Error(err.message)
                    }
                })
            }else{
                throw new Error("Incorrect Password");
            }
        }else{
            throw new Error('User not found !');
        }
    }catch(e){
        res.status(200).json({
            success:false,
            message:e.message
        });
    }
}

module.exports = { Adduser, Login };