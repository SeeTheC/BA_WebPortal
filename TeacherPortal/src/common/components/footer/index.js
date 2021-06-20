import React from "react";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer-top footer-map">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="footer-logo">
                    <a className="footerLogo-link" href="">
                      <img src="" alt="" />
                    </a>
                  </div>
                  <div className="footerInfo-office">
                    <ul className="footerOffice">
                      <li>
                        <i className="fa fa-map-marker"></i>{" "}
                        <strong>Registered Address</strong>
                        <br />
                        {/* <span style="font-size: 14px;">
                          2637 E Atlantic Blvd #23519
                          <br />
                          Pompano Beach, FL 33062, Florida
                        </span> */}
                      </li>
                      <li>
                        <i className="fa fa-phone icon"></i>
                        <a href="tel:866-455-6753">
                          {" "}
                          <strong>Call : XXX-455-6753</strong>
                        </a>
                      </li>
                      <li>
                        <i className="fa fa fa-comment icon"></i>
                        <a href="">
                          {" "}
                          <strong>Contact Support</strong>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <h4 className="footer-title">Popular</h4>
                  <div className="title-line">
                    <div className="dot-left"></div>
                    <div className="dot-line"></div>
                    <div className="dot-right"></div>
                  </div>
                  <ul className="footerNav">
                    <li>
                      <a href="">QuickBooks Hosting</a>
                    </li>
                    <li>
                      <a href="">QuickBooks POS Online</a>
                    </li>
                    <li>
                      <a href="">QuickBooks Enterprise Hosting</a>
                    </li>
                    <li>
                      <a href="">Sage Application Hosting</a>
                    </li>
                    <li>
                      <a href="">Private Server Hosting</a>
                    </li>
                    <li>
                      <a href="">Managed Server Hosting</a>
                    </li>
                    <li>
                      <a href="">Hosted Virtual Desktop</a>
                    </li>
                    <li>
                      <a href="">See All Cloud Solutions</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <h4 className="footer-title">Company</h4>
                  <div className="title-line">
                    <div className="dot-left"></div>
                    <div className="dot-line"></div>
                    <div className="dot-right"></div>
                  </div>
                  <ul className="footerNav">
                    <li>
                      <a href="">About Us</a>
                    </li>
                    <li>
                      <a href="">Our Leadership</a>
                    </li>
                    <li>
                      <a href="">Data Centers</a>
                    </li>
                    <li>
                      <a href="">Partner Program</a>
                    </li>
                    <li>
                      <a href="">Success Stories</a>
                    </li>
                    <li>
                      <a href="">Blog</a>
                    </li>
                    <li>
                      <a href="">Knowledge Base</a>
                    </li>
                    <li>
                      <a href="">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <h4 className="footer-title">Get Started</h4>
                  <div className="title-line">
                    <div className="dot-left"></div>
                    <div className="dot-line"></div>
                    <div className="dot-right"></div>
                  </div>
                  <ul className="footerNav">
                    <li>
                      <a href="">Plans & Pricing</a>
                    </li>
                    <li>
                      <a href="">Special Offers</a>
                    </li>
                    <li>
                      <a href="">10 Days Free Trial</a>
                    </li>
                    <li>
                      <a href="">QuickBooks Hosting Live </a>
                    </li>
                    <li>
                      <a href="">Demo</a>
                    </li>
                    <li>
                      <a href="">FREE Remote Access</a>
                    </li>
                    <li>
                      <a href="">Demo</a>
                    </li>
                    <li>
                      <a href="">Switch & Save</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="footer-copyright">
                <div className="row">
                  <div className="col-sm-8">
                    <div className="copyright">
                      Copyright © 2019 <a href="">Teacher Portal</a> - All rights
                      reserved.
                    </div>
                    <div className="disclaimer-text">
                      Teacher Portal is solely responsible for the provision of
                      all services on this website.
                      <br />
                      Disclaimer
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="payment-icon">
                      <div className="pay-icon">
                        <img
                          src="static/images/paypal.png"
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                      <div className="pay-icon">
                        <img
                          src="static/images/visa.png"
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                      <div className="pay-icon">
                        <img
                          src="static/images/master-card.png"
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                      <div className="pay-icon">
                        <img
                          src="static/images/american-express.png"
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="row">
                <div className="col-md-8">
                  <ul className="nav nav-footer">
                    <li>
                      <a href="">Cookie Policy</a>
                    </li>
                    <li>
                      <a href="">Privacy</a>
                    </li>
                    <li>
                      <a href="">Policy</a>
                    </li>
                    <li>
                      <a href="">Site Map</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <div className="footerSocial">
                    <span className="footerSocial-list">
                      <a href="">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a href="">
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a href="">
                        <span className="fa fa-youtube-play"></span>
                      </a>
                      <a href="">
                        <span className="fa fa-linkedin"></span>
                      </a>
                      <a href="" className="last">
                        <span className="fa fa-whatsapp"></span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
