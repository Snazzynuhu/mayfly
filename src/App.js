import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import "./App.css";
import Signup from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Error from "./components/Error";
import About from "./components/About/About";
import Review from "./components/Review/Review";
import Payment from "./components/Payment";
import GlobalStyle from "./GlobalStyles";
import Home from "./components/Home/Home";
import Navbar
 from "./components/Navbar/Navbar";
 import Foot from "./components/Footer/Footer";




const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      {loading ? (
        <HashLoader
          color={"orange"}
          loading={loading}
          size={150}
          className="hashloader"
        />
      ) : 

      <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/review" element={<Review />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </>
      }
    </div>
  );
};

export default App;
