import React from "react";
import logo from "../../images/logo-footer.png";
import "./Footer.css";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { MdRssFeed } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row  mt-5 col-md-12">
        <div className="col-md-3 mt-5">
          <img src={logo} alt="" height={55} />
          <p>
            Crafting Software Products For <br /> Today and Tomorrow.
          </p>
        </div>
        <div className="col-md-3 mt-5">
          <h6>USEFUL LINKS</h6>
          <p>Why Incubyte</p>
          <p>Events</p>
          <p>Inspiration!</p>
        </div>
        <div className="col-md-3 mt-5">
          <h6>SERVICES</h6>
          <p>Software Development</p>
          <p>Software Modernization</p>
        </div>
        <div className="col-md-3 mt-5">
          <h6>CONTACT US</h6>
          <p>Let’s Get Started</p>
          <p>Work With Us</p>
        </div>
        <div className="copyright mt-5">
          <p>hello@incubyte.co | +91-9825096458</p>
          <p>© 2020 Incubyte. All rights reserved.</p>

          <div className="col-lg-6 col-lg-6 mx-auto">
            <h3 className="socia">
              <FaLinkedinIn />
              <FaTwitter />
              <AiFillGithub />
              <MdRssFeed />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
