import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "../constants/cartConstants";
  import axios from "axios";
  
  // Add to Cart
  export const addKidItemsToCart = (id, quantity) => async (dispatch, getState) => {
    // const { data } = await axios.get(`/api/v1/product/${id}`);
    const { data } = await axios.get(`/api/v4/kidProduct/${id}`);
  
    dispatch({
      type: ADD_TO_CART,
      payload: {
        kidProduct: data.kidProduct._id,
        name: data.kidProduct.name,
        price: data.kidProduct.price,
        image: data.kidProduct.images[0].url,
        stock: data.kidProduct.Stock,
        quantity,
      },
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().kidCart.cartItems));
  };
  
  // REMOVE FROM CART
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().kidCart.cartItems));
  };
  
  // SAVE SHIPPING INFO
  export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };
  
  
  
  
  