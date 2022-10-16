import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="leftFooter">
        <h4> Download Our App</h4>
        <p>Download Our App form Android and IOS phone</p>
        <img src={playStore} alt="playstore"></img>
        <img src={appStore} alt="Appstore"></img>
      </div>

      <div class="midFooter">
        <h1>E-Commerce</h1>
        <p>High Quality is my first Priority</p>
        <p>Copyrights 2022 &copy; ShubhamVerma</p>
      </div>

      <div class="rightFooter">
        <h4>Follow me</h4>
        <a href="https://github.com/shubh-verma">Github</a>
        <a href="https://www.instagram.com/shubh_vrma/">Instagram</a>
        <a href="https://www.facebook.com/shubham.verma.5074644/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
