import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import Slider from "../Components/HomeComp/Slider";
import CategorySlider from "../Components/HomeComp/CategorySlider";
import BannerTwo from "../Components/HomeComp/BannerTwo";
import SecondFlatlist from "../Components/HomeComp/SecondFlatlist";
import ThirdFlatList from "../Components/HomeComp/ThirdFlatList";

import { AppContext } from "../Context/DataProvider";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  getcategories,
  getproductsofcategories,
} from "../Actions";
function Home() {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);

  const categories = useSelector((state) => state.categories);
  const { loading } = useSelector((state) => state.categories);

  const productsofcategory = useSelector((state) => state.productsofcategory);

  const dispatch = useDispatch();
  const [movie] = useContext(AppContext);

 /*  const movie = [
    {
      name: "Movie 1",
      price: "10",
      id: 11,
    },
    {
      name: "Movie 2",
      price: "12",
      id: 12,
    },
    {
      name: "Movie 3",
      price: "13",
      id: 13,
    },
    {
      name: "Movie 4",
      price: "14",
      id: 14,
    },
    {
      name: "Movie 5",
      price: "15",
      id: 15,
    },
    {
      name: "Movie 6",
      price: "16",
      id: 16,
    },
  ]; */
  //#region Home Screen
  const [results, setResults] = useState([]);
  const [results2, setResults2] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const GetCategories = async () => {
    try {
      const response = await axios.get(
        "http://www.clothecom.somee.com/api/category/getallcat"
      );
      if (response) {
        setResults(response.data);
        //console.log(response);
        console.log("Errr Not call");

        /*  const response2 = await API.get("Product/GetlatestProducts");
        setResults2(response2.data); */

        //  console.log("Home screen method");
      }
    } catch (err) {
      console.log(err);
      console.log("Errr call");
      // setErrorMessage("Api Call Failed");
    }
  };

  useEffect(() => {
    // eslint - disable - next - line;
    //  GetCategories();
   // dispatch(getcategories());
  }, [dispatch]);

  return (
    <div id="container">
      <div className="container">
        <div className="row">
      {/*    {loading ? <h1>loading </h1> : <h1>not loading</h1>}
          <h1> {categories.cateogires.length} items</h1>  */}
         {/* <h1>
             {productsofcategory.productsofcateogires.length} prodcts Category
          </h1>
          */} 
         {/*  <h1>{counter}</h1>
          <button onClick={() => dispatch(increment(5))}>+</button>
          <button onClick={() => dispatch(decrement(5))}>-</button>
          <button onClick={() => dispatch(getproductsofcategories(4))}>
            Get
          </button> */}

          {/*     <!--Middle Part Start--> */}
          <div id="content" className="col-xs-12">
            {/*    <!-- Slideshow Start--> */}
            <div className="slideshow single-slider owl-carousel">
              <div className="item">
                {" "}
                <a href="#/">
                  <img
                    className="img-responsive"
                    src="image/slider/banner-2.jpg"
                    alt="banner 2"
                  />
                </a>{" "}
              </div>
              <div className="item">
                {" "}
                <a href="#/">
                  <img
                    className="img-responsive"
                    src="image/slider/banner-1.jpg"
                    alt="banner 1"
                  />
                </a>{" "}
              </div>
            </div>
            {/*    <!-- Slideshow End-->
          <!-- Banner Start--> */}
            <div className="marketshop-banner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <a href="#">
                    <img
                      src="image/banner/sample-banner-3-300x300.jpg"
                      alt="Sample Banner 2"
                      title="Sample Banner 2"
                    />
                  </a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <a href="#">
                    <img
                      src="image/banner/sample-banner-1-300x300.jpg"
                      alt="Sample Banner"
                      title="Sample Banner"
                    />
                  </a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <a href="#">
                    <img
                      src="image/banner/sample-banner-2-300x300.jpg"
                      alt="Sample Banner 3"
                      title="Sample Banner 3"
                    />
                  </a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <a href="#">
                    <img
                      src="image/banner/sample-banner-4-300x300.jpg"
                      alt="Sample Banner 4"
                      title="Sample Banner 4"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/*     <!-- Banner End-->
          <!-- Product Tab Start --> */}

            <h3 className="subtitle">
              Featured-
              <a className="viewall" href="#/">
                view all
              </a>
            </h3>
            <div className="owl-carousel latest_category_carousel">
              {movie.map((person) => {
                return (
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
                        <a href="product.html">{person.name}</a>
                      </h4>
                      <p className="price"> ${person.price}</p>
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
                );
              })}
            </div>

            {/*   <!-- Product Tab Start -->
          <!-- Banner Start --> */}
            <div className="marketshop-banner">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <a href="#">
                    <img
                      src="image/banner/sample-banner-4-600x250.jpg"
                      alt="2 Block Banner"
                      title="2 Block Banner"
                    />
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <a href="#">
                    <img
                      src="image/banner/sample-banner-5-600x250.jpg"
                      alt="2 Block Banner 1"
                      title="2 Block Banner 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/*     <!-- Banner End -->
          <!-- Categories Product Slider Start--> */}

            <h3 className="subtitle">
              Categories-{" "}
              <a className="viewall" href="#/">
                view all
              </a>
            </h3>
            <div className="owl-carousel latest_category_carousel">
              {movie.map((person) => {
                return (
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
                        <a href="product.html">{person.name}</a>
                      </h4>
                      <p className="price"> ${person.price}</p>
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
                );
              })}
            </div>
            {/*    <!-- Categories Product Slider End-->
          
          <!-- Categories Product Slider Start --> */}
            <h3 className="subtitle">
              Western Wear -{" "}
              <a className="viewall" href="#/">
                view all
              </a>
            </h3>
            <div className="owl-carousel latest_category_carousel">
              {movie.map((person) => {
                return (
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
                        <a href="product.html">{person.name}</a>
                      </h4>
                      <p className="price"> ${person.price}</p>
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
                );
              })}
            </div>
            {/*      <!-- Categories Product Slider End -->
          
          <!-- Brand Logo Carousel Start--> */}
            <div id="carousel" className="owl-carousel nxt">
              <div className="item text-center">
                {" "}
                <a href="#">
                  <img
                    src="image/product/apple_logo-100x100.jpg"
                    alt="Palm"
                    className="img-responsive"
                  />
                </a>{" "}
              </div>
              <div className="item text-center">
                {" "}
                <a href="#">
                  <img
                    src="image/product/canon_logo-100x100.jpg"
                    alt="Sony"
                    className="img-responsive"
                  />
                </a>{" "}
              </div>
              <div className="item text-center">
                {" "}
                <a href="#">
                  <img
                    src="image/product/apple_logo-100x100.jpg"
                    alt="Canon"
                    className="img-responsive"
                  />
                </a>{" "}
              </div>
              <div className="item text-center">
                {" "}
                <a href="#">
                  <img
                    src="image/product/canon_logo-100x100.jpg"
                    alt="Apple"
                    className="img-responsive"
                  />
                </a>{" "}
              </div>
              <div className="item text-center">
                {" "}
                <a href="#">
                  <img
                    src="image/product/apple_logo-100x100.jpg"
                    alt="HTC"
                    className="img-responsive"
                  />
                </a>{" "}
              </div>
              <div className="item text-center">
                {" "}
                <a href="#">
                  <img
                    src="image/product/canon_logo-100x100.jpg"
                    alt="Hewlett-Packard"
                    className="img-responsive"
                  />
                </a>{" "}
              </div>
              <div className="item text-center">
                {" "}
                <a href="#">
                  <img
                    src="image/product/apple_logo-100x100.jpg"
                    alt="brand"
                    className="img-responsive"
                  />
                </a>{" "}
              </div>
              <div className="item text-center">
                {" "}
                <a href="#">
                  <img
                    src="image/product/canon_logo-100x100.jpg"
                    alt="brand1"
                    className="img-responsive"
                  />
                </a>{" "}
              </div>
            </div>
            {/*     <!-- Brand Logo Carousel End --> */}
          </div>
          {/*    <!--Middle Part End--> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
