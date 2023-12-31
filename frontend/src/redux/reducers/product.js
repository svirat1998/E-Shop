import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const productReducer = createReducer(initialState, {
  productCreateRequest: (state) => {
    state.isLoading = true;
  },
  productCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  productCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get all products of Admin
  getAllProductsAdminRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsAdminSuccess: (state, action) => {
    state.isLoading = false;
    state.products = action.payload;
  },
  getAllProductsAdminFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // delete product of a shop
  deleteProductRequest: (state) => {
    state.isLoading = true;
  },
  deleteProductSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deleteProductFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all products
  getAllProductsRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsSuccess: (state, action) => {
    state.isLoading = false;
    state.allProducts = action.payload;
  },
  getAllProductsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  //update Admin -- Product

  productUpdateRequest: (state) => {
    state.isLoading = true;
  },
  productUpdateSuccess: (state={}, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  productUpdateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },
  
  clearErrors: (state) => {
    state.error = null;
  },
});

export const productDetailsReducer = createReducer(initialState, {
  
  // product Detaisl
  productDetailsRequest: (state) => {
    state.isLoading = true;
  },
  productDetailsSuccess: (state={product:{}}, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  productDetailsFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  
  clearErrors: (state) => {
    state.error = null;
  },
});




 