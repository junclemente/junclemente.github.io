import React from "react";
import { storiesOf } from "@storybook/react";
import Image from "../../Experience/images/peptidetool-thumb.jpg";
import ProjectCard from ".";

const projectInfo = {
  title: "Peptide Sequence Conversion Tool",
  short_title: "Peptide Tool",
  url: "",
  code: "https://github.com/junclemente/peptools",
  icons: ["python", "html5", "css3", "javascript"],
  image: "peptidetool-thumb.jpg",
  desc:
    "This is a simple web app using Flask and Python. It takes         a 1-letter amino acid chain representation and converts it to the         3-letter representation. I developed this web app to improve the         efficiency of the sales team and chemists at a company I was          previously working for."
};

export default storiesOf("common/Project Card", module).add("default", () => (
  <ProjectCard projectInfo={projectInfo} />
));
