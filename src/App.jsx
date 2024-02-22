import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from "./LandingPage";
import Dashboard from "./Components/dashBoard/dashBoard";
import Sales from "./Components/sales/sales";
import Productmanagment from "./Components/productManagment/ProductManagment";
import OrderManagment from "./Components/ordermanagment/OrderManagment";
import MainPage from "./Components/mainPage/MainPage";
import Header from "./Components/header/Header";
import QrCodeScanner from "./Components/qrcode/QrCode";
import Notification from "./Components/notification/notification";
import Purchase from "./Components/purchase/Purchase";
import Settings from "./Components/settings/Settings";
import AboutUs from "./Components/homePage/aboutus";
import Login from "./Components/onboarding/Login";
import SignUp from "./Components/onboarding/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  // {
  //   path: "dashboard",
  //   element: <Dashboard />
  // },
  // {
  //   path: "sales",
  //   element: <Sales />
  // },
  // {
  //   path: "productmanage",
  //   element: <Productmanagment />
  // },{
  //   path: "order",
  //   element: <OrderManagment />
  // },
  {
    path: "main",
    element: <MainPage />
  },
  // {
  //   path: "head",
  //   element: <Header />
  // },
  // {
  //   path: 'qr',
  //   element: <QrCodeScanner />
  // },
  // {
  //   path: 'notification',
  //   element: <Notification />
  // },
  // {
  //   path: "purchase",
  //   element: <Purchase />
  // },
  // {
  //   path: "set",
  //   element: <Settings />
  // },
  // {
  //   path: "aboutus",
  //   element: <AboutUs />
  // }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
