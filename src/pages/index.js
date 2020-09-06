import React from "react";
import Helmet from "../components/Helmet";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
    </div>
  );
};

export default Home;
