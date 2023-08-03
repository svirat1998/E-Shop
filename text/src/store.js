
import {configureStore} from "@reduxjs/toolkit";
import { latestProductDetailsReducer, latestProductsReducer, menNewReviewReducer, newMenProductReducer } from "./reducers/latestProduct";

import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productReviewsReducer,
  productsReducer,
  reviewReducer,
} from "./reducers/productReducer";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";

import { cartReducer } from "./reducers/cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";
import { menCartReducer } from "./reducers/menCartReducer";
import { newWomenProductReducer, womenNewReviewReducer, womenProductDetailsReducer, womenProductsReducer } from "./reducers/womenReducer";
import { womenCartReducer } from "./reducers/womenCartReducer";
import { kidNewReviewReducer, kidProductDetailsReducer, kidProductsReducer, newKidProductReducer } from "./reducers/kidReducer";
import { kidCartReducer } from "./reducers/kidCart";
import { bagNewReviewReducer, bagProductDetailsReducer, bagProductsReducer, newBagProductReducer } from "./reducers/bagReducer";
import { bagCartReducer } from "./reducers/bagCartReducer";
import { mobileCartReducer } from "./reducers/mobileCart";
import { mobileNewReviewReducer, mobileProductDetailsReducer, mobileProductsReducer, newMobileProductReducer } from "./reducers/mobileReducer";

const store = configureStore({
  reducer:{
  products:productsReducer,
  newproducts:latestProductsReducer,
  productDetails: productDetailsReducer,
  womenproducts:womenProductsReducer,
  kidproducts:kidProductsReducer,
  bagproducts:bagProductsReducer,
  mobileproducts:mobileProductsReducer,
  producttDetails: latestProductDetailsReducer,
  womenDetails: womenProductDetailsReducer,
  kidDetails: kidProductDetailsReducer,
  bagDetails: bagProductDetailsReducer,
  mobileDetails: mobileProductDetailsReducer,
    user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  menCart: menCartReducer,
  womenCart: womenCartReducer,
  kidCart:kidCartReducer,
  bagCart:bagCartReducer,
  mobileCart:mobileCartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  menNewReview: menNewReviewReducer,
  womenNewReview: womenNewReviewReducer,
  kidNewReview: kidNewReviewReducer,
  bagNewReview: bagNewReviewReducer,
  mobileNewReview: mobileNewReviewReducer,
  newProduct: newProductReducer,
  newMenProduct: newMenProductReducer,
  newWomenProduct: newWomenProductReducer,
  newKidProduct: newKidProductReducer,
  newBagProduct: newBagProductReducer,
  newMobileProduct: newMobileProductReducer,
  product: productReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,
  },
});

export default store ;






