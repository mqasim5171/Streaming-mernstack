import React, { useEffect, useState } from 'react';
import './homePage.css';
import { Link } from 'react-router-dom';

const HomePage = ({ sideNavbar }) => {
  const options = [
    "All", "Twenty20 Cricket", "Music", "Live", "Mixes", "Gaming", 
    "Debates", "Coke Studio Pakistan", "Democracy", "Pakistani dramas", 
    "Comedy", "Pakistani dramas", "Comedy", "Pakistani dramas", "Comedy"
  ];

  return (
    <div className={sideNavbar ? 'homePage' : 'fullHomePage'}>
      {/* Options Section */}
      <div className="homePage_options">
        {options.map((item, index) => (
          <div key={index} className="homePage_option">
            {item}
          </div>
        ))}
      </div>

      {/* Main Content Section */}
      <div className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}>
        {/* Video 1 */}
        <Link to={`/watch/1`} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img
              src="https://th.bing.com/th/id/OIP.x7Eo0ZfbFLxmkZiY47kHpgHaFb?w=192&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>
          <div className="youtubeTitleBoxProfile">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.BUpGC1u3bk5uynJISQlnGgHaGx&pid=Api&P=0&h=220"
              alt="Profile"
              className="youtube_thumbnail_profile"
            />
          </div>
          <div className="youtubeTitleBox_Title">
            <div className="youtube_vedioTitle">Zindagi gulzar ha</div>
            <div className="youtube_channelName">PAK DRAMA</div>
            <div className="youtubeVedio_veiws">40M likes</div>
          </div>
        </Link>

        {/* Video 2 */}
        <Link to={`/watch/2`} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.P-6m1ZFVZdpGopE6z3Jv5gHaEc&pid=Api&P=0&h=220"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">22:15</div>
          </div>
          <div className="youtubeTitleBoxProfile">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.P-6m1ZFVZdpGopE6z3Jv5gHaEc&pid=Api&P=0&h=220"
              alt="Profile"
              className="youtube_thumbnail_profile"
            />
          </div>
          <div className="youtubeTitleBox_Title">
            <div className="youtube_vedioTitle">WEB DEVEOPLMENT Tutorial</div>
            <div className="youtube_channelName">coding with us</div>
            <div className="youtubeVedio_veiws">10k likes</div>
          </div>
        </Link>

        {/* Video 3 */}
        <Link to={`/watch/3`} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img
              src="https://th.bing.com/th/id/OIP.76SCPbXfSOjv8aeMdDADngHaFj?w=231&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">30:45</div>
          </div>
          <div className="youtubeTitleBoxProfile">
            <img
              src="https://yt3.googleusercontent.com/nuauwuN8sxUEDQxXD9TLLYW7JJ1VHgGOPbZgY4JboCWwLGxjbFt-JS_3zWElI3Shw-awxBQ6=s160-c-k-c0x00ffffff-no-rj"
              alt="Profile"
              className="youtube_thumbnail_profile"
            />
          </div>
          <div className="youtubeTitleBox_Title">
            <div className="youtube_vedioTitle">Dora the Explora cartoon</div>
            <div className="youtube_channelName">car2oons</div>
            <div className="youtubeVedio_veiws">8k likes</div>
          </div>
        </Link>

 {/* Video 4 */}
 <Link to={`/watch/4`} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img
              src="https://th.bing.com/th/id/OIP.VFpS6Qo-AkQQ8IyO0IE4zwHaE2?w=900&h=590&rs=1&pid=ImgDetMain"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">30:45</div>
          </div>
          <div className="youtubeTitleBoxProfile">
            <img
              src="https://th.bing.com/th/id/OIP.VFpS6Qo-AkQQ8IyO0IE4zwHaE2?w=900&h=590&rs=1&pid=ImgDetMain"
              alt="Profile"
              className="youtube_thumbnail_profile"
            />
          </div>
          <div className="youtubeTitleBox_Title">
            <div className="youtube_vedioTitle">beginners level painting </div>
            <div className="youtube_channelName">MY ART</div>
            <div className="youtubeVedio_veiws">80 likes</div>
          </div>
        </Link>

        <Link to={`/watch/5`} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img
              src="https://th.bing.com/th/id/OIP.SqTz07SbYpYzda4F9zW6uQHaEK?w=312&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">30:45</div>
          </div>
          <div className="youtubeTitleBoxProfile">
            <img
              src="https://th.bing.com/th/id/OIP.tuVF7tPqgrIRzn7caNescgHaLG?w=121&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Profile"
              className="youtube_thumbnail_profile"
            />
          </div>
          <div className="youtubeTitleBox_Title">
            <div className="youtube_vedioTitle">5 mints easy cooking</div>
            <div className="youtube_channelName">Cooking with me</div>
            <div className="youtubeVedio_veiws">80 likes</div>
          </div>
        </Link>


        <Link to={`/watch/6`} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img
              src="https://th.bing.com/th/id/OIP.ShnYZcubhfQIJcUR0iO9TAHaEJ?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">30:45</div>
          </div>
          <div className="youtubeTitleBoxProfile">
            <img
              src="https://th.bing.com/th/id/OIP.ShnYZcubhfQIJcUR0iO9TAHaEJ?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Profile"
              className="youtube_thumbnail_profile"
            />
          </div>
          <div className="youtubeTitleBox_Title">
            <div className="youtube_vedioTitle">Baking recipes</div>
            <div className="youtube_channelName">Bake a cake</div>
            <div className="youtubeVedio_veiws">100 likes</div>
          </div>
        </Link>


        {/* Duplicate this block as needed for additional videos */}
      </div>
    </div>
  );
};

export default HomePage;
