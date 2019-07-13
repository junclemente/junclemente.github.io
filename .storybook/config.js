import { configure, addDecorator } from "@storybook/react";
import withStyles from "./styles-decorator";

addDecorator(withStyles);

function loadStories() {
  const req = require.context("../src/components", true, /\.stories\.jsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
