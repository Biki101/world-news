import React, { useEffect, useState } from "react";
import WelcomeNewsContent from "./welcome-news-content/WelcomeNewsContent";
import "./welcome-news.styles.scss";

const WelcomeNews = () => {
  const [welcomeData, setWelcomeData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ"
    )
      .then((res) => res.json())
      .then((data) => {
        let a = [];
        for (let i = 0; a.length < 4; i++) {
          if (data.results[i].multimedia !== null) {
            a.push(data.results[i]);
          }
        }
        setWelcomeData(a);
      });
  }, []);

  return (
    <>
      {welcomeData.length ? (
        <div className="welcome-news">
          <div
            className="welcome-gallery"
            id="sports"
            style={{
              backgroundImage: `url(${welcomeData[0].multimedia[1].url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <WelcomeNewsContent
              category={welcomeData[0].byline}
              items={welcomeData[0]}
            />
          </div>
          <div
            className="welcome-gallery"
            id="celebrities"
            style={{
              backgroundImage: `url(${welcomeData[1].multimedia[1].url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <WelcomeNewsContent
              category={welcomeData[1].byline}
              items={welcomeData[1]}
            />
          </div>
          <div
            className="welcome-gallery"
            id="movies"
            style={{
              backgroundImage: `url(${welcomeData[2].multimedia[1].url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <WelcomeNewsContent
              category={welcomeData[2].byline}
              items={welcomeData[2]}
            />
          </div>
          <div
            className="welcome-gallery"
            id="books"
            style={{
              backgroundImage: `url(${welcomeData[3].multimedia[1].url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <WelcomeNewsContent
              category={welcomeData[3].byline}
              items={welcomeData[3]}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default WelcomeNews;
