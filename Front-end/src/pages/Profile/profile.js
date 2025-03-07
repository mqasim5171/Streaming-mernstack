import React, { useState, useEffect } from 'react'
import './profile.css';
import SideNavbar from '../../component/SideNavbar/sideNavbar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { response } from 'express';

const Profile = ({ sideNavbar }) => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);
    const fetchProfileData = async () => {
        axios.get(`http://localhost:4000/user/${id}/channel`).then((res) => {
            console.log(response)
            setData(response.data.video)
            setUser(response.data.user)
        }).catch((err) => {
            console.log(err)
        })

    }
    useEffect(() => {
        fetchProfileData()
    }, [])

    return (
        <div className='profile'>
            <SideNavbar sideNavbar={sideNavbar} />

            <div className={sideNavbar ? "profile_page" : "profile_page_inactive"}>

                <div className="profile_top_section">
                    <div className="profile_top_section_profile">
                        <img className='profile_top_section_img' src="https://th.bing.com/th/id/OIF.kEPz1KiRN3Gln6Z4UPL4BA?w=339&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                    </div>

                    <div className="profile_top_section_About">
                      <div className="profile_top_section_About_Name">Apna web channnel </div>
                        <div className="profile_top_section_info">
                         @AYESHA1 . 4 Videos

                    </div>
                    <div className="profile_top_section_info">
                         About section of channel
                         
                    </div>
                 </div>
             </div>

                <div className="profile_videos">
                    <div className="profile_videos_title">Videos &nbsp; <ArrowRightIcon /></div>

                    <div className="profileVideos">
                     





                     
                      <Link to={'/watch/8998'} className="profileVideo_block">
                        <div className="profileVideo_block_thumbnail">
                            <img className='profileVideo_block_thumbnail_img' src="https://th.bing.com/th/id/OIP.I7-Kp6ayUzLQuonE6-rrlAAAAA?w=156&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7">
                            </img>
                            </div>

                        <div className="profileVideo_block_detail_name">FUNNY CATS clips</div>
                             <div className="profileVideo_block_detail_about">created 2 days ago</div>

                      </Link>

                      <Link to={'/watch/8998'} className="profileVideo_block">
                        <div className="profileVideo_block_thumbnail">
                            <img className='profileVideo_block_thumbnail_img' src="https://th.bing.com/th/id/OIP.UYpQSmFyl1hPJeSTj6qDVAHaDt?w=301&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7">
                            </img>
                        </div>

                        <div className="profileVideo_block_detail_name">full web development course</div>

                        <div className="profileVideo_block_detail_about">20 mints ago</div>

                      </Link>

                      <Link to={'/watch/8998'} className="profileVideo_block">
                        <div className="profileVideo_block_thumbnail">
                            <img className='profileVideo_block_thumbnail_img' src="https://th.bing.com/th/id/OIF.xRofPj55xEbEiLkB4Tw8VA?w=202&h=266&c=7&r=0&o=5&dpr=1.3&pid=1.7">
                            </img>
                        </div>

                        <div className="profileVideo_block_detail_name">easy colouring art</div>

                        <div className="profileVideo_block_detail_about">created 1 year ago</div>

                      </Link>


                      <Link to={'/watch/8998'} className="profileVideo_block">
                        <div className="profileVideo_block_thumbnail">
                            <img className='profileVideo_block_thumbnail_img' src="https://th.bing.com/th/id/OIP.jmbodHM-aWXvu4Wn_6A-XQHaEK?w=329&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7">
                            </img>
                        </div>

                        <div className="profileVideo_block_detail_name">cooking with me </div>

                        <div className="profileVideo_block_detail_about">created 20 mints ago</div>

                      </Link>




                        {
                            data.map((item, key) => {
                                return (
                                    <Link to={`/watch/${item._id}`} className="profileVideo_block">
                                        {/* Please watch the video for the code} */}
                                    </Link>
                                );
                            })
                        }








                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile