import {
  ALL_CATEGORIES_PRODUCT_CLEAR_ERRORS,
  ALL_CATEGORIES_PRODUCT_FAIL,
  ALL_CATEGORIES_PRODUCT_SUCCESS,
  ALL_CATEGORIES_PRODUCT_REQUEST,
} from "../Constants/Categories";

const ProductOfCategoryReducer = (
  state = { productsofcateogires: [] },
  action
) => {
  switch (action.type) {
    case ALL_CATEGORIES_PRODUCT_REQUEST:
      return { loading: true, productsofcateogires: [] };

    case ALL_CATEGORIES_PRODUCT_SUCCESS:
      return { loading: false, productsofcateogires: action.payload };

    case ALL_CATEGORIES_PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    case ALL_CATEGORIES_PRODUCT_CLEAR_ERRORS:
      return { ...state, error: null };

    default:
      return state;
  }
};

export default ProductOfCategoryReducer;
