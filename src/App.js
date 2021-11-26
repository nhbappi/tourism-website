import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Booking from './Components/Booking/Booking/Booking';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Guider from './Components/Guider/Guider';
import AddService from './Components/Pages/AddService/AddService';
import MyOders from './Components/Booking/MyOrders/MyOrders';
import MyOrders from './Components/Booking/MyOrders/MyOrders';
import ManageAll from './Components/Manage All Orders/ManageAll';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/booking/:serviceId">
           <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/Guider">
            <Guider></Guider>
          </PrivateRoute>
          <Route path="/contact">
             <Contact></Contact>
             </Route>
             <PrivateRoute path="/order">
            <MyOrders></MyOrders>
          </PrivateRoute>

             <Route path="/login">
               <Login></Login>
             </Route>
             <Route path="/register">
               <Register></Register>
             </Route>
             <PrivateRoute path="/addService">
               <AddService></AddService>
             </PrivateRoute>
             <PrivateRoute path ="/manageAll">
               <ManageAll></ManageAll>
             </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
     
    </div>
  );
}

export default App;
