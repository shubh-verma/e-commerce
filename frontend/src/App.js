import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React, { useEffect, useState } from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LogInSignUp from "./component/User/LogInSignUp";
import store from "./store";
import { loadUser } from "./action/userAction";
import UserOption from "./component/layout/Header/UserOption.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
// import Payment from "./component/Cart/Payment.js";
// import axios from "axios";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Orders/MyOrders.js";
import OrderDetails from "./component/Orders/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from "./component/Admin/OrderList.js";
import ProcessOrder from "./component/Admin/ProcessOrder.js";
import UsersList from "./component/Admin/UsersList.js";
import UpdateUser from "./component/Admin/UpdateUser.js";
import ProductReviews from "./component/Admin/ProductReviews.js";
import NotFound from "./component/layout/Not Found/NotFound";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About.js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  //const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey() {
  //   const { data } = await axios.get("/api/v1/stripeapikey");
  //   setStripeApiKey(data.stripeApiKey);
  // }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());

    //getStripeApiKey();
  }, []);

  //window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOption user={user} />}

      {/* {stripeApiKey && (
        <Elements stripe={loadStripe(setStripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" element={<Payment />} />
        </Elements>
      )} */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
      </Routes>

      <ProtectedRoute exact path="/account" element={<Profile />} />
      <ProtectedRoute exact path="/me/update" element={<UpdateProfile />} />
      <ProtectedRoute
        exact
        path="/password/update"
        element={<UpdatePassword />}
      />
      <Routes>
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route exact path="/login" element={<LogInSignUp />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <ProtectedRoute exact path="/shipping" element={<Shipping />} />
      <ProtectedRoute exact path="/success" element={<OrderSuccess />} />
      <ProtectedRoute exact path="/orders" element={<MyOrders />} />
      <ProtectedRoute exact path="/order/confirm" element={<ConfirmOrder />} />
      <ProtectedRoute exact path="/order/:id" element={<OrderDetails />} />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/dashboard"
        element={<Dashboard />}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/products"
        element={<ProductList />}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/product"
        element={<NewProduct />}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/product/:id"
        element={<UpdateProduct />}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/orders"
        element={<OrderList />}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/order/:id"
        element={<ProcessOrder />}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/users"
        element={<UsersList />}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/user/:id"
        element={<UpdateUser />}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/reviews"
        element={<ProductReviews />}
      />
      <Routes>
        <Route
          path="*"
          element={
            window.location.pathname === "/process/payment" ? null : (
              <NotFound />
            )
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
