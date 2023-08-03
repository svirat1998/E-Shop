import axios from "axios";

import { 
    KID_PRODUCT_REQUEST,
    KID_PRODUCT_SUCCESS,
    KID_PRODUCT_FAIL,
    KID_DETAILS_REQUEST,
    KID_DETAILS_SUCCESS,
    KID_DETAILS_FAIL,
    
    NEWKID_REVIEW_REQUEST,
    NEWKID_REVIEW_SUCCESS,
    NEWKID_REVIEW_FAIL,
    NEWKID_REVIEW_RESET,
    ALLKID_REVIEW_REQUEST,
    ALLKID_REVIEW_SUCCESS,
    ALLKID_REVIEW_FAIL,
    DELETEKID_REVIEW_REQUEST,
    DELETEKID_REVIEW_SUCCESS,
    DELETEKID_REVIEW_FAIL,
    DELETEKID_REVIEW_RESET,
    CLEAR_ERRORS,
    NEWKID_PRODUCT_FAIL,
    NEWKID_PRODUCT_SUCCESS,
    NEWKID_PRODUCT_REQUEST,
    ADMIN_PRODUCT_FAIL,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_REQUEST,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST

    

} from "../constants/kidConstants";


// Get All Products
export const getKidProduct =
  () =>
  async (dispatch) => {
    try {
      dispatch({ type: KID_PRODUCT_REQUEST });

      // let link = `/api/v2/newproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      // if (category) {
      //   link = `/api/v2/newproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      // }

      const { data } = await axios.get("/api/v4/kidproducts");
      // const { data } = await axios.get(link);

      dispatch({
        type: KID_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:    KID_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };



  export const getKidProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: KID_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v4/kidProduct/${id}`);
  
      dispatch({
        type: KID_DETAILS_SUCCESS,
        payload: data.kidProduct,
      });
    } catch (error) {
      dispatch({
        type: KID_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  
  
// Get All Products For Admin
export const getAdminKidProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });

    const { data } = await axios.get("/api/v4/admin/kidproducts");

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
export const createKidProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEWKID_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      '/api/v4/admin/kidProduct/new',
      productData,
      config
    );

    dispatch({
      type: NEWKID_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWKID_PRODUCT_FAIL,
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
      `/api/v4/admin/kidProduct/${id}`,
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
export const deleteKidProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(`/api/v4/admin/kidProduct/${id}`);

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
export const KidNewReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEWKID_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };
 
    const { data } = await axios.put(`/api/v4/review`, reviewData, config);

    dispatch({
      type: NEWKID_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEWKID_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Reviews of a Product
export const getAllKidReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALLKID_REVIEW_REQUEST });

    const { data } = await axios.get(`/api/v4/reviews?id=${id}`);

    dispatch({
      type: ALLKID_REVIEW_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALLKID_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Review of a Product
export const deleteKidReviews = (reviewId, kidProductId) => async (dispatch) => {
  try {
    dispatch({ type: DELETEKID_REVIEW_REQUEST });

    const { data } = await axios.delete(
      `/api/v4/reviews?id=${reviewId}&kidProductId=${kidProductId}`
    );

    dispatch({
      type: DELETEKID_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETEKID_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};


  
  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };