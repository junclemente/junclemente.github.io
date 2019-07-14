import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import withStyles from "./styles-decorator";

addDecorator(withKnobs);
addDecorator(withStyles);

function loadStories() {
  const req = require.context("../src/components", true, /\.stories\.jsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
