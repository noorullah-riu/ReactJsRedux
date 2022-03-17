import React from "react";

function Footer() {
  return (
    <>
       <div id="footer">
        <div className="fpart-first">
          <div className="container">
            <div className="row">
              <div className="contact col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <h5>About StylingBaks</h5>
                <p>
                  StylingBaks One of it Kind Focusing On Client Needs, bringning
                  All origionals to your very dorr step.
                </p>
                <img alt="" src="image/logo-small.png" />
              </div>
              <div className="column col-lg-2 col-md-2 col-sm-3 col-xs-12">
                <h5>Information</h5>
                <ul>
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="about-us.html">Delivery Information</a>
                  </li>
                  <li>
                    <a href="about-us.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="about-us.html">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
              <div className="column col-lg-2 col-md-2 col-sm-3 col-xs-12">
                <h5>Customer Service</h5>
                <ul>
                  <li>
                    <a href="contact-us.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                  <li>
                    <a href="sitemap.html">Site Map</a>
                  </li>
                </ul>
              </div>
              <div className="column col-lg-2 col-md-2 col-sm-3 col-xs-12">
                <h5>Extras</h5>
                <ul>
                  <li>
                    <a href="#">Brands</a>
                  </li>
                  <li>
                    <a href="#">Gift Vouchers</a>
                  </li>
                  <li>
                    <a href="#">Affiliates</a>
                  </li>
                  <li>
                    <a href="#">Specials</a>
                  </li>
                </ul>
              </div>
              <div className="column col-lg-2 col-md-2 col-sm-3 col-xs-12">
                <h5>My Account</h5>
                <ul>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Order History</a>
                  </li>
                  <li>
                    <a href="#">Wish List</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="fpart-second">
          <div className="container">
            <div id="powered" className="clearfix">
              <div className="powered_text pull-left flip">
                <p>
                  StylingBaks Ecommerce WebApp | Developed By
                  <a href="#" target="_blank">
                    --Noor--
                  </a>
                </p>
              </div>
              <div className="social pull-right flip">
                <a href="#" target="_blank">
                  <img
                    data-toggle="tooltip"
                    src="image/socialicons/facebook.png"
                    alt="Facebook"
                    title="Facebook"
                  />
                </a>
                <a href="#" target="_blank">
                  <img
                    data-toggle="tooltip"
                    src="image/socialicons/instagram.png"
                    alt="Twitter"
                    title="Twitter"
                  />
                </a>
                <a href="#" target="_blank">
                  <img
                    data-toggle="tooltip"
                    src="image/socialicons/google_plus.png"
                    alt="Google+"
                    title="Google+"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default Footer;
