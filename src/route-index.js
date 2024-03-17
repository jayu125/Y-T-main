import Main from "./main/main";
import Ask from "./forask/ask";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header/header";
import "./route.css";
import About from "./about/about";

function Index() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/문의" element={<Ask />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
