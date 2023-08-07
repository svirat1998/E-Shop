import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./components/Signup/Signup";
import LoginPage from "./components/Login/Login";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import BestSellingPage from "./pages/BestSellingPage";
import ActivationPage from "./pages/ActivationPage";
import EventsPage from "./pages/EventsPage";
import FAQPage from "./pages/FAQPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import { useEffect } from "react";
import { getAllProducts } from "./redux/actions/product";
import { getAllEvents } from "./redux/actions/event";
import ProtectedRoute from "./routes/ProtectedRoute";
import CheckoutPage from "./pages/CheckoutPage";
import ProfilePage from "./pages/ProfilePage";
import UserInbox from "./pages/UserInbox";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import TrackOrderPage from "./pages/TrackOrderPage";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminDashboardUsers from "./pages/AdminDashboardUsers";
import AdminCreateProduct from "./pages/AdminCreateProduct";
import AdminDashboardProducts from "./pages/AdminDashboardProducts";
import AdminCreateEvent from "./pages/AdminCreateEvent";
import AdminDashboardEvents from "./pages/AdminDashboardEvents";
import AdminDashboardOrders from "./pages/AdminDashboardOrders";
import AdminOrderDetails from "./pages/AdminOrderDetails";
import AdminProductUpdate from "./pages/AdminProductUpdate";
import AdminWithDrawMoneyPage from "./pages/AdminWithDrawMoneyPage";
import AdminAllRefunds from "./pages/AdminAllRefunds";
import AdminAllCoupouns from "./pages/AdminAllCoupouns";
import AdminInboxPage from "./pages/AdminInboxPage";
import PaymentPage from "./pages/PaymentPage";
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
            <ProtectedAdminRoute>
              <AdminOrderDetails />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin-dashboard-create-product"
          element={
            <ProtectedAdminRoute>
              <AdminCreateProduct />
            </ProtectedAdminRoute>
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
            <ProtectedAdminRoute>
              <AdminWithDrawMoneyPage />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin-dashboard-messages"
          element={
            <ProtectedAdminRoute>
              <AdminInboxPage />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin-dashboard-coupouns"
          element={
            <ProtectedAdminRoute>
              <AdminAllCoupouns />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin-dashboard-refunds"
          element={
            <ProtectedAdminRoute>
              <AdminAllRefunds />
            </ProtectedAdminRoute>
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
