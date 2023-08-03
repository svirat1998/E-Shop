import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "../constants/cartConstants";
  import axios from "axios";
  
  // Add to Cart
  export const addWomenItemsToCart = (id, quantity) => async (dispatch, getState) => {
    // const { data } = await axios.get(`/api/v1/product/${id}`);
    const { data } = await axios.get(`/api/v3/womenProduct/${id}`);
  
    dispatch({
      type: ADD_TO_CART,
      payload: {
        womenProduct: data.womenProduct._id,
        name: data.womenProduct.name,
        price: data.womenProduct.price,
        image: data.womenProduct.images[0].url,
        stock: data.womenProduct.Stock,
        quantity,
      },
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().womenCart.cartItems));
  };
  
  // REMOVE FROM CART
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().womenCart.cartItems));
  };
  
  // SAVE SHIPPING INFO
  export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };
  
  
  
  
  