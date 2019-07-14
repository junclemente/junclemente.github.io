import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import Icon from ".";

export default storiesOf("common/Icon", module).add("default", () => (
  <Icon
    icon={select(
      "Icon",
      [
        "html5",
        "react",
        "python",
        "aws",
        "google",
        "javascript",
        "yelp",
        "css3",
        "linux",
        "php",
        "wordpress",
        "instagram",
        "linkedin",
        "flickr",
        "email",
        "envelope"
      ],
      "html5"
    )}
  />
));
