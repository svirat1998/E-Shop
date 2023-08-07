import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";

import { productDetailsReducer, productReducer } from "./reducers/product";
import { eventReducer } from "./reducers/event";
import { cartReducer } from "./reducers/cart";
import { wishlistReducer } from "./reducers/wishlist";
import { orderReducer } from "./reducers/order";


const Store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    producttDetails: productDetailsReducer,
    events: eventReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer,
  },
});

export default Store;
