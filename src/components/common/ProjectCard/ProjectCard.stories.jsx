import React from "react";
import { storiesOf } from "@storybook/react";
import Image from "../../Experience/images/peptidetool-thumb.jpg";
import ProjectCard from ".";

const projectTitle = "Peptide Tools";
const description =
  "Cable hulk heave to rope's end Letter of Marque ballast lee handsomely Barbary Coast scurvy Jack Tar league. Aye holystone transom cable boatswain broadside strike colors dead men tell no tales spirits Pirate Round poop deck nipperkin.";
const icons = ["python", "html5", "css3", "javascript"];

export default storiesOf("common/Project Card", module).add("default", () => (
  <ProjectCard
    projectTitle={projectTitle}
    image={Image}
    description={description}
    techIcons={icons}
  />
));
