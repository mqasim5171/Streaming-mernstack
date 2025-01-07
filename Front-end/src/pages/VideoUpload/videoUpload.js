import React, { useState, useEffect } from "react";
import "./videoUpload.css";
import HiveIcon from "@mui/icons-material/Hive";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const VideoUpload = () => {
    const [inputField, setInputField] = useState({
        title: "",
        description: "",
        videoLink: "",
        thumbnail: "",
        videoType: "",
    });
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const handleOnChangeInput = (event, name) => {
        setInputField({
            ...inputField,
            [name]: event.target.value,
        });
    };

    const uploadImage = async (e, type) => {
        setLoader(true);
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "youtube-clone");
        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dkyclz6il/upload`,
                data
            );
            setLoader(false);
            const url = response.data.secure_url;
            setInputField({
                ...inputField,
                [type === "image" ? "thumbnail" : "videoLink"]: url,
            });
            console.log(`${type} uploaded successfully:`, url);
        } catch (err) {
            setLoader(false);
            console.error("Upload Error:", err.message);
        }
    };

    useEffect(() => {
        const isLogin = localStorage.getItem("userId");
        console.log("User ID:", isLogin); // Debugging
        if (!isLogin) {
            alert("Please log in to upload videos.");
            navigate("/");
        }
    }, [navigate]);

    const handleSubmitFunc = async () => {
        if (!inputField.title || !inputField.description || !inputField.videoLink) {
            alert("Please fill in all required fields.");
            return;
        }
        setLoader(true);
        try {
            const response = await axios.post(
                "http://localhost:4000/videos/upload",
                inputField,
                { withCredentials: true }
            );
            setLoader(false);
            alert("Video uploaded successfully!");
            navigate("/");
        } catch (err) {
            setLoader(false);
            console.error("Error during video upload:", err.response ? err.response.data : err.message);
            alert("Failed to upload video. Please try again.");
        }
    };

    return (
        <div className="videoUpload">
            <div className="uploadBox">
                <div className="uploadVideoTitle">
                    <HiveIcon sx={{ fontSize: "54px", color: "red" }} />
                    Upload Video
                </div>
                <div className="uploadForm">
                    <input
                        type="text"
                        value={inputField.title}
                        onChange={(e) => handleOnChangeInput(e, "title")}
                        placeholder="Title of Video"
                        className="uploadFormInputs"
                    />
                    <input
                        type="text"
                        value={inputField.description}
                        onChange={(e) => handleOnChangeInput(e, "description")}
                        placeholder="Description"
                        className="uploadFormInputs"
                    />
                    <input
                        type="text"
                        value={inputField.videoType}
                        onChange={(e) => handleOnChangeInput(e, "videoType")}
                        placeholder="Category"
                        className="uploadFormInputs"
                    />
                    <div>
                        Thumbnail{" "}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => uploadImage(e, "image")}
                        />{" "}
                    </div>
                    <div>
                        Video{" "}
                        <input
                            type="file"
                            accept="video/mp4, video/webm, video/*"
                            onChange={(e) => uploadImage(e, "video")}
                        />
                    </div>
                    {loader && (
                        <Box sx={{ display: "flex" }}>
                            <CircularProgress />
                        </Box>
                    )}
                </div>
                <div className="uploadBtns">
                    <div className="uploadBtn-form" onClick={handleSubmitFunc}>
                        Upload
                    </div>
                    <Link to={"/"} className="uploadBtn-form">
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VideoUpload;
