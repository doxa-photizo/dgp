import React from 'react';
import '../Style/Footer.css';
import { MdFacebook, MdFavorite } from 'react-icons/md'; // Only import what you use

const Footer = () => {
  return (
    <div className="footer-area footer-padding">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="single-footer-caption mb-30">
                {/* logo */}
                <div className="footer-logo mb-35">
                  <a href="index.html">
                    <img src="assets/img/logo/logo2_footer.png" alt="Logo" />
                  </a>
                </div>
                <div className="footer-tittle">
                  <div className="footer-pera">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </div>
                  <ul className="mb-40">
                    <li className="number">
                      <a href="#">(80) 783 367-3904</a>
                    </li>
                    <li className="number2">
                      <a href="#">(80) 783 367-3904</a>
                    </li>
                  </ul>
                </div>

                {/* Only Facebook social icon */}
                <div className="footer-social">
                  <a href="https://bit.ly/sai4ull" target="_blank" rel="noopener noreferrer">
                    <MdFacebook size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Our solutions</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer-bottom area */}
      <div className="footer-bottom-area">
        <div className="container">
          <div className="footer-border">
            <div className="row align-items-center">
              <div className="col-xl-12">
                <div className="footer-copy-right text-right">
                  <p>
                    Copyright &copy; {new Date().getFullYear()} All rights reserved |
                    This template is made with <MdFavorite color="red" /> by
                    <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer"> Colorlib</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
