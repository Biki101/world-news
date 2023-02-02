import React from "react";
import { useSelector } from "react-redux";
import video from "../../video/featured.mp4";
import "./latest-article.styles.scss";
import EastIcon from "@mui/icons-material/East";
import MainSectionTitle from "../main-section-component/main-section-title/main-section.title";
import FirstArticle from "../reusable-component/first-article/FirstArticle";
import Tags from "../tags/Tags";

const LatestArticle = () => {
  const latestNews = useSelector((state) => state.popularPost.popularNews);
  return (
    <div className="latest-article-container">
      <div className="latest-article">
        <MainSectionTitle title="Latest Articles" />
        <div id="latest-articles-item">
          {latestNews.length
            ? latestNews
                .slice(0, 6)
                .map((item, indx) => <FirstArticle key={indx} article={item} />)
            : ""}
        </div>
      </div>
      <div className="featured">
        <MainSectionTitle title="Featured" />
        <div className="featured-item">
          <div className="video">
            <video
              width="300"
              height="180"
              src={video}
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowFullScreen
              // title="Embedded youtube"
              // sandbox
              controls
            ></video>
          </div>
          <div className="subscribe">
            <h3>Subscribe</h3>
            <p>
              Get all latest content delivered to your email a few times a
              month.
            </p>
            <div className="subscribe-mail link">
              <input type="text" placeholder="Email" />
              <EastIcon className="subscribe-icon" />
            </div>
          </div>
        </div>
        <div>
          <MainSectionTitle title="Tags" />
          <div className="tags">
            <Tags tag="Fashion" />
            <Tags tag="Sports" />
            <Tags tag="Books" />
            <Tags tag="Movies" />
            <Tags tag="Global" />
            <Tags tag="Politics" />
            <Tags tag="Health" />
            <Tags tag="Pandemic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestArticle;
