

import { 
    WOMEN_PRODUCT_REQUEST,
    WOMEN_PRODUCT_SUCCESS,
    WOMEN_PRODUCT_FAIL,
    WOMEN_DETAILS_FAIL,
    WOMEN_DETAILS_SUCCESS,
    WOMEN_DETAILS_REQUEST,

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
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_RESET
  

} from "../constants/womenConstants";


export const womenProductsReducer = (state = { womenproducts: [] }, action) => {
    switch (action.type) {
      case WOMEN_PRODUCT_REQUEST:
    //   case ADMIN_PRODUCT_REQUEST:
        return {
          loading: true,
          womenproducts: [],
        };
      case WOMEN_PRODUCT_SUCCESS:
        return {
          loading: false,
          womenproducts: action.payload.womenproducts,
          productsCount: action.payload.productsCount,
          resultPerPage: action.payload.resultPerPage,
          filteredProductsCount: action.payload.filteredProductsCount,
        };
  
    //   case ADMIN_PRODUCT_SUCCESS:
    //     return {
    //       loading: false,
    //       products: action.payload,
    //     };
      case WOMEN_PRODUCT_FAIL:
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
  
  export const newWomenProductReducer = (state = { womenProduct: {} }, action) => {
    switch (action.type) {
      case NEW_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_PRODUCT_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          womenProduct: action.payload.womenProduct,
        };
      case NEW_PRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_PRODUCT_RESET:
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
  

  export const womenProductDetailsReducer = (state = { womenProduct: {} }, action) => {
    switch (action.type) {
      case WOMEN_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case WOMEN_DETAILS_SUCCESS:
        return {
          loading: false,
          womenProduct: action.payload,
        };
      case WOMEN_DETAILS_FAIL:
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

  export const womenNewReviewReducer = (state = {}, action) => {
    switch (action.type) {
      case NEWWOMEN_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEWWOMEN_REVIEW_SUCCESS:
        return {
          loading: false,
          success: action.payload,
        };
      case NEWWOMEN_REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEWWOMEN_REVIEW_RESET:
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
      case ALLWOMEN_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ALLWOMEN_REVIEW_SUCCESS:
        return {
          loading: false,
          reviews: action.payload,
        };
      case ALLWOMEN_REVIEW_FAIL:
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
      case DELETEWOMEN_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETEWOMEN_REVIEW_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
      case DELETEWOMEN_REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETEWOMEN_REVIEW_RESET:
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
  