const User = require('../Modals/user');
const bcrypt = require('bcryptjs');
const jwt= require('jsonwebtoken');



exports.signUp = async(req,res)=>{
    try{
        const { channelName, userName, about, profilePic, password } = req.body;
        const isExist = await User.findOne({ userName });
        console.log(isExist);
       if(isExist)
       {
        res.status(400).json({error:"username already exists please try with other username "})
       }else
       {
           let updatedpass = await bcrypt.hash(password,10);
           const user = new user({channelName, UserName,about, profilepic,password:updatedpass});
           await user.save();
           res.status(201).json({message:"user registered successfully",success:"yes",data:user});
        }
        
        
    } catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}

exports.signIn = async (req,res)=>{
    try{
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        
        if(user && await bcrypt.compare(password,user.password) ){
            
            const token = jwt.sign({userId:user._id},'its_my_secret_key');
            res.cookie('token',token);
            console.log(token);
 
            res.json({message:"Logged in successfully", success:"true"});
        }
        else
        {
            res.status(400).json({error:"Invalid Credentials"});
        }
    } catch (errorMsg){
        res.status(500).json({ error: 'Server error' });
    }
}

exports.logout = async(req,res)=>{
    res.clearCookie('token', cookieOptions).json({ message: 'Logged out successfully' });
}
