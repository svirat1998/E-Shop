import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "../constants/cartConstants";
  import axios from "axios";
  
  // Add to Cart
  export const addmobileItemsToCart = (id, quantity) => async (dispatch, getState) => {
    // const { data } = await axios.get(`/api/v1/product/${id}`);
    const { data } = await axios.get(`/api/v6/mobileProduct/${id}`);
  
    dispatch({
      type: ADD_TO_CART,
      payload: {
        mobileProduct: data.mobileProduct._id,
        name: data.mobileProduct.name,
        price: data.mobileProduct.price,
        image: data.mobileProduct.images[0].url,
        stock: data.mobileProduct.Stock,
        quantity,
      },
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().mobileCart.cartItems));
  };
  
  // REMOVE FROM CART
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().mobileCart.cartItems));
  };
  
  // SAVE SHIPPING INFO
  export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };
  
  
  
  
  