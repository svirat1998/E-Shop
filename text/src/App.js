// import "./App.css";
// import { useEffect,  } from "react";
// import Header from "./component/layout/Header/Header.js";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import WebFont from "webfontloader";
// import React from "react";
// import Footer from "./component/layout/Footer/Footer";
// import Home from "./component/Home/Home";
// import ProductDetails from "./component/Product/ProductDetails";
// import MenProductDetails from "./component/Product/MenProductDetails";
// import WomenProductDetails from "./component/Product/WomenProductDetails.js";
// import KidProductDetails from "./component/Product/kidProductDetails.js";
// import BagProductDetails from "./component/Product/BagProductDetails.js";
// import MobileProductDetails from "./component/Product/MobileProductDetails.js";
// import Products from "./component/Product/Products";
// import Search from "./component/Product/Search";
// import LoginSignUp from "./component/User/LoginSignUp";
// import store from "./store";
// import { loadUser,clearErrors } from "./actions/userAction";
// import UserOptions from "./component/layout/Header/UserOptions";
// import { useDispatch, useSelector } from "react-redux";
// import Profile from "./component/User/Profile";
// import ProtectedRoute from "./component/Route/ProtectedRoute";
// import UpdateProfile from "./component/User/UpdateProfile";
// import UpdatePassword from "./component/User/UpdatePassword";
// import ForgotPassword from "./component/User/ForgotPassword";
// import ResetPassword from "./component/User/ResetPassword";
// import Cart from "./component/Cart/Cart";
// import Shipping from "./component/Cart/Shipping";
// import ConfirmOrder from "./component/Cart/ConfirmOrder";
// // import axios from "axios";
// // import Payment from "./component/Cart/Payment";
// // import { Elements } from "@stripe/react-stripe-js";
// // import { loadStripe } from "@stripe/stripe-js";
// import OrderSuccess from "./component/Cart/OrderSuccess";
// import MyOrders from "./component/Order/MyOrders";
// import OrderDetails from "./component/Order/OrderDetails";
// import Dashboard from "./component/Admin/Dashboard.js";
// import ProductList from "./component/Admin/ProductList.js";
// import KidList from "./component/Admin/KidList.js";
// import MenList from "./component/Admin/MenList.js";
// import WomenList from "./component/Admin/WomenList.js";
// import BagList from "./component/Admin/BagList.js";
// import MobileList from "./component/Admin/MobileList.js";
// import NewProduct from "./component/Admin/NewProduct";
// import NewMenProduct from "./component/Admin/newMenProduct";
// import NewKidProduct from "./component/Admin/kidProduct";
// import NewWomenProduct from "./component/Admin/WomenProduct";
// import NewBagProduct from "./component/Admin/BagProduct";
// import NewMobileProduct from "./component/Admin/MobileProduct";
// import UpdateProduct from "./component/Admin/UpdateProduct";
// import UpdateKidProduct from "./component/Admin/UpdateKid";
// import UpdateMenProduct from "./component/Admin/UpdateMen";
// import UpdateBagProduct from "./component/Admin/UpdateBag";
// import UpdateWomenProduct from "./component/Admin/UpdateWomen";
// import UpdateMobileProduct from "./component/Admin/UpdateMobile";
// import OrderList from "./component/Admin/OrderList";
// import ProcessOrder from "./component/Admin/ProcessOrder";
// import UsersList from "./component/Admin/UsersList";
// import UpdateUser from "./component/Admin/UpdateUser";
// import ProductReviews from "./component/Admin/ProductReviews";
// import Contact from "./component/layout/Contact/Contact";
// import About from "./component/layout/About/About";
// import NotFound from "./component/layout/Not Found/NotFound";
// import toast,{Toaster} from "react-hot-toast"
// import Men from "./Categories/Men";
// import Women from "./Categories/Women";
// import Kid from "./Categories/Kid";
// import Bag from "./Categories/Bags & Footware";
// import Mobile from "./Categories/Mobile";



// function App() {

// const dispatch=useDispatch()

//   const { isAuthenticated, user,message,error } = useSelector((state) => state.user);

//   // const [stripeApiKey, setStripeApiKey] = useState("");

//   // async function getStripeApiKey() {
//   //   const { data } = await axios.get("/api/v1/stripeapikey");

//   //   setStripeApiKey(data.stripeApiKey);
//   // }

//   useEffect(() => {  
//     WebFont.load({
//       google: {
//         families: ["Roboto", "Droid Sans", "Chilanka"],
//       },
//     });
//     store.dispatch(loadUser());
//     // getStripeApiKey();
//     if(error){
//       // toast.error(error);
//       dispatch(clearErrors());
//     }
//     if(message){
//       toast.success(message);
//       dispatch(clearErrors());
//     }
//   }, [dispatch,error,message]);

//   // window.addEventListener("contextmenu", (e) => e.preventDefault());
  

//   return (
//     <Router>
//       <Header />
      

//       {isAuthenticated && <UserOptions user={user} />}
// {/* 
//       {stripeApiKey && (
//         <Elements stripe={loadStripe(stripeApiKey)}>
//           <Route  path="/process/payment" element={<Payment/>} />
//          </Elements>
//       )} */}


//       <Routes>
      
//         <Route  path="/" element={<Home/>} />
//         <Route  path="/product/:id" element={<ProductDetails/>} />
//         <Route  path="/men" element={<Men/>} />
//         <Route  path="/women" element={<Women/>} />
//         <Route  path="/kids" element={<Kid/>} />
//         <Route  path="/mobile" element={<Mobile/>} />
//         <Route  path="/bag%20&%20Footware" element={<Bag/>} />
//         <Route  path="/productt/:id" element={<MenProductDetails/>} />
//         <Route  path="/womenProduct/:id" element={<WomenProductDetails/>} />
//         <Route  path="/kidProduct/:id" element={<KidProductDetails/>} />
//         <Route  path="/bagProduct/:id" element={<BagProductDetails/>} />
//         <Route  path="/mobileProduct/:id" element={<MobileProductDetails/>} />
//         <Route  path="/products" element={<Products/>} />
//         <Route  path="/products/:keyword" element={<Products/>} />
        

//         <Route  path="/search" element={<Search/>} />

//         <Route  path="/contact" element={<Contact/>} />

//         <Route  path="/about" element={<About/>} />


//         <Route  element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
//         <Route path="/account" element={<Profile/> }/>
//         <Route  path="/me/update" element={<UpdateProfile/>}  />
//         <Route  path="/shipping" element={<Shipping/>}  />
//         <Route  path="/success"  element={<OrderSuccess/>} />
//         <Route  path="/orders" element={<MyOrders/>} />
//         <Route  path="/order/confirm" element={<ConfirmOrder/>}/> 
//         <Route  path="/order/:id" element={<OrderDetails/>} />
//         </Route>

//          <Route  element={<ProtectedRoute isAuthenticated={isAuthenticated}
//           adminRoute={true}  isAdmin={true} />}>
//            <Route
//           // isAdmin={true}
//           path="/admin/dashboard"
          
//           element= {<Dashboard/>}
//         />
//         <Route
//           path="/admin/products"
//           element={<ProductList/>} 
//         />
//         <Route
//           path="/admin/kidproducts"
//           element={<KidList/>} 
//         />
//         <Route
//           path="/admin/newproducts"
//           element={<MenList/>} 
//         />
//         <Route
//           path="/admin/womenproducts"
//           element={<WomenList/>} 
//         />
//         <Route
//           path="/admin/bagproducts"
//           element={<BagList/>} 
//         />
//         <Route
//           path="/admin/mobileproducts"
//           element={<MobileList/>} 
//         />
//         <Route
//           path="/admin/product"
//           element={<NewProduct/>}
//         />
        
//         <Route
//           path="/admin/productt"
//           element={<NewMenProduct/>}
//         />
//         <Route
//           path="/admin/womenProduct"
//           element={<NewWomenProduct/>}
//         />
//         <Route
//           path="/admin/kidProduct"
//           element={<NewKidProduct/>}
//         />
//         <Route
//           path="/admin/bagProduct"
//           element={<NewBagProduct/>}
//         />
//         <Route
//           path="/admin/mobileProduct"
//           element={<NewMobileProduct/>}
//         />

//         <Route          
//           path="/admin/product/:id"
//           element={<UpdateProduct/>}
//         />
//         <Route          
//           path="/admin/productt/:id"
//           element={<UpdateMenProduct/>}
//         />
//         <Route          
//           path="/admin/womenProduct/:id"
//           element={<UpdateWomenProduct/>}
//         />
//         <Route          
//           path="/admin/kidProduct/:id"
//           element={<UpdateKidProduct/>}
//         />
//         <Route          
//           path="/admin/bagProduct/:id"
//           element={<UpdateBagProduct/>}
//         />
//         <Route          
//           path="/admin/mobileProduct/:id"
//           element={<UpdateMobileProduct/>}
//         />
//         <Route
//           path="/admin/orders"
//           element={<OrderList/>}
        
//         />

//         <Route
//           path="/admin/order/:id"
//           element={<ProcessOrder/>}
          
//         />
//         <Route
//           path="/admin/users"
//           element={<UsersList/>}
    
//         />

//         <Route
//           path="/admin/user/:id"
//           // isAdmin={user.role==="admin"? true:false}
//           element={<UpdateUser/>}
        
//         />

//         <Route
//           path="/admin/reviews"
//           element={<ProductReviews/>}
  
//         />

//            </Route> 

//         <Route
//           path="/password/update"
//           element={<UpdatePassword/>}
//         />

//         <Route path="/password/forgot" element={<ForgotPassword/>} />

//         <Route  path="/password/reset/:token" element={<ResetPassword/>} />

//         <Route  path="/login" element={<LoginSignUp/>} />
        

//         <Route  path="/cart" element={<Cart/>} />

        

      
//         <Route
//           component={
//             window.location.pathname === "/process/payment" ? null : NotFound
//           }
//         />
       
//       </Routes>
      
//        <Toaster/>
//       <Footer />
//     </Router>
//   );
// }

// export default App;





import React from 'react'
import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home.js";
import Footer from "./component/layout/Footer/Footer.js";
import ProductDetails from "./component/Product/ProductDetails.js"



const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route  path="/product/:id" element={<ProductDetails/>} />
      
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App










