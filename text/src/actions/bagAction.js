import axios from "axios";

import { 
    BAG_PRODUCT_REQUEST,
    BAG_PRODUCT_SUCCESS,
    BAG_PRODUCT_FAIL,
    BAG_DETAILS_REQUEST,
    BAG_DETAILS_SUCCESS,
    BAG_DETAILS_FAIL,
    
    NEWBAG_REVIEW_REQUEST,
    NEWBAG_REVIEW_SUCCESS,
    NEWBAG_REVIEW_FAIL,
    NEWBAG_REVIEW_RESET,
    ALLBAG_REVIEW_REQUEST,
    ALLBAG_REVIEW_SUCCESS,
    ALLBAG_REVIEW_FAIL,
    DELETEBAG_REVIEW_REQUEST,
    DELETEBAG_REVIEW_SUCCESS,
    DELETEBAG_REVIEW_FAIL,
    DELETEBAG_REVIEW_RESET,
    CLEAR_ERRORS,
    NEWBAG_PRODUCT_FAIL,
    NEWBAG_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_REQUEST,
    NEWBAG_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_REQUEST

    

} from "../constants/bagConstants";



// Get All Products
export const getBagProduct =
  () =>
  async (dispatch) => {
    try {
      dispatch({ type: BAG_PRODUCT_REQUEST });

      // let link = `/api/v2/newproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      // if (category) {
      //   link = `/api/v2/newproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      // }

      const { data } = await axios.get("/api/v5/bagproducts");
      // const { data } = await axios.get(link);

      dispatch({
        type: BAG_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:    BAG_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };



  export const getBagProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: BAG_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v5/bagProduct/${id}`);
  
      dispatch({
        type: BAG_DETAILS_SUCCESS,
        payload: data.bagProduct,
      });
    } catch (error) {
      dispatch({
        type: BAG_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  
// Get All Products For Admin
export const getAdminBagProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });

    const { data } = await axios.get("/api/v5/admin/bagproducts");

    dispatch({
      type: ADMIN_PRODUCT_SUCCESS,
      payload: data.bagproducts,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Product
export const createBagProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEWBAG_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      '/api/v5/admin/bagProduct/new',
      productData,
      config
    );

    dispatch({
      type: NEWBAG_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWBAG_PRODUCT_FAIL,
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
      `/api/v5/admin/bagProduct/${id}`,
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
export const deleteBagProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(`/api/v5/admin/bagProduct/${id}`);

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
export const bagNewReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEWBAG_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };
 
    const { data } = await axios.put(`/api/v5/review`, reviewData, config);

    dispatch({
      type: NEWBAG_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEWBAG_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Reviews of a Product
export const getAllBagReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALLBAG_REVIEW_REQUEST });

    const { data } = await axios.get(`/api/v5/reviews?id=${id}`);

    dispatch({
      type: ALLBAG_REVIEW_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALLBAG_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Review of a Product
export const deleteBagReviews = (reviewId, bagProductId) => async (dispatch) => {
  try {
    dispatch({ type: DELETEBAG_REVIEW_REQUEST });

    const { data } = await axios.delete(
      `/api/v5/reviews?id=${reviewId}&bagProductId=${bagProductId}`
    );

    dispatch({
      type: DELETEBAG_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETEBAG_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};


  
  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };