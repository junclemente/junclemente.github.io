import React from "react";
import { storiesOf } from "@storybook/react";
import ProjectDetail from ".";

const projectInfo = {
  title: "Peptide Sequence Conversion Tool",
  short_title: "Peptide Tool",
  url: "https://github.com/junclemente/peptools",
  code: "https://github.com/junclemente/peptools",
  icons: ["python", "html5", "css3", "javascript"],
  image: "peptidetool-thumb.jpg",
  description:
    "This is a simple web app using Flask and Python. It takes         a 1-letter amino acid chain representation and converts it to the         3-letter representation. I developed this web app to improve the         efficiency of the sales team and chemists at a company I was          previously working for."
};

export default storiesOf("common/Project Detail", module)
  .add("default", () => (
    <ProjectDetail
      title={projectInfo.title}
      url={projectInfo.url}
      code={projectInfo.code}
      description={projectInfo.description}
    />
  ))
  .add("No Website", () => (
    <ProjectDetail
      title={projectInfo.title}
      code={projectInfo.code}
      description={projectInfo.description}
    />
  ))
  .add("No Code", () => (
    <ProjectDetail
      title={projectInfo.title}
      url={projectInfo.url}
      description={projectInfo.description}
    />
  ));
