import React from "react";
import "./styles/main.scss";

import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

const Root = () => (
  <div>
    <Hero />
    <About />
    <Experience />
  </div>
);

export default Root;
