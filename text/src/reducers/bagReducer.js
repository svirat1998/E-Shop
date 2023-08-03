

import { ALLBAG_REVIEW_FAIL, ALLBAG_REVIEW_REQUEST, ALLBAG_REVIEW_SUCCESS, BAG_DETAILS_FAIL, BAG_DETAILS_REQUEST, BAG_DETAILS_SUCCESS, BAG_PRODUCT_FAIL, BAG_PRODUCT_REQUEST, BAG_PRODUCT_SUCCESS, DELETEBAG_REVIEW_FAIL, DELETEBAG_REVIEW_REQUEST, DELETEBAG_REVIEW_RESET, DELETEBAG_REVIEW_SUCCESS, NEWBAG_REVIEW_FAIL, NEWBAG_REVIEW_REQUEST, NEWBAG_REVIEW_RESET, NEWBAG_REVIEW_SUCCESS,CLEAR_ERRORS, NEWBAG_PRODUCT_REQUEST, NEWBAG_PRODUCT_SUCCESS, NEWBAG_PRODUCT_FAIL, NEWBAG_PRODUCT_RESET } from "../constants/bagConstants";
  
  
  export const bagProductsReducer = (state = { bagproducts: [] }, action) => {
      switch (action.type) {
        case BAG_PRODUCT_REQUEST:
      //   case ADMIN_PRODUCT_REQUEST:
          return {
            loading: true,
            bagproducts: [],
          };
        case BAG_PRODUCT_SUCCESS:
          return {
            loading: false,
            bagproducts: action.payload.bagproducts,
            productsCount: action.payload.productsCount,
            resultPerPage: action.payload.resultPerPage,
            filteredProductsCount: action.payload.filteredProductsCount,
          };
    
      //   case ADMIN_PRODUCT_SUCCESS:
      //     return {
      //       loading: false,
      //       products: action.payload,
      //     };
        case BAG_PRODUCT_FAIL:
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
    
    export const newBagProductReducer = (state = { bagProduct: {} }, action) => {
      switch (action.type) {
        case NEWBAG_PRODUCT_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case NEWBAG_PRODUCT_SUCCESS:
          return {
            loading: false,
            success: action.payload.success,
            bagProduct: action.payload.bagProduct,
          };
        case NEWBAG_PRODUCT_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
        case NEWBAG_PRODUCT_RESET:
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
    
  
  
  
    export const bagProductDetailsReducer = (state = { bagProduct: {} }, action) => {
      switch (action.type) {
        case BAG_DETAILS_REQUEST:
          return {
            loading: true,
            ...state,
          };
        case BAG_DETAILS_SUCCESS:
          return {
            loading: false,
            bagProduct: action.payload,
          };
        case BAG_DETAILS_FAIL:
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
  
    export const bagNewReviewReducer = (state = {}, action) => {
      switch (action.type) {
        case NEWBAG_REVIEW_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case NEWBAG_REVIEW_SUCCESS:
          return {
            loading: false,
            success: action.payload,
          };
        case NEWBAG_REVIEW_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
        case NEWBAG_REVIEW_RESET:
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
        case ALLBAG_REVIEW_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case ALLBAG_REVIEW_SUCCESS:
          return {
            loading: false,
            reviews: action.payload,
          };
        case ALLBAG_REVIEW_FAIL:
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
        case DELETEBAG_REVIEW_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case DELETEBAG_REVIEW_SUCCESS:
          return {
            ...state,
            loading: false,
            isDeleted: action.payload,
          };
        case DELETEBAG_REVIEW_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
        case DELETEBAG_REVIEW_RESET:
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
    