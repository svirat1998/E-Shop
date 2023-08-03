import axios from "axios";

import { 
    WOMEN_PRODUCT_REQUEST,
    WOMEN_PRODUCT_SUCCESS,
    WOMEN_PRODUCT_FAIL,
    WOMEN_DETAILS_REQUEST,
    WOMEN_DETAILS_SUCCESS,
    WOMEN_DETAILS_FAIL,
    
    NEWWOMEN_REVIEW_REQUEST,
    NEWWOMEN_REVIEW_SUCCESS,
    NEWWOMEN_REVIEW_FAIL,
    NEWWOMEN_REVIEW_RESET,
    ALLWOMEN_REVIEW_REQUEST,
    ALLWOMEN_REVIEW_SUCCESS,
    ALLWOMEN_REVIEW_FAIL,
    DELETEWOMEN_REVIEW_REQUEST,
    DELETEWOMEN_REVIEW_SUCCESS,
    DELETEWOMEN_REVIEW_FAIL,
    DELETEWOMEN_REVIEW_RESET,
    CLEAR_ERRORS,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_REQUEST

    

} from "../constants/womenConstants";


// Get All Products
export const getWomenProduct =
  () =>
  async (dispatch) => {
    try {
      dispatch({ type: WOMEN_PRODUCT_REQUEST });

      // let link = `/api/v2/newproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      // if (category) {
      //   link = `/api/v2/newproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      // }

      const { data } = await axios.get("/api/v3/womenproducts");
      // const { data } = await axios.get(link);

      dispatch({
        type: WOMEN_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:    WOMEN_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };



  export const getWomenProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: WOMEN_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v3/womenProduct/${id}`);
  
      dispatch({
        type: WOMEN_DETAILS_SUCCESS,
        payload: data.womenProduct,
      });
    } catch (error) {
      dispatch({
        type: WOMEN_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  
// Get All Products For Admin
export const getAdminWomenProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });

    const { data } = await axios.get("/api/v3/admin/womenproducts");

    dispatch({
      type: ADMIN_PRODUCT_SUCCESS,
      payload: data.womenproducts,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Product
export const createWomenProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      '/api/v3/admin/womenProduct/new',
      productData,
      config
    );

    dispatch({
      type: NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v3/admin/womenProduct/${id}`,
      productData,
      config
    );

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Delete Product
export const deleteWomenProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(`/api/v3/admin/womenProduct/${id}`);

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};





  // NEW REVIEW
export const womenNewReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEWWOMEN_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };
 
    const { data } = await axios.put(`/api/v3/review`, reviewData, config);

    dispatch({
      type: NEWWOMEN_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEWWOMEN_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Reviews of a Product
export const getAllWomenReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALLWOMEN_REVIEW_REQUEST });

    const { data } = await axios.get(`/api/v3/reviews?id=${id}`);

    dispatch({
      type: ALLWOMEN_REVIEW_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALLWOMEN_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Review of a Product
export const deleteWomenReviews = (reviewId, womenProductId) => async (dispatch) => {
  try {
    dispatch({ type: DELETEWOMEN_REVIEW_REQUEST });

    const { data } = await axios.delete(
      `/api/v3/reviews?id=${reviewId}&producttId=${womenProductId}`
    );

    dispatch({
      type: DELETEWOMEN_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETEWOMEN_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};


  
  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };