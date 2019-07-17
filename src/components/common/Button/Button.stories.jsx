import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";
import Button from ".";

export default storiesOf("common/Button", module).add("default", () => (
  <Button
    theme={select(
      "Theme",
      ["primary", "primary-outline", "secondary"],
      "primary"
    )}
  >
    {text("Text", "Button")}
  </Button>
));
