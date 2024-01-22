import React, { useContext } from "react";


import LoginPage from "./pages/Log";
import Dashboard from './pages/Dashboard';
import Carrots from "./pages/Carrots";

import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<LoginPage />} />
        <Route exact path="/dashboard"  element={<Dashboard />}/>
        <Route exact path="/carrots"  element={<Carrots />}/>

      </Routes>
      </BrowserRouter>
  )
}


export default App