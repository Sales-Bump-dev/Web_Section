import React from "react";

import Logo from "../logo/Logo.component";
import { ReactComponent as FaceBookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as SnapchatIcon } from "../../assets/icons/snapchat.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__column footer__column-1">
          <Logo />
          <span className="detail footer__column-1-item">
            +234-810-000-0000
          </span>
          <span className="detail footer__column-1-item">info@zeus.co</span>
        </div>

        <div className=" footer__column footer__column-2">
          <span className="detail footer__column-2-item">Privacy Policy</span>
          <span className="detail footer__column-2-item">Terms of Service</span>
          <span className="detail footer__column-2-item">About Us</span>
        </div>

        <div className=" footer__column footer__column-3">
          <div className="signup_login">
            <span className="detail signup_login-login">LOG IN</span>
            <span className="detail signup_login-signup">SIGN UP</span>
          </div>
          <div className="socials">
            <FaceBookIcon />
            <SnapchatIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>

      <div className="courtesy">&copy; 2016 Zeus Ltd. All rights Reserved</div>
    </footer>
  );
};

export default Footer;
