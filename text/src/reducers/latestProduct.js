

import { 
    LATEST_PRODUCT_REQUEST,
    LATEST_PRODUCT_SUCCESS,
    LATEST_PRODUCT_FAIL,
    LATESTPRODUCT_DETAILS_FAIL,
    LATESTPRODUCT_DETAILS_SUCCESS,
    LATESTPRODUCT_DETAILS_REQUEST,

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
    LATESTADMIN_PRODUCT_REQUEST,
    LATESTADMIN_PRODUCT_SUCCESS,
    LATESTADMIN_PRODUCT_FAIL,
    NEWLATEST_PRODUCT_REQUEST,
    NEWLATEST_PRODUCT_SUCCESS,
    NEWLATEST_PRODUCT_FAIL,
    NEWLATEST_PRODUCT_RESET
  

} from "../constants/latProdctCon";


export const latestProductsReducer = (state = { newproducts: [] }, action) => {
    switch (action.type) {
      case LATEST_PRODUCT_REQUEST:
      case LATESTADMIN_PRODUCT_REQUEST:
        return {
          loading: true,
          newproducts: [],
        };
      case LATEST_PRODUCT_SUCCESS:
        return {
          loading: false,
          newproducts: action.payload.newproducts,
          productsCount: action.payload.productsCount,
          resultPerPage: action.payload.resultPerPage,
          filteredProductsCount: action.payload.filteredProductsCount,
        };
  
      case LATESTADMIN_PRODUCT_SUCCESS:
        return {
          loading: false,
          newproducts: action.payload,
        };
      case LATEST_PRODUCT_FAIL:
      case LATESTADMIN_PRODUCT_FAIL:
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
  
  
export const newMenProductReducer = (state = { productt: {} }, action) => {
  switch (action.type) {
    case NEWLATEST_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEWLATEST_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        productt: action.payload.productt,
      };
    case NEWLATEST_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEWLATEST_PRODUCT_RESET:
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



  export const latestProductDetailsReducer = (state = { productt: {} }, action) => {
    switch (action.type) {
      case LATESTPRODUCT_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case LATESTPRODUCT_DETAILS_SUCCESS:
        return {
          loading: false,
          productt: action.payload,
        };
      case LATESTPRODUCT_DETAILS_FAIL:
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

  export const menNewReviewReducer = (state = {}, action) => {
    switch (action.type) {
      case NEW_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_REVIEW_SUCCESS:
        return {
          loading: false,
          success: action.payload,
        };
      case NEW_REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_REVIEW_RESET:
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
      case ALL_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ALL_REVIEW_SUCCESS:
        return {
          loading: false,
          reviews: action.payload,
        };
      case ALL_REVIEW_FAIL:
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
      case DELETE_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_REVIEW_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
      case DELETE_REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_REVIEW_RESET:
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
  