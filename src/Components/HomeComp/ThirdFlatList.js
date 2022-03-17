import React from "react";

function ThirdFlatList() {
  return (
    <>
      <h3 className="subtitle">
        Western Wear -{" "}
        <a className="viewall" href="#/">
          view all
        </a>
      </h3>
      <div className="owl-carousel latest_category_carousel">
        <div className="product-thumb">
          <div className="image">
            <a href="#/">
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
              <a href="#/">Hair Care Cream for Men</a>
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
            <a href="#/">
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
            <a href="#/">
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
            <a href="#/">
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
              <a href="#/">Shower Gel Perfume for Women</a>
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
            <a href="#/">
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
            <a href="#/">
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
              <a href="product.html">Make Up for Naturally Beautiful Better</a>
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
            <a href="#/">
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
              <a href="#/">Pnina Tornai Perfume</a>
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
      </div>
    </>
  );
}

export default ThirdFlatList;
