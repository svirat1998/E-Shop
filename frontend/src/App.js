// import React, { useEffect, useState } from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {
//   LoginPage,
//   SignupPage,
//   ActivationPage,
//   HomePage,
//   ProductsPage,
//   BestSellingPage,
//   EventsPage,
//   FAQPage,
//   CheckoutPage,
//   PaymentPage,
//   OrderSuccessPage,
//   ProductDetailsPage,
//   ProfilePage,
//   ShopCreatePage,
//   SellerActivationPage,
//   ShopLoginPage,
//   OrderDetailsPage,
//   TrackOrderPage,
//   UserInbox,
// } from "./routes/Routes.js";
// import {
//   ShopDashboardPage,
//   ShopCreateProduct,
//   ShopAllProducts,
//   ShopCreateEvents,
//   ShopAllEvents,
//   ShopAllCoupouns,
//   ShopPreviewPage,
//   ShopAllOrders,
//   ShopOrderDetails,
//   ShopAllRefunds,
//   ShopSettingsPage,
//   ShopWithDrawMoneyPage,
//   ShopInboxPage,
// } from "./routes/ShopRoutes";
// import {
//   AdminDashboardPage,
//   AdminDashboardUsers,
//   AdminDashboardSellers,
//   AdminDashboardOrders,
//   AdminDashboardProducts,
//   AdminDashboardEvents,
//   AdminDashboardWithdraw
// } from "./routes/AdminRoutes";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Store from "./redux/store";
// import { loadSeller, loadUser } from "./redux/actions/user";
// import ProtectedRoute from "./routes/ProtectedRoute";
// import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";
// import { ShopHomePage } from "./ShopRoutes.js";
// import SellerProtectedRoute from "./routes/SellerProtectedRoute";
// import { getAllProducts } from "./redux/actions/product";
// import { getAllEvents } from "./redux/actions/event";
// import axios from "axios";
// import { server } from "./server";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// const App = () => {
//   const [stripeApikey, setStripeApiKey] = useState("");

//   async function getStripeApikey() {
//     const { data } = await axios.get(`${server}/payment/stripeapikey`);
//     setStripeApiKey(data.stripeApikey);
//   }
//   useEffect(() => {
//     Store.dispatch(loadUser());
//     Store.dispatch(loadSeller());
//     Store.dispatch(getAllProducts());
//     Store.dispatch(getAllEvents());
//     getStripeApikey();
//   }, []);

//   return (
//     <BrowserRouter>
//       {stripeApikey && (
//         <Elements stripe={loadStripe(stripeApikey)}>
//           <Routes>
//             <Route
//               path="/payment"
//               element={
//                 <ProtectedRoute>
//                   <PaymentPage />
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>
//         </Elements>
//       )}
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/sign-up" element={<SignupPage />} />
//         <Route
//           path="/activation/:activation_token"
//           element={<ActivationPage />}
//         />
//         <Route
//           path="/seller/activation/:activation_token"
//           element={<SellerActivationPage />}
//         />
//         <Route path="/products" element={<ProductsPage />} />
//         <Route path="/product/:id" element={<ProductDetailsPage />} />
//         <Route path="/best-selling" element={<BestSellingPage />} />
//         <Route path="/events" element={<EventsPage />} />
//         <Route path="/faq" element={<FAQPage />} />
//         <Route
//           path="/checkout"
//           element={
//             <ProtectedRoute>
//               <CheckoutPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/order/success" element={<OrderSuccessPage />} />
//         <Route
//           path="/profile"
//           element={
//             <ProtectedRoute>
//               <ProfilePage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/inbox"
//           element={
//             <ProtectedRoute>
//               <UserInbox />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/user/order/:id"
//           element={
//             <ProtectedRoute>
//               <OrderDetailsPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/user/track/order/:id"
//           element={
//             <ProtectedRoute>
//               <TrackOrderPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />
//         {/* shop Routes */}
//         <Route path="/shop-create" element={<ShopCreatePage />} />
//         <Route path="/shop-login" element={<ShopLoginPage />} />
//         <Route
//           path="/shop/:id"
//           element={
//             <SellerProtectedRoute>
//               <ShopHomePage />
//             </SellerProtectedRoute>
//           }
//         />
//         <Route
//           path="/settings"
//           element={
//             <SellerProtectedRoute>
//               <ShopSettingsPage />
//             </SellerProtectedRoute>
//           }
//         />
//         <Route
//           path="/dashboard"
//           element={
//             <SellerProtectedRoute>
//               <ShopDashboardPage />
//             </SellerProtectedRoute>
//           }
//         />
//         <Route
//           path="/dashboard-create-product"
//           element={
//             <SellerProtectedRoute>
//               <ShopCreateProduct />
//             </SellerProtectedRoute>
//           }
//         />
//         <Route
//           path="/dashboard-orders"
//           element={
//             <SellerProtectedRoute>
//               <ShopAllOrders />
//             </SellerProtectedRoute>
//           }
//         />
//         <Route
//           path="/dashboard-refunds"
//           element={
//             <SellerProtectedRoute>
//               <ShopAllRefunds />
//             </SellerProtectedRoute>
//           }
//         />

//         <Route
//           path="/order/:id"
//           element={
//             <SellerProtectedRoute>
//               <ShopOrderDetails />
//             </SellerProtectedRoute>
//           }
//         />
//         <Route
//           path="/dashboard-products"
//           element={
//             <SellerProtectedRoute>
//               <ShopAllProducts />
//             </SellerProtectedRoute>
//           }
//         />
//         <Route
//           path="/dashboard-create-event"
//           element={
//             <SellerProtectedRoute>
//               <ShopCreateEvents />
//             </SellerProtectedRoute>
//           }
//         />
//         <Route
//           path="/dashboard-events"
//           element={
//             <SellerProtectedRoute>
//               <ShopAllEvents />
//             </SellerProtectedRoute>
//           }
//         />
//         <Route
//           path="/dashboard-coupouns"
//           element={
//             <SellerProtectedRoute>
//               <ShopAllCoupouns />
//             </SellerProtectedRoute>
//           }
//         />
//         <Route
//           path="/dashboard-withdraw-money"
//           element={
//             <SellerProtectedRoute>
//               <ShopWithDrawMoneyPage />
//             </SellerProtectedRoute>
//           }
//         />
//         <Route
//           path="/dashboard-messages"
//           element={
//             <SellerProtectedRoute>
//               <ShopInboxPage />
//             </SellerProtectedRoute>
//           }
//         />
//         {/* Admin Routes */}
//         <Route
//           path="/admin/dashboard"
//           element={
//             <ProtectedAdminRoute>
//               <AdminDashboardPage />
//             </ProtectedAdminRoute>
//           }
//         />
//         <Route
//           path="/admin-users"
//           element={
//             <ProtectedAdminRoute>
//               <AdminDashboardUsers />
//             </ProtectedAdminRoute>
//           }
//         />
//         <Route
//           path="/admin-sellers"
//           element={
//             <ProtectedAdminRoute>
//               <AdminDashboardSellers />
//             </ProtectedAdminRoute>
//           }
//         />
//         <Route
//           path="/admin-orders"
//           element={
//             <ProtectedAdminRoute>
//               <AdminDashboardOrders />
//             </ProtectedAdminRoute>
//           }
//         />
//          <Route
//           path="/admin-products"
//           element={
//             <ProtectedAdminRoute>
//               <AdminDashboardProducts />
//             </ProtectedAdminRoute>
//           }
//         />
//          <Route
//           path="/admin-events"
//           element={
//             <ProtectedAdminRoute>
//               <AdminDashboardEvents />
//             </ProtectedAdminRoute>
//           }
//         />
//          <Route
//           path="/admin-withdraw-request"
//           element={
//             <ProtectedAdminRoute>
//               <AdminDashboardWithdraw />
//             </ProtectedAdminRoute>
//           }
//         />
//       </Routes>
//       <ToastContainer
//         position="bottom-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/Login"
import HomePage from "./pages/HomePage";
import SignupPage from "./components/Signup/Signup";
import LoginPage from "./components/Login/Login";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import BestSellingPage from "./pages/BestSellingPage";
import ActivationPage from "./pages/ActivationPage";
import SellerActivationPage from "./pages/SellerActivationPage";
import EventsPage from "./pages/EventsPage";
import FAQPage from "./pages/FAQPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadUser,loadSeller } from "./redux/actions/user";
import { useEffect } from "react";
import { getAllProducts } from "./redux/actions/product";
import { getAllEvents } from "./redux/actions/event";
import ProtectedRoute from "./routes/ProtectedRoute";
import CheckoutPage from "./pages/CheckoutPage";
import ProfilePage from "./pages/ProfilePage";
import UserInbox from "./pages/UserInbox"
import OrderSuccessPage from "./pages/OrderSuccessPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import TrackOrderPage from "./pages/TrackOrderPage";
import ShopPreviewPage from "./pages/Shop/ShopPreviewPage";
import ShopCreate from "./components/Shop/ShopCreate";
import ShopLogin from "./components/Shop/ShopLogin";
import SellerProtectedRoute from "./routes/SellerProtectedRoute";
import ShopDashboardPage from "./pages/Shop/ShopDashboardPage";
import ShopHomePage from "./pages/Shop/ShopHomePage";
import ShopAllOrders from "./pages/Shop/ShopAllOrders";
import ShopOrderDetails from "./pages/Shop/ShopOrderDetails";
import ShopAllProducts from "./pages/Shop/ShopAllProducts";
import ShopCreateProduct from "./pages/Shop/ShopCreateProduct";
import ShopCreateEvents from "./pages/Shop/ShopCreateEvents";
import ShopWithDrawMoneyPage from "./pages/Shop/ShopWithDrawMoneyPage";
import ShopInboxPage from "./pages/Shop/ShopInboxPage";
import ShopAllCoupouns from "./pages/Shop/ShopAllCoupouns";
import ShopAllRefunds from "./pages/Shop/ShopAllRefunds";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";
import AdminDashboardPage from "./pages/AdminDashboardPage"
import AdminDashboardUsers from "./pages/AdminDashboardUsers"
import AdminCreateProduct from "./pages/AdminCreateProduct"
import AdminDashboardProducts from "./pages/AdminDashboardProducts"
import AdminCreateEvent from "./pages/AdminCreateEvent"
import AdminDashboardEvents from "./pages/AdminDashboardEvents"
import AdminDashboardOrders from "./pages/AdminDashboardOrders"
import AdminOrderDetails from "./pages/AdminOrderDetails"
import AdminProductUpdate from "./pages/AdminProductUpdate"
import AdminWithDrawMoneyPage from "./pages/AdminWithDrawMoneyPage"
import AdminAllRefunds from "./pages/AdminAllRefunds"
import AdminAllCoupouns from "./pages/AdminAllCoupouns"
import AdminInboxPage from "./pages/AdminInboxPage"
import PaymentPage from "./pages/PaymentPage"
import axios from "axios";
import { server } from "./server";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const App = () => {
  const [stripeApikey, setStripeApiKey] = useState("");

  async function getStripeApikey() {
        const { data } = await axios.get(`${server}/payment/stripeapikey`);
        setStripeApiKey(data.stripeApikey);
      }

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    Store.dispatch(getAllEvents());
    getStripeApikey();
  }, []);
  return (
    <BrowserRouter>
       {stripeApikey && (
       <Elements stripe={loadStripe(stripeApikey)}>
        <Routes>
          <Route  
            path="/payment"
            element={
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            }
          />
        </Routes>
        </Elements>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route
          path="/seller/activation/:activation_token"
          element={<SellerActivationPage />}
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FAQPage />} />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />

       <Route path="/order/success" element={<OrderSuccessPage />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/inbox"
          element={
            <ProtectedRoute>
              <UserInbox />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/order/:id"
          element={
            <ProtectedRoute>
              <OrderDetailsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/track/order/:id"
          element={
            <ProtectedRoute>
              <TrackOrderPage />
            </ProtectedRoute>
          }
        />

        <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />
        {/* shop Routes */}
        <Route path="/shop-create" element={<ShopCreate />} />
        <Route path="/shop-login" element={<ShopLogin />} />

        <Route
          path="/dashboard"
          element={
            <SellerProtectedRoute>
            <ShopDashboardPage />
            </SellerProtectedRoute>
          }
        />

              <Route
          path="/shop/:id"
          element={
            <SellerProtectedRoute>
              <ShopHomePage />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/dashboard-orders"
          element={
            <SellerProtectedRoute>
            <ShopAllOrders />
            </SellerProtectedRoute>
          }
        />

         <Route
          path="/order/:id"
          element={
            <SellerProtectedRoute>
              <ShopOrderDetails />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/dashboard-products"
          element={
            <SellerProtectedRoute>
            <ShopAllProducts />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/dashboard-create-product"
          element={
            <SellerProtectedRoute>
            <ShopCreateProduct />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-create-event"
          element={
            <SellerProtectedRoute>
            <ShopCreateEvents />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/dashboard-withdraw-money"
          element={
            <SellerProtectedRoute>
            <ShopWithDrawMoneyPage />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/dashboard-messages"
          element={
            <SellerProtectedRoute>
            <ShopInboxPage />
             </SellerProtectedRoute>
          }
        />

        <Route
          path="/dashboard-coupouns"
          element={
            <SellerProtectedRoute>
            <ShopAllCoupouns />
             </SellerProtectedRoute>
          }
        />

        <Route
          path="/dashboard-refunds"
          element={
            <SellerProtectedRoute>
            <ShopAllRefunds />
            </SellerProtectedRoute>
          }
        />


         {/* Admin Routes */}
       <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-users"
          element={
             <ProtectedAdminRoute>
              <AdminDashboardUsers />
            </ProtectedAdminRoute>
          }
        />

          

        <Route
          path="/admin-orders"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardOrders />
            </ProtectedAdminRoute>
          }
         />

       <Route
          path="/admin-order/:id"
          element={
            <SellerProtectedRoute>
              <AdminOrderDetails />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/admin-dashboard-create-product"
          element={
            <SellerProtectedRoute>
            <AdminCreateProduct />
            </SellerProtectedRoute>
          }
        />


         <Route
            path="/admin-products"
           element={
            <ProtectedAdminRoute>
              <AdminDashboardProducts />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-create-event"
          element={
            <ProtectedAdminRoute>
              <AdminCreateEvent />
            </ProtectedAdminRoute>
          }
        />

          <Route
          path="/admin-events"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardEvents />
            </ProtectedAdminRoute>
          }
        />
          <Route
          path="/admin-product-update"
          element={
            <ProtectedAdminRoute>
              <AdminProductUpdate />
            </ProtectedAdminRoute>
          }
        />

     <Route
          path="/admin-dashboard-withdraw"
          element={
            <SellerProtectedRoute>
            <AdminWithDrawMoneyPage />
            </SellerProtectedRoute>
          }
        />


        
<Route
          path="/admin-dashboard-messages"
          element={
            <SellerProtectedRoute>
            <AdminInboxPage />
             </SellerProtectedRoute>
          }
        />

        <Route
          path="/admin-dashboard-coupouns"
          element={
            <SellerProtectedRoute>
            <AdminAllCoupouns />
             </SellerProtectedRoute>
          }
        />

        <Route
          path="/admin-dashboard-refunds"
          element={
            <SellerProtectedRoute>
            <AdminAllRefunds />
            </SellerProtectedRoute>
          }
        />

      </Routes>
  
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hi
        deProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
