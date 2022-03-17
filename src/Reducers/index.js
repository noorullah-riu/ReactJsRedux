import counterReducer from "./counter";
import LoggedReducer from "./isLogged";
import getcategories from "./getCatgory";
import getproductsofcategories from "./getProductsOfCategory";

import { combineReducers } from "redux";

const allreducers = combineReducers({
  counter: counterReducer,
  logged: LoggedReducer,
  categories: getcategories,
  productsofcategory: getproductsofcategories,
});

export default allreducers;
