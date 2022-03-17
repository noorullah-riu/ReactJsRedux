import React from "react";

function Home() {
  return (
    <div id="container">
      <div className="container">
        <ul className="breadcrumb">
          <li>
            <a href="index.html">
              <i className="fa fa-home"></i>
            </a>
          </li>
          <li>
            <a href="contact-us.html">Contact Us</a>
          </li>
        </ul>
        <div className="row">
          <div id="content" className="col-sm-9">
            <h1 className="title">Contact Us</h1>

            <form className="form-horizontal">
              <fieldset>
                <h3 className="subtitle">Send us an Email</h3>
                <div className="form-group required">
                  <label
                    className="col-md-2 col-sm-3 control-label"
                    for="input-name"
                  >
                    Your Name
                  </label>
                  <div className="col-md-10 col-sm-9">
                    <input
                      type="text"
                      name="name"
                      value=""
                      id="input-name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group required">
                  <label
                    className="col-md-2 col-sm-3 control-label"
                    for="input-email"
                  >
                    E-Mail Address
                  </label>
                  <div className="col-md-10 col-sm-9">
                    <input
                      type="text"
                      name="email"
                      value=""
                      id="input-email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group required">
                  <label
                    className="col-md-2 col-sm-3 control-label"
                    for="input-enquiry"
                  >
                    Enquiry
                  </label>
                  <div className="col-md-10 col-sm-9">
                    <textarea
                      name="enquiry"
                      rows="10"
                      id="input-enquiry"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
              </fieldset>
              <div className="buttons">
                <div className="pull-right">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
            </form>
          </div>
          <aside id="column-right" className="col-sm-3 hidden-xs">
            <div className="list-group">
              <h2 className="subtitle">Custom Content</h2>
              <p>
                This is a CMS block edited from admin. You can insert any
                content (HTML, Text, Images) Here.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="banner owl-carousel">
              <div className="item">
                <a href="#">
                  <img
                    src="image/banner/small-banner1-265x350.jpg"
                    alt="small banner"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img
                    src="image/banner/small-banner-265x350.jpg"
                    alt="small banner1"
                    className="img-responsive"
                  />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Home;
