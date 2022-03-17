import React from "react";

function Menu() {
  return (
    <div id="container">
      <div className="container">
        <ul className="breadcrumb">
          <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
            <a href="index.html" itemprop="url">
              <span itemprop="title">
                <i className="fa fa-home"></i>
              </span>
            </a>
          </li>
          <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
            <a href="category.html" itemprop="url">
              <span itemprop="title">Electronics</span>
            </a>
          </li>
          <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
            <a href="product.html" itemprop="url">
              <span itemprop="title">Laptop Silver black</span>
            </a>
          </li>
        </ul>
        <div className="row">
          <div id="content" className="col-sm-9">
            <div itemscope itemtype="http://schema.org/Product">
              <h1 className="title" itemprop="name">
                Laptop Silver black
              </h1>
              <div className="row product-info">
                <div className="col-sm-6">
                  <div className="image">
                    <img
                      className="img-responsive"
                      itemprop="image"
                      id="zoom_01"
                      src="image/product/macbook_air_1-350x525.jpg"
                      title="Laptop Silver black"
                      alt="Laptop Silver black"
                      data-zoom-image="image/product/macbook_air_1-600x900.jpg"
                    />{" "}
                  </div>
                  <div className="center-block text-center">
                    <span className="zoom-gallery">
                      <i className="fa fa-search"></i> Click image for Gallery
                    </span>
                  </div>
                  <div className="image-additional" id="gallery_01">
                    {" "}
                    <a
                      className="thumbnail"
                      href="#"
                      data-zoom-image="image/product/macbook_air_1-600x900.jpg"
                      data-image="image/product/macbook_air_1-350x525.jpg"
                      title="Laptop Silver black"
                    >
                      {" "}
                      <img
                        src="image/product/macbook_air_1-66x99.jpg"
                        title="Laptop Silver black"
                        alt="Laptop Silver black"
                      />
                    </a>{" "}
                    <a
                      className="thumbnail"
                      href="#"
                      data-zoom-image="image/product/macbook_air_4-600x900.jpg"
                      data-image="image/product/macbook_air_4-350x525.jpg"
                      title="Laptop Silver black"
                    >
                      <img
                        src="image/product/macbook_air_4-66x99.jpg"
                        title="Laptop Silver black"
                        alt="Laptop Silver black"
                      />
                    </a>{" "}
                    <a
                      className="thumbnail"
                      href="#"
                      data-zoom-image="image/product/macbook_air_2-600x900.jpg"
                      data-image="image/product/macbook_air_2-350x525.jpg"
                      title="Laptop Silver black"
                    >
                      <img
                        src="image/product/macbook_air_2-66x99.jpg"
                        title="Laptop Silver black"
                        alt="Laptop Silver black"
                      />
                    </a>{" "}
                    <a
                      className="thumbnail"
                      href="#"
                      data-zoom-image="image/product/macbook_air_3-600x900.jpg"
                      data-image="image/product/macbook_air_3-350x525.jpg"
                      title="Laptop Silver black"
                    >
                      <img
                        src="image/product/macbook_air_3-66x99.jpg"
                        title="Laptop Silver black"
                        alt="Laptop Silver black"
                      />
                    </a>{" "}
                  </div>
                </div>
                <div className="col-sm-6">
                  <ul className="list-unstyled description">
                    <li>
                      <b>Brand:</b>{" "}
                      <a href="#">
                        <span itemprop="brand">Apple</span>
                      </a>
                    </li>
                    <li>
                      <b>Product Code:</b>{" "}
                      <span itemprop="mpn">Product 17</span>
                    </li>
                    <li>
                      <b>Reward Points:</b> 700
                    </li>
                    <li>
                      <b>Availability:</b>{" "}
                      <span className="instock">In Stock</span>
                    </li>
                  </ul>
                  <ul className="price-box">
                    <li
                      className="price"
                      itemprop="offers"
                      itemscope
                      itemtype="http://schema.org/Offer"
                    >
                      <span className="price-old">$1,202.00</span>{" "}
                      <span itemprop="price">
                        $1,142.00
                        <span itemprop="availability" content="In Stock"></span>
                      </span>
                    </li>
                    <li></li>
                    <li>Ex Tax: $950.00</li>
                  </ul>
                  <div id="product">
                    <h3 className="subtitle">Available Options</h3>
                    <div className="form-group required">
                      <label className="control-label">Color</label>
                      <select
                        className="form-control"
                        id="input-option200"
                        name="option[200]"
                      >
                        <option value=""> --- Please Select --- </option>
                        <option value="4">Black </option>
                        <option value="3">Silver </option>
                        <option value="1">Green </option>
                        <option value="2">Blue </option>
                      </select>
                    </div>
                    <div className="cart">
                      <div>
                        <div className="qty">
                          <label className="control-label" for="input-quantity">
                            Qty
                          </label>
                          <input
                            type="text"
                            name="quantity"
                            value="1"
                            size="2"
                            id="input-quantity"
                            className="form-control"
                          />
                          <a className="qtyBtn plus" href="javascript:void(0);">
                            +
                          </a>
                          <br />
                          <a
                            className="qtyBtn mines"
                            href="javascript:void(0);"
                          >
                            -
                          </a>
                          <div className="clear"></div>
                        </div>
                        <button
                          type="button"
                          id="button-cart"
                          className="btn btn-primary btn-lg"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div>
                        <button type="button" className="wishlist" onClick="">
                          <i className="fa fa-heart"></i> Add to Wish List
                        </button>
                        <br />
                        <button type="button" className="wishlist" onClick="">
                          <i className="fa fa-exchange"></i> Compare this
                          Product
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rating"
                    itemprop="aggregateRating"
                    itemscope
                    itemtype="http://schema.org/AggregateRating"
                  >
                    <meta itemprop="ratingValue" content="0" />
                    <p>
                      <span className="fa fa-stack">
                        <i className="fa fa-star fa-stack-1x"></i>
                        <i className="fa fa-star-o fa-stack-1x"></i>
                      </span>{" "}
                      <span className="fa fa-stack">
                        <i className="fa fa-star fa-stack-1x"></i>
                        <i className="fa fa-star-o fa-stack-1x"></i>
                      </span>{" "}
                      <span className="fa fa-stack">
                        <i className="fa fa-star fa-stack-1x"></i>
                        <i className="fa fa-star-o fa-stack-1x"></i>
                      </span>{" "}
                      <span className="fa fa-stack">
                        <i className="fa fa-star fa-stack-1x"></i>
                        <i className="fa fa-star-o fa-stack-1x"></i>
                      </span>{" "}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-1x"></i>
                      </span>{" "}
                      <a
                        onClick="$('a[href=\'#tab-review\']').trigger('click'); return false;"
                        href=""
                      >
                        <span itemprop="reviewCount">1 reviews</span>
                      </a>{" "}
                      /{" "}
                      <a
                        onClick="$('a[href=\'#tab-review\']').trigger('click'); return false;"
                        href=""
                      >
                        Write a review
                      </a>
                    </p>
                  </div>
                  <hr />
                  <div className="addthis_toolbox addthis_default_style">
                    {" "}
                    {/*    <a
                      className="addthis_button_facebook_like"
                      fb:likelayout="button_count"
                    >
                    </a> */}
                    <a className="addthis_button_tweet"></a>{" "}
                    <a
                      className="addthis_button_google_plusone"
                      /*  g:plusonesize="medium" */
                    ></a>
                    <a
                      className="addthis_button_pinterest_pinit"
                      /*     pi:pinitlayout="horizontal"
                      pi:piniturl="http://www.addthis.com/features/pinterest"
                      pi:pinitmedia="http://www.addthis.com/cms-content/images/features/pinterest-lg.png"
                   */
                    ></a>
                    <a className="addthis_counter addthis_pill_style"></a>{" "}
                  </div>
                  <script
                    type="text/javascript"
                    src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-514863386b357649"
                  ></script>
                </div>
              </div>
              <ul className="nav nav-tabs">
                <li className="active">
                  <a href="#tab-description" data-toggle="tab">
                    Description
                  </a>
                </li>
                <li>
                  <a href="#tab-specification" data-toggle="tab">
                    Specification
                  </a>
                </li>
                <li>
                  <a href="#tab-review" data-toggle="tab">
                    Reviews (2)
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  itemprop="description"
                  id="tab-description"
                  className="tab-pane active"
                >
                  <div>
                    <p>
                      <b>Intel Core 2 Duo processor</b>
                    </p>
                    <p>
                      Powered by an Intel Core 2 Duo processor at speeds up to
                      2.16GHz, the new MacBook is the fastest ever.
                    </p>
                    <p>
                      <b>1GB memory, larger hard drives</b>
                    </p>
                    <p>
                      The new MacBook now comes with 1GB of memory standard and
                      larger hard drives for the entire line perfect for running
                      more of your favorite applications and storing growing
                      media collections.
                    </p>
                    <p>
                      <b>Sleek, 1.08-inch-thin design</b>
                    </p>
                    <p>
                      MacBook makes it easy to hit the road thanks to its tough
                      polycarbonate case, built-in wireless technologies, and
                      innovative MagSafe Power Adapter that releases
                      automatically if someone accidentally trips on the cord.
                    </p>
                    <p>
                      <b>Built-in iSight camera</b>
                    </p>
                    <p>
                      Right out of the box, you can have a video chat with
                      friends or family,2 record a video at your desk, or take
                      fun pictures with Photo Booth
                    </p>
                  </div>
                </div>
                <div id="tab-specification" className="tab-pane">
                  <div id="tab-specification" className="tab-pane">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <td colspan="2">
                            <strong>Memory</strong>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>test 1</td>
                          <td>8gb</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <td colspan="2">
                            <strong>Processor</strong>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>No. of Cores</td>
                          <td>1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/*       <div id="tab-review" className="tab-pane">
                <form className="form-horizontal">
                  <div id="review">
                    <div>
                      <table className="table table-striped table-bordered">
                        <tbody>
                          <tr>
                            <td style="width: 50%;"><strong><span>harvey</span></strong></td>
                            <td className="text-right"><span>20/01/2016</span></td>
                          </tr>
                          <tr>
                            <td colspan="2"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> </div></td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="table table-striped table-bordered">
                        <tbody>
                          <tr>
                            <td style="width: 50%;"><strong><span>Andrson</span></strong></td>
                            <td className="text-right"><span>20/01/2016</span></td>
                          </tr>
                          <tr>
                            <td colspan="2"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-right"></div>
                  </div>
                  <h2>Write a review</h2>
                  <div className="form-group required">
                    <div className="col-sm-12">
                      <label for="input-name" className="control-label">Your Name</label>
                      <input type="text" className="form-control" id="input-name" value="" name="name">
                    </div>
                  </div>
                  <div className="form-group required">
                    <div className="col-sm-12">
                      <label for="input-review" className="control-label">Your Review</label>
                      <textarea className="form-control" id="input-review" rows="5" name="text"></textarea>
                      <div className="help-block"><span className="text-danger">Note:</span> HTML is not translated!</div>
                    </div>
                  </div>
                  <div className="form-group required">
                    <div className="col-sm-12">
                      <label className="control-label">Rating</label>
                      &nbsp;&nbsp;&nbsp; Bad&nbsp;
                      <input type="radio" value="1" name="rating">
                      &nbsp;
                      <input type="radio" value="2" name="rating">
                      &nbsp;
                      <input type="radio" value="3" name="rating">
                      &nbsp;
                      <input type="radio" value="4" name="rating">
                      &nbsp;
                      <input type="radio" value="5" name="rating">
                      &nbsp;Good</div>
                  </div>
                  <div className="buttons">
                    <div className="pull-right">
                      <button className="btn btn-primary" id="button-review" type="button">Continue</button>
                    </div>
                  </div>
                </form>
              </div> */}
              </div>
              <h3 className="subtitle">Related Products</h3>
              <div className="owl-carousel related_pro">
                <div className="product-thumb">
                  <div className="image">
                    <a href="product.html">
                      <img
                        src="image/product/samsung_tab_1-220x330.jpg"
                        alt="Aspire Ultrabook Laptop"
                        title="Aspire Ultrabook Laptop"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="caption">
                    <h4>
                      <a href="product.html">Aspire Ultrabook Laptop</a>
                    </h4>
                    <p className="price">
                      {" "}
                      <span className="price-new">$230.00</span>{" "}
                      <span className="price-old">$241.99</span>{" "}
                      <span className="saving">-5%</span>{" "}
                    </p>
                    <div className="rating">
                      {" "}
                      <span className="fa fa-stack">
                        <i className="fa fa-star fa-stack-2x"></i>
                        <i className="fa fa-star-o fa-stack-2x"></i>
                      </span>{" "}
                      <span className="fa fa-stack">
                        <i className="fa fa-star fa-stack-2x"></i>
                        <i className="fa fa-star-o fa-stack-2x"></i>
                      </span>{" "}
                      <span className="fa fa-stack">
                        <i className="fa fa-star fa-stack-2x"></i>
                        <i className="fa fa-star-o fa-stack-2x"></i>
                      </span>{" "}
                      <span className="fa fa-stack">
                        <i className="fa fa-star fa-stack-2x"></i>
                        <i className="fa fa-star-o fa-stack-2x"></i>
                      </span>{" "}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                      </span>{" "}
                    </div>
                  </div>
                  <div className="button-group">
                    <button className="btn-primary" type="button" onClick="">
                      <span>Add to Cart</span>
                    </button>
                    <div className="add-to-links">
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title="Add to wishlist"
                        onClick=""
                      >
                        <i className="fa fa-heart"></i>
                      </button>
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title="Add to compare"
                        onClick=""
                      >
                        <i className="fa fa-exchange"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-thumb">
                  <div className="image">
                    <a href="product.html">
                      <img
                        src="image/product/macbook_pro_1-220x330.jpg"
                        alt=" Strategies for Acquiring Your Own Laptop "
                        title=" Strategies for Acquiring Your Own Laptop "
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="caption">
                    <h4>
                      <a href="product.html">
                        {" "}
                        Strategies for Acquiring Your Own Laptop{" "}
                      </a>
                    </h4>
                    <p className="price">
                      {" "}
                      <span className="price-new">$1,400.00</span>{" "}
                      <span className="price-old">$1,900.00</span>{" "}
                      <span className="saving">-26%</span>{" "}
                    </p>
                  </div>
                  <div className="button-group">
                    <button className="btn-primary" type="button" onClick="">
                      <span>Add to Cart</span>
                    </button>
                    <div className="add-to-links">
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title="Add to wishlist"
                        onClick=""
                      >
                        <i className="fa fa-heart"></i>
                      </button>
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title="Add to compare"
                        onClick=""
                      >
                        <i className="fa fa-exchange"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-thumb">
                  <div className="image">
                    <a href="product.html">
                      <img
                        src="image/product/macbook_1-220x330.jpg"
                        alt="Ideapad Yoga 13-59341124 Laptop"
                        title="Ideapad Yoga 13-59341124 Laptop"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="caption">
                    <h4>
                      <a href="product.html">Ideapad Yoga 13-59341124 Laptop</a>
                    </h4>
                    <p className="price"> $2.00 </p>
                    <div className="rating">
                      {" "}
                      <span className="fa fa-stack">
                        <i className="fa fa-star fa-stack-2x"></i>
                        <i className="fa fa-star-o fa-stack-2x"></i>
                      </span>{" "}
                      <span className="fa fa-stack">
                        <i className="fa fa-star fa-stack-2x"></i>
                        <i className="fa fa-star-o fa-stack-2x"></i>
                      </span>{" "}
                      <span className="fa fa-stack">
                        <i className="fa fa-star fa-stack-2x"></i>
                        <i className="fa fa-star-o fa-stack-2x"></i>
                      </span>{" "}
                      <span className="fa fa-stack">
                        <i className="fa fa-star fa-stack-2x"></i>
                        <i className="fa fa-star-o fa-stack-2x"></i>
                      </span>{" "}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                      </span>{" "}
                    </div>
                  </div>
                  <div className="button-group">
                    <button className="btn-primary" type="button" onClick="">
                      <span>Add to Cart</span>
                    </button>
                    <div className="add-to-links">
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title="Add to wishlist"
                        onClick=""
                      >
                        <i className="fa fa-heart"></i>
                      </button>
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title="Add to compare"
                        onClick=""
                      >
                        <i className="fa fa-exchange"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-thumb">
                  <div className="image">
                    <a href="product.html">
                      <img
                        src="image/product/ipod_shuffle_1-220x330.jpg"
                        alt="Hp Pavilion G6 2314ax Notebok Laptop"
                        title="Hp Pavilion G6 2314ax Notebok Laptop"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="caption">
                    <h4>
                      <a href="product.html">
                        Hp Pavilion G6 2314ax Notebok Laptop
                      </a>
                    </h4>
                    <p className="price"> $122.00 </p>
                  </div>
                  <div className="button-group">
                    <button className="btn-primary" type="button" onClick="">
                      <span>Add to Cart</span>
                    </button>
                    <div className="add-to-links">
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title="Add to wishlist"
                        onClick=""
                      >
                        <i className="fa fa-heart"></i>
                      </button>
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title="Add to compare"
                        onClick=""
                      >
                        <i className="fa fa-exchange"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-thumb">
                  <div className="image">
                    <a href="product.html">
                      <img
                        src="image/product/ipod_touch_1-220x330.jpg"
                        alt="Samsung Galaxy S4"
                        title="Samsung Galaxy S4"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="caption">
                    <h4>
                      <a href="product.html">Samsung Galaxy S4</a>
                    </h4>
                    <p className="price">
                      {" "}
                      <span className="price-new">$62.00</span>{" "}
                      <span className="price-old">$122.00</span>{" "}
                      <span className="saving">-50%</span>{" "}
                    </p>
                  </div>
                  <div className="button-group">
                    <button className="btn-primary" type="button" onClick="">
                      <span>Add to Cart</span>
                    </button>
                    <div className="add-to-links">
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title="Add to wishlist"
                        onClick=""
                      >
                        <i className="fa fa-heart"></i>
                      </button>
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title="Add to compare"
                        onClick=""
                      >
                        <i className="fa fa-exchange"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-thumb">
                  <div className="image">
                    <a href="product.html">
                      <img
                        src="image/product/ipod_shuffle_1-220x330.jpg"
                        alt="Hp Pavilion G6 2314ax Notebok Laptop"
                        title="Hp Pavilion G6 2314ax Notebok Laptop"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="caption">
                    <h4>
                      <a href="product.html">
                        Hp Pavilion G6 2314ax Notebok Laptop
                      </a>
                    </h4>
                    <p className="price"> $122.00 </p>
                  </div>
                  <div className="button-group">
                    <button className="btn-primary" type="button" onClick="">
                      <span>Add to Cart</span>
                    </button>
                    <div className="add-to-links">
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title="Add to wishlist"
                        onClick=""
                      >
                        <i className="fa fa-heart"></i>
                      </button>
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title="Add to compare"
                        onClick=""
                      >
                        <i className="fa fa-exchange"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside id="column-right" className="col-sm-3 hidden-xs">
            <h3 className="subtitle">Bestsellers</h3>
            <div className="side-item">
              <div className="product-thumb clearfix">
                <div className="image">
                  <a href="product.html">
                    <img
                      src="image/product/apple_cinema_30-50x75.jpg"
                      alt="Brand Fashion Cotton T-Shirt"
                      title="Brand Fashion Cotton T-Shirt"
                      className="img-responsive"
                    />
                  </a>
                </div>
                <div className="caption">
                  <h4>
                    <a href="product.html">Brand Fashion Cotton T-Shirt</a>
                  </h4>
                  <p className="price">
                    <span className="price-new">$110.00</span>{" "}
                    <span className="price-old">$122.00</span>{" "}
                    <span className="saving">-10%</span>
                  </p>
                </div>
              </div>
              <div className="product-thumb clearfix">
                <div className="image">
                  <a href="product.html">
                    <img
                      src="image/product/iphone_1-50x75.jpg"
                      alt="iPhone5"
                      title="iPhone5"
                      className="img-responsive"
                    />
                  </a>
                </div>
                <div className="caption">
                  <h4>
                    <a href="product.html">iPhone5</a>
                  </h4>
                  <p className="price"> $123.20 </p>
                  <div className="rating">
                    {" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star fa-stack-2x"></i>
                      <i className="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star fa-stack-2x"></i>
                      <i className="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star fa-stack-2x"></i>
                      <i className="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star fa-stack-2x"></i>
                      <i className="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star-o fa-stack-2x"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="product-thumb clearfix">
                <div className="image">
                  <a href="product.html">
                    <img
                      src="image/product/macbook_1-50x75.jpg"
                      alt="Ideapad Yoga 13-59341124 Laptop"
                      title="Ideapad Yoga 13-59341124 Laptop"
                      className="img-responsive"
                    />
                  </a>
                </div>
                <div className="caption">
                  <h4>
                    <a href="product.html">Ideapad Yoga 13-59341124 Laptop</a>
                  </h4>
                  <p className="price"> $2.00 </p>
                  <div className="rating">
                    {" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star fa-stack-2x"></i>
                      <i className="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star fa-stack-2x"></i>
                      <i className="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star fa-stack-2x"></i>
                      <i className="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star fa-stack-2x"></i>
                      <i className="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="product-thumb clearfix">
                <div className="image">
                  <a href="product.html">
                    <img
                      src="image/product/sony_vaio_1-50x75.jpg"
                      alt="Xitefun Causal Wear Fancy Shoes"
                      title="Xitefun Causal Wear Fancy Shoes"
                      className="img-responsive"
                    />
                  </a>
                </div>
                <div className="caption">
                  <h4>
                    <a href="product.html">Xitefun Causal Wear Fancy Shoes</a>
                  </h4>
                  <p className="price">
                    {" "}
                    <span className="price-new">$902.00</span>{" "}
                    <span className="price-old">$1,202.00</span>{" "}
                    <span className="saving">-25%</span>{" "}
                  </p>
                  <div className="rating">
                    {" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star fa-stack-2x"></i>
                      <i className="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star fa-stack-2x"></i>
                      <i className="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star fa-stack-2x"></i>
                      <i className="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star fa-stack-2x"></i>
                      <i className="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="product-thumb clearfix">
                <div className="image">
                  <a href="product.html">
                    <img
                      src="image/product/FinePix-Long-Zoom-Camera-50x75.jpg"
                      alt="FinePix S8400W Long Zoom Camera"
                      title="FinePix S8400W Long Zoom Camera"
                      className="img-responsive"
                    />
                  </a>
                </div>
                <div className="caption">
                  <h4>
                    <a href="product.html">FinePix S8400W Long Zoom Camera</a>
                  </h4>
                  <p className="price">$122.00</p>
                </div>
              </div>
            </div>
            <div className="list-group">
              <h3 className="subtitle">Custom Content</h3>
              <p>
                This is a CMS block edited from admin. You can insert any
                content (HTML, Text, Images) Here.{" "}
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.{" "}
              </p>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <h3 className="subtitle">Specials</h3>
            {/*       <div className="side-item">
            <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/macbook_pro_1-50x75.jpg" alt=" Strategies for Acquiring Your Own Laptop " title=" Strategies for Acquiring Your Own Laptop " className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="product.html">Strategies for Acquiring Your Own Laptop</a></h4>
                <p className="price"> <span className="price-new">$1,400.00</span> <span className="price-old">$1,900.00</span> <span className="saving">-26%</span> </p>
              </div>
            </div>
            <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/samsung_tab_1-50x75.jpg" alt="Aspire Ultrabook Laptop" title="Aspire Ultrabook Laptop" className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="product.html">Aspire Ultrabook Laptop</a></h4>
                <p className="price"> <span className="price-new">$230.00</span> <span className="price-old">$241.99</span> <span className="saving">-5%</span> </p>
                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
              </div>
            </div>
            <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/apple_cinema_30-50x75.jpg" alt="Brand Fashion Cotton T-Shirt" title="Brand Fashion Cotton T-Shirt" className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="http://demo.harnishdesign.net/opencart/marketshop/v1/index.php?route=product/product&amp;product_id=42">Brand Fashion Cotton T-Shirt</a></h4>
                <p className="price"> <span className="price-new">$110.00</span> <span className="price-old">$122.00</span> <span className="saving">-10%</span> </p>
              </div>
            </div>
            <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/nikon_d300_1-50x75.jpg" alt="Digital Camera for Elderly" title="Digital Camera for Elderly" className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="product.html">Digital Camera for Elderly</a></h4>
                <p className="price"> <span className="price-new">$92.00</span> <span className="price-old">$98.00</span> <span className="saving">-6%</span> </p>
              </div>
            </div>
            <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/nikon_d300_5-50x75.jpg" alt="Hair Care Products" title="Hair Care Products" className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="product.html">Hair Care Products</a></h4>
                <p className="price"> <span className="price-new">$66.80</span> <span className="price-old">$90.80</span> <span className="saving">-27%</span> </p>
                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
              </div>
            </div>
            <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/macbook_air_1-50x75.jpg" alt="Laptop Silver black" title="Laptop Silver black" className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="product.html">Laptop Silver black</a></h4>
                <p className="price"> <span className="price-new">$1,142.00</span> <span className="price-old">$1,202.00</span> <span className="saving">-5%</span> </p>
              </div>
            </div>
          </div> */}
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Menu;
