import React from "react"
import { Helmet } from "react-helmet"

const SeoHead = ({
  title = "Jun Clemente – Portfolio",
  description = "Welcome to Jun Clemente's professional portfolio site.",
  image = "https://junclemente.dev/og-image.jpg", // Replace with your actual OG image URL
  url = "https://junclemente.dev",
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />

    {/* Open Graph tags */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* Fonts */}
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
      rel="stylesheet"
    />
  </Helmet>
)

export default SeoHead
