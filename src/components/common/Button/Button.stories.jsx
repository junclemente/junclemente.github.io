import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import Button from ".";

export default storiesOf("common/Button", module).add("default", () => (
  <Button> {text("children", "Button")}</Button>
));
