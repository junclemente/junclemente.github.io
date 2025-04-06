import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="tachyons"
      rel="stylesheet"
      href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
    />,
  ])
}
