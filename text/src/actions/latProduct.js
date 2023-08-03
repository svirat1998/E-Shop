import axios from "axios";

import { 
    LATEST_PRODUCT_REQUEST,
    LATEST_PRODUCT_SUCCESS,
    LATEST_PRODUCT_FAIL,
    LATESTPRODUCT_DETAILS_REQUEST,
    LATESTPRODUCT_DETAILS_SUCCESS,
    LATESTPRODUCT_DETAILS_FAIL,
    
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_RESET,
    ALL_REVIEW_REQUEST,
    ALL_REVIEW_SUCCESS,
    ALL_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    DELETE_REVIEW_RESET,
    CLEAR_ERRORS,
    NEWLATEST_PRODUCT_REQUEST,
    NEWLATEST_PRODUCT_SUCCESS,
    NEWLATEST_PRODUCT_FAIL,
    LATESTADMIN_PRODUCT_SUCCESS,
    LATESTADMIN_PRODUCT_REQUEST,
    LATESTADMIN_PRODUCT_FAIL,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST

    

} from "../constants/latProdctCon";


// Get All Products
export const getLatestProduct =
  () =>
  async (dispatch) => {
    try {
      dispatch({ type: LATEST_PRODUCT_REQUEST });

      // let link = `/api/v2/newproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      // if (category) {
      //   link = `/api/v2/newproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      // }

      const { data } = await axios.get("/api/v2/newproducts");
      // const { data } = await axios.get(link);

      dispatch({
        type: LATEST_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:    LATEST_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };



  export const getLatestProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: LATESTPRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v2/productt/${id}`);
  
      dispatch({
        type: LATESTPRODUCT_DETAILS_SUCCESS,
        payload: data.productt,
      });
    } catch (error) {
      dispatch({
        type: LATESTPRODUCT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  

// Get All Products For Admin
export const getAdminMenProduct = () => async (dispatch) => {
  try {
    dispatch({ type: LATESTADMIN_PRODUCT_REQUEST });

    const { data } = await axios.get("/api/v2/admin/newproducts");

    dispatch({
      type: LATESTADMIN_PRODUCT_SUCCESS,
      payload: data.newproducts,
    });
  } catch (error) {
    dispatch({
      type: LATESTADMIN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Product
export const createMenProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEWLATEST_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      '/api/v2/admin/menProduct/new',
      productData,
      config
    );

    dispatch({
      type: NEWLATEST_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWLATEST_PRODUCT_FAIL,
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
      `/api/v2/admin/productt/${id}`,
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
export const deleteMenProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(`/api/v2/admin/productt/${id}`);

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
export const menNewReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };
 
    const { data } = await axios.put(`/api/v2/review`, reviewData, config);

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Reviews of a Product
export const getAllReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_REVIEW_REQUEST });

    const { data } = await axios.get(`/api/v2/reviews?id=${id}`);

    dispatch({
      type: ALL_REVIEW_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Review of a Product
export const deleteReviews = (reviewId, producttId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_REVIEW_REQUEST });

    const { data } = await axios.delete(
      `/api/v2/reviews?id=${reviewId}&producttId=${producttId}`
    );

    dispatch({
      type: DELETE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};


  
  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };