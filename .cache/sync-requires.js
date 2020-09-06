const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/junc/Project/codeandlight/.cache/dev-404-page.js"))),
  "component---src-pages-about-css-modules-js": hot(preferDefault(require("/Users/junc/Project/codeandlight/src/pages/about-css-modules.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/junc/Project/codeandlight/src/pages/index.js")))
}

