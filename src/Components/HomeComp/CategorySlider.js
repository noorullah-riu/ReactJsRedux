import React from "react";

function CategorySlider() {
  return (
    <div id="product-tab" className="product-tab">
      <ul id="tabs" className="tabs">
        <li>
          <a href="#tab-featured">Featured</a>
        </li>
        {/*  <li>
          <a href="#tab-latest">Latest</a>
        </li>
        <li>
          <a href="#tab-bestseller">Bestseller</a>
        </li>
        <li>
          <a href="#tab-special">Special</a>
        </li> */}
      </ul>
      <div id="tab-featured" className="tab_content">
        <div className="owl-carousel product_carousel_tab">
          <div className="product-thumb clearfix">
            <div className="image">
              <a href="product.html">
                <img
                  src="image/product/apple_cinema_30-220x330.jpg"
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
                <span className="price-old">$122.00</span>
                <span className="saving">-10%</span>
              </p>
            </div>
            <div className="button-group">
              <button
                className="btn-primary"
                type="button"
                onClick="cart.add('42');"
              >
                <span>Add to Cart</span>
              </button>
              <div className="add-to-links">
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Add to Wish List"
                  onClick=""
                >
                  <i className="fa fa-heart"></i>
                </button>
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Compare this Product"
                  onClick=""
                >
                  <i className="fa fa-exchange"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="product-thumb clearfix">
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
              <button
                className="btn-primary"
                type="button"
                onClick="cart.add('49');"
              >
                <span>Add to Cart</span>
              </button>
              <div className="add-to-links">
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Add to Wish List"
                  onClick=""
                >
                  <i className="fa fa-heart"></i>
                </button>
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Compare this Product"
                  onClick=""
                >
                  <i className="fa fa-exchange"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="product-thumb clearfix">
            <div className="image">
              <a href="product.html">
                <img
                  src="image/product/sony_vaio_1-220x330.jpg"
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
            <div className="button-group">
              <button
                className="btn-primary"
                type="button"
                onClick="cart.add('46');"
              >
                <span>Add to Cart</span>
              </button>
              <div className="add-to-links">
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Add to Wish List"
                  onClick=""
                >
                  <i className="fa fa-heart"></i>
                </button>
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Compare this Product"
                  onClick=""
                >
                  <i className="fa fa-exchange"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="product-thumb clearfix">
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
              <p className="price"> $211.00 </p>
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
              <button
                className="btn-primary"
                type="button"
                onClick="cart.add('43');"
              >
                <span>Add to Cart</span>
              </button>
              <div className="add-to-links">
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Add to Wish List"
                  onClick=""
                >
                  <i className="fa fa-heart"></i>
                </button>
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Compare this Product"
                  onClick=""
                >
                  <i className="fa fa-exchange"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="product-thumb clearfix">
            <div className="image">
              <a href="product.html">
                <img
                  src="image/product/iphone_1-220x330.jpg"
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
                  title="Add to Wish List"
                  onClick=""
                >
                  <i className="fa fa-heart"></i>
                </button>
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Compare this Product"
                  onClick=""
                >
                  <i className="fa fa-exchange"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="product-thumb clearfix">
            <div className="image">
              <a href="product.html">
                <img
                  src="image/product/canon_eos_5d_1-220x330.jpg"
                  alt="Long Sleeve Shirt Fashion Men"
                  title="Long Sleeve Shirt Fashion Men"
                  className="img-responsive"
                />
              </a>
            </div>
            <div className="caption">
              <h4>
                <a href="product.html">Long Sleeve Shirt Fashion Men</a>
              </h4>
              <p className="price">
                {" "}
                <span className="price-new">$98.00</span>{" "}
                <span className="price-old">$122.00</span>{" "}
                <span className="saving">-20%</span>{" "}
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
                  title="Add to Wish List"
                  onClick=""
                >
                  <i className="fa fa-heart"></i>
                </button>
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Compare this Product"
                  onClick=""
                >
                  <i className="fa fa-exchange"></i>
                </button>
              </div>
            </div>
          </div>


          <div className="product-thumb clearfix">
            <div className="image">
              <a href="product.html">
                <img
                  src="image/product/canon_eos_5d_1-220x330.jpg"
                  alt="Long Sleeve Shirt Fashion Men"
                  title="Long Sleeve Shirt Fashion Men"
                  className="img-responsive"
                />
              </a>
            </div>
            <div className="caption">
              <h4>
                <a href="product.html">Long noor descript</a>
              </h4>
              <p className="price">
                {" "}
                <span className="price-new">$98.00</span>{" "}
                <span className="price-old">$122.00</span>{" "}
                <span className="saving">-20%</span>{" "}
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
                  title="Add to Wish List"
                  onClick=""
                >
                  <i className="fa fa-heart"></i>
                </button>
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Compare this Product"
                  onClick=""
                >
                  <i className="fa fa-exchange"></i>
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>
      {/* 
      <div id="tab-latest" className="tab_content">
        <div className="owl-carousel product_carousel_tab">
          <div className="product-thumb">
            <div className="image">
              <a href="product.html">
                <img
                  src="image/product/macbook_2-220x330.jpg"
                  alt="Pnina Tornai Perfume"
                  title="Pnina Tornai Perfume"
                  className="img-responsive"
                />
              </a>
            </div>
            <div className="caption">
              <h4>
                <a href="product.html">Pnina Tornai Perfume</a>
              </h4>
              <p className="price"> $110.00 </p>
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
                  src="image/product/macbook_3-220x330.jpg"
                  alt="Make Up for Naturally Beautiful Better"
                  title="Make Up for Naturally Beautiful Better"
                  className="img-responsive"
                />
              </a>
            </div>
            <div className="caption">
              <h4>
                <a href="product.html">
                  Make Up for Naturally Beautiful Better
                </a>
              </h4>
              <p className="price"> $123.00 </p>
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
                  src="image/product/macbook_4-220x330.jpg"
                  alt="Perfumes for Women"
                  title="Perfumes for Women"
                  className="img-responsive"
                />
              </a>
            </div>
            <div className="caption">
              <h4>
                <a href="product.html">Perfumes for Women</a>
              </h4>
              <p className="price"> $85.00 </p>
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
                  <i className="fa fa-star fa-stack-2x"></i>
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
                  src="image/product/iphone_6-220x330.jpg"
                  alt="Hair Care Cream for Men"
                  title="Hair Care Cream for Men"
                  className="img-responsive"
                />
              </a>
            </div>
            <div className="caption">
              <h4>
                <a href="product.html">Hair Care Cream for Men</a>
              </h4>
              <p className="price"> $134.00 </p>
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
                  <i className="fa fa-star fa-stack-2x"></i>
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
                  src="image/product/nikon_d300_5-220x330.jpg"
                  alt="Hair Care Products"
                  title="Hair Care Products"
                  className="img-responsive"
                />
              </a>
            </div>
            <div className="caption">
              <h4>
                <a href="product.html">Hair Care Products</a>
              </h4>
              <p className="price">
                {" "}
                <span className="price-new">$66.80</span>{" "}
                <span className="price-old">$90.80</span>{" "}
                <span className="saving">-27%</span>{" "}
              </p>
              <div className="rating">
                {" "}
                <span className="fa fa-stack">
                  <i className="fa fa-star fa-stack-2x"></i>
                  <i className="fa fa-star-o fa-stack-2x"></i>
                </span>{" "}
                <span className="fa fa-stack">
                  <i className="fa fa-star-o fa-stack-2x"></i>
                </span>{" "}
                <span className="fa fa-stack">
                  <i className="fa fa-star-o fa-stack-2x"></i>
                </span>{" "}
                <span className="fa fa-stack">
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
                  src="image/product/nikon_d300_4-220x330.jpg"
                  alt="Bed Head Foxy Curls Contour Cream"
                  title="Bed Head Foxy Curls Contour Cream"
                  className="img-responsive"
                />
              </a>
            </div>
            <div className="caption">
              <h4>
                <a href="product.html">Bed Head Foxy Curls Contour Cream</a>
              </h4>
              <p className="price"> $88.00 </p>
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
              <a href="">
                <img
                  src="image/product/macbook_5-220x330.jpg"
                  alt="Shower Gel Perfume for Women"
                  title="Shower Gel Perfume for Women"
                  className="img-responsive"
                />
              </a>
            </div>
            <div className="caption">
              <h4>
                <a href="product.html">Shower Gel Perfume for Women</a>
              </h4>
              <p className="price">
                {" "}
                <span className="price-new">$95.00</span>{" "}
                <span className="price-old">$99.00</span>{" "}
                <span className="saving">-4%</span>{" "}
              </p>
            </div>
            <div className="button-group">
              <button
                className="btn-primary"
                type="button"
                onClick="cart.add('61');"
              >
                <span>Add to Cart</span>
              </button>
              <div className="add-to-links">
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Add to wishlist"
                  onClick="wishlist.add('61');"
                >
                  <i className="fa fa-heart"></i>
                </button>
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Add to compare"
                  onClick="compare.add('61');"
                >
                  <i className="fa fa-exchange"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div id="tab-bestseller" className="tab_content">
        <div className="owl-carousel product_carousel_tab">
          <div className="product-thumb">
            <div className="image">
              <a href="product.html">
                <img
                  src="image/product/FinePix-Long-Zoom-Camera-220x330.jpg"
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
                  src="image/product/nikon_d300_1-220x330.jpg"
                  alt="Digital Camera for Elderly"
                  title="Digital Camera for Elderly"
                  className="img-responsive"
                />
              </a>
            </div>
            <div className="caption">
              <h4>
                <a href="product.html">Digital Camera for Elderly</a>
              </h4>
              <p className="price">
                {" "}
                <span className="price-new">$92.00</span>{" "}
                <span className="price-old">$98.00</span>{" "}
                <span className="saving">-6%</span>{" "}
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
        </div>
      </div>
     
      <div id="tab-special" className="tab_content">
        <div className="owl-carousel product_carousel_tab">
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
              <a href="">
                <img
                  src="image/product/macbook_5-220x330.jpg"
                  alt="Shower Gel Perfume for Women"
                  title="Shower Gel Perfume for Women"
                  className="img-responsive"
                />
              </a>
            </div>
            <div className="caption">
              <h4>
                <a href="product.html">Shower Gel Perfume for Women</a>
              </h4>
              <p className="price">
                {" "}
                <span className="price-new">$95.00</span>{" "}
                <span className="price-old">$99.00</span>{" "}
                <span className="saving">-4%</span>{" "}
              </p>
            </div>
            <div className="button-group">
              <button
                className="btn-primary"
                type="button"
                onClick="cart.add('61');"
              >
                <span>Add to Cart</span>
              </button>
              <div className="add-to-links">
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Add to wishlist"
                  onClick="wishlist.add('61');"
                >
                  <i className="fa fa-heart"></i>
                </button>
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Add to compare"
                  onClick="compare.add('61');"
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
                  src="image/product/macbook_air_1-220x330.jpg"
                  alt="Laptop Silver black"
                  title="Laptop Silver black"
                  className="img-responsive"
                />
              </a>
            </div>
            <div className="caption">
              <h4>
                <a href="product.html">Laptop Silver black</a>
              </h4>
              <p className="price">
                {" "}
                <span className="price-new">$1,142.00</span>{" "}
                <span className="price-old">$1,202.00</span>{" "}
                <span className="saving">-5%</span>{" "}
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
          <div className="product-thumb clearfix">
            <div className="image">
              <a href="product.html">
                <img
                  src="image/product/apple_cinema_30-220x330.jpg"
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
                <span className="price-old">$122.00</span>
                <span className="saving">-10%</span>
              </p>
            </div>
            <div className="button-group">
              <button
                className="btn-primary"
                type="button"
                onClick="cart.add('42');"
              >
                <span>Add to Cart</span>
              </button>
              <div className="add-to-links">
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Add to Wish List"
                  onClick=""
                >
                  <i className="fa fa-heart"></i>
                </button>
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Compare this Product"
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
        </div>
      </div>
    */}
    </div>
  );
}

export default CategorySlider;
