import React from "react";
import logo from "../../logo.svg";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-4 col-xs-12">
              <div className="brand-logo">
                <a className="brand-logo" href="">
                  <img src={logo} alt="Teacher Portal" />
                </a>
              </div>
              <div className="footerSocial">
                <span className="footerSocial-text">Follow us on:</span>
                <span className="footerSocial-list">
                  <a href="">
                    <span className="fa fa-facebook-square"></span>
                  </a>
                  <a href="">
                    <span className="fa fa-twitter"></span>
                  </a>
                  <a href="">
                    <span className="fa fa-instagram"></span>
                  </a>
                  <a href="">
                    <span className="fa fa-rss"></span>
                  </a>
                </span>
              </div>
              <div className="footerInfo-office">
                <ul className="footerOffice">
                  <li>
                    <i className="fa fa-envelope icon"></i>{" "}
                    <a href="mailto:info@javatutorials.com">
                      info@teacherportal.com
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-phone icon"></i>
                    <a href="tel:+91-870-052-0073"> Contact No: 8700520073</a>
                  </li>
                  <li>
                    <i className="fa fa-map-marker"></i> Address - G-13, 2nd Floor,
                    Sec-3, <br />
                    Noida, UP, 201301, India
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-3 col-xs-12">
              <h4 className="footer-title">ABOUT US</h4>
              <ul className="footerNav">
                <li>
                  <a href="about.html">About </a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
                <li>
                  <a href="privacy.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="terms.html">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-sm-5 col-xs-12">
              <h4 className="footer-title">Services</h4>
              <div className="row">
                <div className="col-sm-4 col-xs-6">
                  <ul className="footerNav">
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 col-xs-6">
                  <ul className="footerNav">
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 col-xs-6">
                  <ul className="footerNav">
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                    <li>
                      <a href="">Teacher Portal Service</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="copyright text-center">
            © teacherportal 2021. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
