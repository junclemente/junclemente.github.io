import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Helmet from "../components/Helmet";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";

const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
      nodes {
        name
      }
    }
  }
`;

const Home = () => {
  const {
    allFile: {
      nodes: { name },
    },
  } = useStaticQuery(query);
  console.log(name);
  return (
    <div>
      <Hero />
      <About />
      <Experience />
    </div>
  );
};

export default Home;
