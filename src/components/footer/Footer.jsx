import React, { useEffect } from "react";
import "./footer.styles.scss";
import logo from "../../img/logo.png";

import { BsFacebook, BsPinterest, BsTwitter, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import PopularPost from "../popular-post/PopularPost";
import { useDispatch, useSelector } from "react-redux";
import { popPopularPost } from "../../redux/action/action";

const Footer = () => {
  const dispatch = useDispatch();
  // Popular News
  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ"
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(popPopularPost(data.results));
      });
  }, []);

  const popNews = useSelector((state) => state.popularPost.popularNews);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-items container">
          <div className="footer-item">
            <img className="logo2" src={logo} alt="error loading image" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              modi dicta dolorem optio laborum molestiae.
            </p>
            <br />
            <p>Any questions? Call us on (+1) 96 716 6879</p>
            <div className="footer-link">
              <span className="link">
                <BsFacebook />
              </span>
              <span className="link">
                <BsTwitter />
              </span>
              <span className="link">
                <AiFillInstagram />
              </span>
              <span className="link">
                <BsYoutube />
              </span>
              <span className="link">
                <BsPinterest />
              </span>
            </div>
          </div>
          <div>
            <h3>Popular Post</h3>
            <div id="footPopContainer">
              {popNews.slice(0, 3).map((item, index) => (
                <PopularPost key={index} item={item} />
              ))}
            </div>
          </div>
          <div className="footer-item">
            <h3>Categories</h3>
            <ul className="foot-link">
              <li className="link">Sports</li>
              <li className="link">Movies</li>
              <li className="link">Celibrities</li>
              <li className="link">Books</li>
              <li className="link">World-Wide</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div id="copyright" className="container">
          Copyright <strong>&copy;</strong> 2023 WorldNews All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
