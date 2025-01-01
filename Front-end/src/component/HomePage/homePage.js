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
              src="https://tse4.mm.bing.net/th?id=OIP.BUpGC1u3bk5uynJISQlnGgHaGx&pid=Api&P=0&h=220"
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
            <div className="youtube_vedioTitle">Video Title 1</div>
            <div className="youtube_channelName">Channel Name 1</div>
            <div className="youtubeVedio_veiws">3 likes</div>
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
            <div className="youtube_vedioTitle">Video Title 2</div>
            <div className="youtube_channelName">Channel Name 2</div>
            <div className="youtubeVedio_veiws">5 likes</div>
          </div>
        </Link>

        {/* Video 3 */}
        <Link to={`/watch/3`} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img
              src="https://yt3.googleusercontent.com/nuauwuN8sxUEDQxXD9TLLYW7JJ1VHgGOPbZgY4JboCWwLGxjbFt-JS_3zWElI3Shw-awxBQ6=s900-c-k-c0x00ffffff-no-rj"
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
            <div className="youtube_vedioTitle">Video Title 3</div>
            <div className="youtube_channelName">Channel Name 3</div>
            <div className="youtubeVedio_veiws">8 likes</div>
          </div>
        </Link>

 {/* Video 4 */}
 <Link to={`/watch/3`} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img
              src="https://yt3.googleusercontent.com/nuauwuN8sxUEDQxXD9TLLYW7JJ1VHgGOPbZgY4JboCWwLGxjbFt-JS_3zWElI3Shw-awxBQ6=s900-c-k-c0x00ffffff-no-rj"
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
            <div className="youtube_vedioTitle">Video Title 3</div>
            <div className="youtube_channelName">Channel Name 3</div>
            <div className="youtubeVedio_veiws">8 likes</div>
          </div>
        </Link>
        {/* Duplicate this block as needed for additional videos */}
      </div>
    </div>
  );
};

export default HomePage;
