import React from "react";
import MainSectionTitle from "../main-section-component/main-section-title/main-section.title";
import "./stay-connected.styles.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const StayConnected = () => {
  return (
    <div className="stay-connected-container">
      <MainSectionTitle title="Stay Connected" />
      <div className="connection-container">
        <div className="connection-item">
          <div className="follower-num">
            <FacebookIcon id="fb" className="icon" />
            <p className="">6879 Fans</p>
          </div>
          <strong>Like</strong>
        </div>
        <div className="connection-item">
          <div className="follower-num">
            <TwitterIcon id="twt" className="icon" />
            <p className="">6879 Followers</p>
          </div>
          <strong>Follow</strong>
        </div>
        <div className="connection-item">
          <div className="follower-num">
            <YouTubeIcon id="yt" className="icon" />
            <p className="">6879 Subscribers</p>
          </div>
          <strong>Subscribe</strong>
        </div>
      </div>
    </div>
  );
};

export default StayConnected;
