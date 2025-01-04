const Video = require('../Modals/video');


exports.uploadVideo = async (req,res)=>{
    try{
        const { title, description, videoLink, videoType,thumbnail }  = req.body;
        console.log (req.user)
        const video = new Video({user: req.user._id,title,description,videoLink, videoType,thumbnail});
         await videoUpload.save();

         res.status(201).json({success:"true",videoUpload});


    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}


exports.getAllVideo = async(req,res)=>{
    try{
        const videos = await Video.find().populate('user','channelName profilePic userName createdAt');
        
        res.status(201).json({ sucess: "true", "videos": videos });
    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}

exports.getVideoById = async (req,res)=>{
    try{
        let {id} = req.params;
        const video = await video.findById(id).populate('user','channelName profilepic username createdAt');

        res.status(201).json({ sucess: "true", "video": video });
    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}

exports.getAllVideoByUserID = async(req,res)=>{
    try{
        let {userId} = req.params;
        const video = await Video.find({user:userId}).populate('user','channelName profilePic userName createdAt about');
        res.status(201).json({ sucess: "true", "video": video });

    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}
