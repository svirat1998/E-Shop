

import { 
  KID_PRODUCT_REQUEST,
  KID_PRODUCT_SUCCESS,
  KID_PRODUCT_FAIL,
  KID_DETAILS_FAIL,
  KID_DETAILS_SUCCESS,
  KID_DETAILS_REQUEST,

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
    NEWKID_PRODUCT_REQUEST,
    NEWKID_PRODUCT_SUCCESS,
    NEWKID_PRODUCT_FAIL,
    NEWKID_PRODUCT_RESET
  

} from "../constants/kidConstants";


export const kidProductsReducer = (state = { kidproducts: [] }, action) => {
    switch (action.type) {
      case KID_PRODUCT_REQUEST:
    //   case ADMIN_PRODUCT_REQUEST:
        return {
          loading: true,
          kidproducts: [],
        };
      case KID_PRODUCT_SUCCESS:
        return {
          loading: false,
          kidproducts: action.payload.kidproducts,
          productsCount: action.payload.productsCount,
          resultPerPage: action.payload.resultPerPage,
          filteredProductsCount: action.payload.filteredProductsCount,
        };
  
    //   case ADMIN_PRODUCT_SUCCESS:
    //     return {
    //       loading: false,
    //       products: action.payload,
    //     };
      case KID_PRODUCT_FAIL:
    //   case ADMIN_PRODUCT_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  



  export const kidProductDetailsReducer = (state = { kidProduct: {} }, action) => {
    switch (action.type) {
      case KID_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case KID_DETAILS_SUCCESS:
        return {
          loading: false,
          kidProduct: action.payload,
        };
      case KID_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };


  export const newKidProductReducer = (state = { kidProduct: {} }, action) => {
    switch (action.type) {
      case NEWKID_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEWKID_PRODUCT_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          kidProduct: action.payload.kidProduct,
        };
      case NEWKID_PRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEWKID_PRODUCT_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  // export const productReducer = (state = {}, action) => {
  //   switch (action.type) {
  //     case DELETELATEST_PRODUCT_REQUEST:
  //     case UPDATE_PRODUCT_REQUEST:
  //       return {
  //         ...state,
  //         loading: true,
  //       };
  //     case DELETE_PRODUCT_SUCCESS:
  //       return {
  //         ...state,
  //         loading: false,
  //         isDeleted: action.payload,
  //       };
  
  //     case UPDATE_PRODUCT_SUCCESS:
  //       return {
  //         ...state,
  //         loading: false,
  //         isUpdated: action.payload,
  //       };
  //     case DELETE_PRODUCT_FAIL:
  //     case UPDATE_PRODUCT_FAIL:
  //       return {
  //         ...state,
  //         loading: false,
  //         error: action.payload,
  //       };
  //     case DELETE_PRODUCT_RESET:
  //       return {
  //         ...state,
  //         isDeleted: false,
  //       };
  //     case UPDATE_PRODUCT_RESET:
  //       return {
  //         ...state,
  //         isUpdated: false,
  //       };
  //     case CLEAR_ERRORS:
  //       return {
  //         ...state,
  //         error: null,
  //       };
  //     default:
  //       return state;
  //   }
  // };
  


  export const kidNewReviewReducer = (state = {}, action) => {
    switch (action.type) {
      case NEWKID_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEWKID_REVIEW_SUCCESS:
        return {
          loading: false,
          success: action.payload,
        };
      case NEWKID_REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEWKID_REVIEW_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export const productReviewsReducer = (state = { reviews: [] }, action) => {
    switch (action.type) {
      case ALLKID_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ALLKID_REVIEW_SUCCESS:
        return {
          loading: false,
          reviews: action.payload,
        };
      case ALLKID_REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export const reviewReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETEKID_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETEKID_REVIEW_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
      case DELETEKID_REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETEKID_REVIEW_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  