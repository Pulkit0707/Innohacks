import "./App.css";
import React, {useState} from "react";
import Home from "./pages/Home/Home"
import LoginForm from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import { BrowserRouter, Routes } from "react-router-dom";

export default App=function(){
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/sign-up" element={<SignUp />}></Route>
      <Route exact path="/login" element={<LoginForm />}></Route>
    </Routes>
  </BrowserRouter>
}

