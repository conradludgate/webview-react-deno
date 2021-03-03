import React from "./deps/react.ts";
import ReactDom from "./deps/react-dom/index.ts";

declare global {
  var __INITIAL_STATE__: any;
}

import App from "./app.tsx";
const props = window.__INITIAL_STATE__ || {};

(ReactDom as any).hydrate(
  <App {...props} />,
  document.getElementById("root")
);
