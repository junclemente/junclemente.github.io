import React from "react";
import cx from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styles from "./Background.module.scss";

const query = graphql`
  {
    file(relativePath: { eq: "mw-joshuatrees.jpg" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Background = ({ children }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <BackgroundImage
      Tag="div"
      fluid={fluid}
      className={cx(styles.root, styles.heroImage)}
      preserveStackingContext
    >
      {children}
    </BackgroundImage>
  );
};

export default Background;
