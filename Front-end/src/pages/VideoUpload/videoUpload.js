import React, { useState,useEffect } from 'react'
import './videoUpload.css';

import HiveIcon from '@mui/icons-material/Hive';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const VideoUpload = () => {
    const [inputField, setInputField] = useState({ "title": "", "description": "", "videoLink": "", "thumbnail": "", "videoType": "" })
    const [loader ,setLoader] = useState(false);
    const navigate = useNavigate()
    const handleOnChangeInput = (event, name) => {
        setInputField({
            ...inputField, [name]: event.target.value
        })
    }

    const uploadImage = async (e, type) => {
        setLoader(true)
        console.log("Uploading")
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        // youtube-clone
        data.append('upload_preset', 'youtube-clone');
        try {
            // cloudName="dhlklhfgj"
            
            {/* Please watch the video for the code} */}




        } catch (err) {
            setLoader(false)
            console.log(err)
        }


    }
    
    useEffect(()=>{
        let isLogin = localStorage.getItem("userId");
        if(isLogin===null){
            navigate('/')
        }
    },[])
    console.log(inputField)
    const handleSubmitFunc = async()=>{
        {/* Please watch the video for the code} */}

    }

    

    return (
        <div className='videoUpload'>
            <div className="uploadBox">
                <div className="uploadVideoTitle">
                    <HiveIcon sx={{ fontSize: "54px", color: "red" }} />
                    Upload Video
                </div>

                <div className="uploadForm">
                
                <input type="text" value={inputField.title} onChange={(e)=>{handleOnChangeInput(e,'title')}} placeholder='Title of Video' className='uploadFormInputs'/>
                <input type="text" value={inputField.description} onChange={(e)=>{handleOnChangeInput(e,'description')}} placeholder='Description' className='uploadFormInputs'/>
                <input type="text" value={inputField.videoType}  onChange={(e)=>{handleOnChangeInput(e,'vedioType')}} placeholder='Category' className='uploadFormInputs'/>
                 <div>Thumbnail <input type='file' accept='image/*'/> </div>
                 <div>Video <input type='file' accept='video/mp4, video/webm, video/*'/> </div>

              

                    {
                    loader && <Box sx={{ display: 'flex' }}>
                                    <CircularProgress />
                                </Box>
                    }
                </div>

                
                

                <div className="uploadBtns">
                    <div className="uploadBtn-form" onClick={handleSubmitFunc}>Upload</div>
                    <Link to={'/'} className="uploadBtn-form">Home</Link>
                </div>

            </div>
        </div>
    )
}

export default VideoUpload