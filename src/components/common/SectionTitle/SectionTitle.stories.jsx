import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import SectionTitle from ".";

const label = "SectionTitle";
const defaultValue = "SectionTitle";

export default storiesOf("common/SectionTitle", module).add("default", () => (
  <SectionTitle title={text(label, defaultValue)} />
));
