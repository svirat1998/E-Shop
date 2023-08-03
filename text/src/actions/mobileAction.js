import axios from "axios";

import { ADMIN_PRODUCT_FAIL, ADMIN_PRODUCT_REQUEST, ADMIN_PRODUCT_SUCCESS, ALLMOBILE_REVIEW_FAIL, ALLMOBILE_REVIEW_REQUEST, ALLMOBILE_REVIEW_SUCCESS, CLEAR_ERRORS, DELETEMOBILE_REVIEW_FAIL, DELETEMOBILE_REVIEW_REQUEST, DELETEMOBILE_REVIEW_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, MOBILE_DETAILS_FAIL, MOBILE_DETAILS_REQUEST, MOBILE_DETAILS_SUCCESS, MOBILE_PRODUCT_FAIL, MOBILE_PRODUCT_REQUEST, MOBILE_PRODUCT_SUCCESS, NEWMOBILE_PRODUCT_FAIL, NEWMOBILE_PRODUCT_REQUEST, NEWMOBILE_PRODUCT_SUCCESS, NEWMOBILE_REVIEW_FAIL, NEWMOBILE_REVIEW_REQUEST, NEWMOBILE_REVIEW_SUCCESS, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "../constants/mobileConstants";


// Get All Products
export const getMobileProduct =
  () =>
  async (dispatch) => {
    try {
      dispatch({ type: MOBILE_PRODUCT_REQUEST });

      // let link = `/api/v2/newproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      // if (category) {
      //   link = `/api/v2/newproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      // }

      const { data } = await axios.get("/api/v6/mobileproducts");
      // const { data } = await axios.get(link);

      dispatch({
        type: MOBILE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:    MOBILE_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };



  export const getMobileProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: MOBILE_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v6/mobileProduct/${id}`);
  
      dispatch({
        type: MOBILE_DETAILS_SUCCESS,
        payload: data.mobileProduct,
      });
    } catch (error) {
      dispatch({
        type: MOBILE_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };



// Get All Products For Admin
export const getAdminMobileProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });

    const { data } = await axios.get("/api/v6/admin/mobileproducts");

    dispatch({
      type: ADMIN_PRODUCT_SUCCESS,
      payload: data.mobileproducts,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Product
export const createMobileProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEWMOBILE_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      '/api/v6/admin/mobileProduct/new',
      productData,
      config
    );

    dispatch({
      type: NEWMOBILE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWMOBILE_PRODUCT_FAIL,
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
      `/api/v6/admin/mobileProduct/${id}`,
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
export const deleteMobileProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(`/api/v6/admin/mobileProduct/${id}`);

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
export const mobileNewReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEWMOBILE_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };
 
    const { data } = await axios.put(`/api/v6/review`, reviewData, config);

    dispatch({
      type: NEWMOBILE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEWMOBILE_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Reviews of a Product
export const getAllMobileReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALLMOBILE_REVIEW_REQUEST });

    const { data } = await axios.get(`/api/v6/reviews?id=${id}`);

    dispatch({
      type: ALLMOBILE_REVIEW_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALLMOBILE_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Review of a Product
export const deleteMobileReviews = (reviewId, mobileProductId) => async (dispatch) => {
  try {
    dispatch({ type: DELETEMOBILE_REVIEW_REQUEST });

    const { data } = await axios.delete(
      `/api/v6/reviews?id=${reviewId}&mobileProductId=${mobileProductId}`
    );

    dispatch({
      type: DELETEMOBILE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETEMOBILE_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};


  
  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };