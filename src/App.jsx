import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom'
// import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css'
import HomePage from "./LandingPage";
import VerifyOtp from "./Components/onboarding/OtpVerification";
// import MainPage from "./Components/mainpage/MainPage";
import MainPage from "./Components/MainpageOur/OurMain";
import Sales from "./Components/productManagment/sales/Allsales";
// import Sales from "./Components/productManagment/sales/Allsales";
import Settings from "./Components/settings/AllSettings";
import PasswordForget from "./Components/onboarding/ForgotYourPassword";
// import Login from "./Components/onboarding/Loginyou";
// import SignUp from "./Components/onboarding/Signup";
import ResetPassword from "./Components/onboarding/ResetYourPassword";
import NewLog from "./Components/onboarding/NewLog";
import NewSignIn from "./Components/onboarding/NewSign";
import { Toaster } from "react-hot-toast";
import Header from "./Components/header/Header";
import PageDashboard from "./pages/dashboardpage/dashboard";
import OrderManagment from "./Components/ordermanagment/AllOrderManagment";
import ManageOrderPage from "./pages/ordermanagementPage/orderManage";
import ManageProductPage from "./pages/productmanagment/productManage";
import PurchasePage from "./pages/purchasepage/pagePurchase";
import SalesPageManagement from "./pages/salespage/pageSale";
import SettingsPage from "./pages/settingspage/pageSettings";
import LoginStaff from "./Components/onboarding/staffonboarding/login/login/stafflogin";
import ForgetStaffPassword from "./Components/onboarding/staffonboarding/login/forgetpassword/forgetStaffpasswword";

function App() {

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <HashRouter >
      <Routes>
        <Route>
          <Route path='/' element={<HomePage />}/>
          {/* <Route path='login' element={<Login />}/> */}
          <Route path='forget' element={<PasswordForget />}/>
          {/* <Route path='signup' element={<SignUp />}/> */}
          <Route path='verify' element={<VerifyOtp />}/>
          <Route path='reset' element={<ResetPassword />}/>
          {/* <Route path='main' element={<MainPage />}/> */}
          <Route path='signup' element={<NewLog />}/>
          <Route path='login' element={<NewSignIn />}/>
          <Route path='stafflogin' element={<LoginStaff />}/>
          <Route path='staffpassword' element={<ForgetStaffPassword />}/>
          <Route path='head' element={<Header />}/>
          <Route path='set' element={<Settings />}/>
          <Route path='dashboard' element={<PageDashboard />}/>
          <Route path='order' element={<ManageOrderPage />}/>
          <Route path='productmanage' element={<ManageProductPage />}/>
          <Route path='purchase' element={<PurchasePage />}/>
          <Route path='sales' element={<SalesPageManagement />}/>
          <Route path='salesstaff' element={<Sales />}/>
          <Route path='settings' element={<SettingsPage />}/>
        </Route>
      </Routes>
      <Toaster />
    </HashRouter>
    </>
  )
}

export default App
