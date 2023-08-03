import { ALLMOBILE_REVIEW_FAIL, ALLMOBILE_REVIEW_REQUEST, ALLMOBILE_REVIEW_SUCCESS, CLEAR_ERRORS, DELETEMOBILE_REVIEW_FAIL, DELETEMOBILE_REVIEW_REQUEST, DELETEMOBILE_REVIEW_RESET, DELETEMOBILE_REVIEW_SUCCESS, MOBILE_DETAILS_FAIL, MOBILE_DETAILS_REQUEST, MOBILE_DETAILS_SUCCESS, MOBILE_PRODUCT_FAIL, MOBILE_PRODUCT_REQUEST, MOBILE_PRODUCT_SUCCESS, NEWMOBILE_PRODUCT_FAIL, NEWMOBILE_PRODUCT_REQUEST, NEWMOBILE_PRODUCT_RESET, NEWMOBILE_PRODUCT_SUCCESS, NEWMOBILE_REVIEW_FAIL, NEWMOBILE_REVIEW_REQUEST, NEWMOBILE_REVIEW_RESET, NEWMOBILE_REVIEW_SUCCESS } from "../constants/mobileConstants";



  
  
export const mobileProductsReducer = (state = { mobileproducts: [] }, action) => {
    switch (action.type) {
      case MOBILE_PRODUCT_REQUEST:
    //   case ADMIN_PRODUCT_REQUEST:
        return {
          loading: true,
          mobileproducts: [],
        };
      case MOBILE_PRODUCT_SUCCESS:
        return {
          loading: false,
          mobileproducts: action.payload.mobileproducts,
          productsCount: action.payload.productsCount,
          resultPerPage: action.payload.resultPerPage,
          filteredProductsCount: action.payload.filteredProductsCount,
        };
  
    //   case ADMIN_PRODUCT_SUCCESS:
    //     return {
    //       loading: false,
    //       products: action.payload,
    //     };
      case MOBILE_PRODUCT_FAIL:
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
  



  export const mobileProductDetailsReducer = (state = { mobileProduct: {} }, action) => {
    switch (action.type) {
      case MOBILE_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case MOBILE_DETAILS_SUCCESS:
        return {
          loading: false,
          mobileProduct: action.payload,
        };
      case MOBILE_DETAILS_FAIL:
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


  export const newMobileProductReducer = (state = { mobileProduct: {} }, action) => {
    switch (action.type) {
      case NEWMOBILE_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEWMOBILE_PRODUCT_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          mobileProduct: action.payload.mobileProduct,
        };
      case NEWMOBILE_PRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEWMOBILE_PRODUCT_RESET:
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
 

  export const mobileNewReviewReducer = (state = {}, action) => {
    switch (action.type) {
      case NEWMOBILE_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEWMOBILE_REVIEW_SUCCESS:
        return {
          loading: false,
          success: action.payload,
        };
      case NEWMOBILE_REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEWMOBILE_REVIEW_RESET:
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
      case ALLMOBILE_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ALLMOBILE_REVIEW_SUCCESS:
        return {
          loading: false,
          reviews: action.payload,
        };
      case ALLMOBILE_REVIEW_FAIL:
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
      case DELETEMOBILE_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETEMOBILE_REVIEW_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
      case DELETEMOBILE_REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETEMOBILE_REVIEW_RESET:
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
  