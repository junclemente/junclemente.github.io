import React from "react";
import "./styles/main.scss";

import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/common/Footer";

const Root = () => (
  <div>
    <Hero />
    <About />
    <Experience />
    <Footer />
  </div>
);

export default Root;
