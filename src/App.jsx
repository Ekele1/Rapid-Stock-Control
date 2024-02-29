import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css'
import HomePage from "./LandingPage";
import VerifyOtp from "./Components/onboarding/OtpVerification";
import MainPage from "./Components/mainPage/MainPage";
// import Settings from "./Components/settings/AllSettings";
import PasswordForget from "./Components/onboarding/ForgotYourPassword";
import Login from "./Components/onboarding/Loginyou";
import SignUp from "./Components/onboarding/Signup";
import ResetPassword from "./Components/onboarding/ResetYourPassword";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage/>
//   },
//   {
//     path: 'login',
//     element: <Login />
//   },
//   {
//     path: "forget",
//     element : <PasswordForget />
//   },
//   {
//     path: '/signup',
//     element: <SignUp />
//   },
//   {
//     path: "verify",
//     element: <VerifyOtp />
//   },
//   {
//     path: "reset",
//     element: <ResetPassword />
//   },
//   {
//     path: "main",
//     element: <MainPage />
//   },

//   {
//     path: "set",
//     element: <Settings />
//   },
// ])

function App() {

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <HashRouter >
      <Routes>
        <Route>
          <Route path='/' element={<HomePage />}/>
          <Route path='login' element={<Login />}/>
          <Route path='forget' element={<PasswordForget />}/>
          <Route path='signup' element={<SignUp />}/>
          <Route path='verify' element={<VerifyOtp />}/>
          <Route path='reset' element={<ResetPassword />}/>
          <Route path='main' element={<MainPage />}/>
        </Route>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
