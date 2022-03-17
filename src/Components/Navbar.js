import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    /*   <div>
      <Link to="/"> Home</Link>
      <Link to="/Menu"> Menu</Link>
      <Link to="/About"> About</Link>
      <Link to="/Contact">Contact</Link> 
    </div> */
    <div className="row">
      <div id="header" className="medium-12 columns">
        {/*   <!-- Top Bar Start--> */}
        <nav id="top" className="htop">
          <div className="container">
            <div className="row">
              <span className="drop-icon visible-sm visible-xs">
                <i className="fa fa-align-justify"></i>
              </span>
              <div className="pull-left flip left-top">
                <div className="links">
                  <ul>
                    <li className="mobile">
                      <i className="fa fa-phone"></i>+92 3046025395
                    </li>
                    <li className="email">
                      <i className="fa fa-envelope"></i>StylingBaks@gmail.com
                      {/*       <a href="mailto:info@marketshop.com">
                     
                      </a> */}
                    </li>
                    {/*    <li className="wrap_custom_block hidden-sm hidden-xs">
                      <a>
                        Custom Block<b></b>
                      </a>
                      <div className="dropdown-menu custom_block">
                        <ul>
                          <li>
                            <table>
                              <tbody>
                                <tr>
                                  <td>
                                    <img
                                      alt=""
                                      src="image/banner/cms-block.jpg"
                                    />
                                  </td>
                                  <td>
                                    <img
                                      alt=""
                                      src="image/banner/responsive.jpg"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h4>CMS Blocks</h4>
                                  </td>
                                  <td>
                                    <h4>Responsive Template</h4>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    This is a CMS block. You can insert any
                                    content (HTML, Text, Images) Here.
                                  </td>
                                  <td>
                                    This is a CMS block. You can insert any
                                    content (HTML, Text, Images) Here.
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <strong>
                                      <a
                                        className="btn btn-default btn-sm"
                                        href="#"
                                      >
                                        Read More
                                      </a>
                                    </strong>
                                  </td>
                                  <td>
                                    <strong>
                                      <a
                                        className="btn btn-default btn-sm"
                                        href="#"
                                      >
                                        Read More
                                      </a>
                                    </strong>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </li>
                        </ul>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div id="top-links" className="nav pull-right flip">
                <ul>
                  <li>
                    <a href="/#">Login</a>
                  </li>
                  <li>
                    <a href="/#">Register</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/*   <!-- Top Bar End-->
    <!-- Header Start--> */}
        <header className="header-row">
          <div className="container">
            <div className="table-container">
              {/*   <!-- Logo Start --> */}
              <div className="col-table-cell col-lg-6 col-md-6 col-sm-12 col-xs-12 inner">
                <div id="logo">
                  <img
                    className="img-responsive"
                    src="image/logo.png"
                    title="MarketShop"
                    alt="MarketShop"
                  />
                  {/*   <a href="index.html">
                 
                  </a> */}
                </div>
              </div>
              {/*    <!-- Logo End -->
          <!-- Mini Cart Start--> */}
              <div className="col-table-cell col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div id="cart">
                  <button
                    type="button"
                    data-toggle="dropdown"
                    data-loading-text="Loading..."
                    className="heading dropdown-toggle"
                  >
                    <span className="cart-icon pull-left flip"></span>
                    <span id="cart-total">2 item(s)</span>
                  </button>
                </div>
              </div>
              {/*    <!-- Mini Cart End-->
          <!-- Search Start--> */}
              {/*    <div className="col-table-cell col-lg-3 col-md-3 col-sm-6 col-xs-12 inner">
                <div id="search" className="input-group">
                  <input
                    id="filter_name"
                    type="text"
                    name="search"
                    value=""
                    placeholder="Search"
                    className="form-control input-lg"
                  />
                  <button type="button" className="button-search">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div> */}
              {/*       <!-- Search End--> */}
            </div>
          </div>
        </header>
        {/*     <!-- Header End-->
    <!-- Main Menu Start--> */}

        <nav id="menu" className="navbar">
          <div className="navbar-header">
            <span className="visible-xs visible-sm">
              Menu <b></b>
            </span>
          </div>
          <div className="container">
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/" className="home_link">
                    Home
                  </Link>
                  {/*    <a className="home_link" title="Home" href="index.html">
                    Home
                  </a> */}
                </li>
                <li>
                  <Link to="/About" className="home_link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="home_link">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/Category" className="home_link">
                    Category
                  </Link>
                </li>

                {/*   <li className="menu_brands dropdown">
                  <a href="#">Brands</a>
                  <div className="dropdown-menu">
                    <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6">
                      <a href="#">
                        <img
                          src="image/product/apple_logo-60x60.jpg"
                          title="Apple"
                          alt="Apple"
                        />
                      </a>
                      <a href="#">Apple</a>
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6">
                      <a href="#">
                        <img
                          src="image/product/canon_logo-60x60.jpg"
                          title="Canon"
                          alt="Canon"
                        />
                      </a>
                      <a href="#">Canon</a>
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6">
                      {" "}
                      <a href="#">
                        <img
                          src="image/product/hp_logo-60x60.jpg"
                          title="Hewlett-Packard"
                          alt="Hewlett-Packard"
                        />
                      </a>
                      <a href="#">Hewlett-Packard</a>
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6">
                      <a href="#">
                        <img
                          src="image/product/htc_logo-60x60.jpg"
                          title="HTC"
                          alt="HTC"
                        />
                      </a>
                      <a href="#">HTC</a>
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6">
                      <a href="#">
                        <img
                          src="image/product/palm_logo-60x60.jpg"
                          title="Palm"
                          alt="Palm"
                        />
                      </a>
                      <a href="#">Palm</a>
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6">
                      <a href="#">
                        <img
                          src="image/product/sony_logo-60x60.jpg"
                          title="Sony"
                          alt="Sony"
                        />
                      </a>
                      <a href="#">Sony</a>{" "}
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6">
                      <a href="#">
                        <img
                          src="image/product/canon_logo-60x60.jpg"
                          title="test"
                          alt="test"
                        />
                      </a>
                      <a href="#">test</a>{" "}
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6">
                      <a href="#">
                        <img
                          src="image/product/apple_logo-60x60.jpg"
                          title="test 3"
                          alt="test 3"
                        />
                      </a>
                      <a href="#">test 3</a>
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6">
                      <a href="#">
                        <img
                          src="image/product/canon_logo-60x60.jpg"
                          title="test 5"
                          alt="test 5"
                        />
                      </a>
                      <a href="#">test 5</a>{" "}
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6">
                      <a href="#">
                        <img
                          src="image/product/canon_logo-60x60.jpg"
                          title="test 6"
                          alt="test 6"
                        />
                      </a>
                      <a href="#">test 6</a>
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6">
                      <a href="#">
                        <img
                          src="image/product/apple_logo-60x60.jpg"
                          title="test 7"
                          alt="test 7"
                        />
                      </a>
                      <a href="#">test 7</a>{" "}
                    </div>
                  </div>
                </li> */}

                <li className="custom-link-right">
                  {/*    <a href="#" target="_blank">
               
                  </a> */}
                  CheckOut !
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/*  <!-- Main Menu End--> */}
      </div>
    </div>
  );
}

export default Navbar;
