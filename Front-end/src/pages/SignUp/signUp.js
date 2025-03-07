import React, { useState } from 'react'
import './signUP.css';
import HiveIcon from '@mui/icons-material/Hive';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const SignUp = () => {
    const [uploadedImageUrl, setUploadedImageUrl] = useState("https://th.bing.com/th/id/OIP.tHA_ZcrrhsXzeNjbllQDrAHaHa?w=156&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7");
    const [singUpFiled, setSignUpField] = useState({ "channelName": "", "userName": "", "password": "", "about": "", "profilePic": uploadedImageUrl });
    const [progressBar,setProgressBar] = useState(false);
    const navigate = useNavigate();
    const handleInputFiled = (event, name) => {
        setSignUpField({
            ...singUpFiled, [name]: event.target.value
        })
    }
    console.log(singUpFiled)

    const uploadImage = async (e) => {
        console.log("Uploading")
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        // youtube-clone
        data.append('upload_preset', 'youtube-clone');
        try {
            // cloudName="dkyclz6il"
            setProgressBar(true)
            const response = await axios.post("https://api.cloudinary.com/v1_1/dkyclz6il/image/upload", data)
            setProgressBar(false)
            const imageUrl = response.data.url;
            setUploadedImageUrl(imageUrl);
            setSignUpField({
                ...singUpFiled, "profilePic": imageUrl
            })
        } catch (err) {
            console.log(err)
        }


    }
    const handleSignup = async () => {
        axios.post('http://localhost:4000/user/signup', singUpFiled).then((res) => {

            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

   

    return (
        <div className='signUp'>
            <div className="signup_card">
                <div className="signUp_title">
                    <HiveIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
                    SignUp
                </div>

                <div className="signUp_Inputs">

                <input type="text"  placeholder='Channel Name'onChange={(e)=>{handleInputFiled(e,'channelName')}} className='signUp_Inputs_inp'value={singUpFiled.channelName} />
                <input type="text" placeholder='User Name' onChange={(e)=>{handleInputFiled(e,'userName')}}  className='signUp_Inputs_inp'value={singUpFiled.userName}/>
                <input type="password" placeholder='Password' onChange={(e)=>{handleInputFiled(e,'password')}} className='signUp_Inputs_inp'value={singUpFiled.password}/>
                <input type="text" placeholder='About your channel' onChange={(e)=>{handleInputFiled(e,'about')}} className='signUp_Inputs_inp'value={singUpFiled.about}/>

                    
                  
                  ----------------------------------

                  <div className="image_upload_signup">
                        <input type='file' onChange={(e) => uploadImage(e)} />
                        <div className='image_upload_signup_div'>
                            <img className='image_default_signUp' src={uploadedImageUrl} />
                        </div>
                    </div>


                    <div className="signUpBtns">
                        <div className="signUpBtn" onClick={handleSignup}>SignUp</div>
                        <Link to={'/'} className="signUpBtn">Home Page</Link>

                    </div>

                    {progressBar && <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>}

                </div>

            </div>
            <ToastContainer />
        </div>
    )
}

export default SignUp