// @deno-types="https://denopkg.com/soremwar/deno_types/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@17.0.1";
// @deno-types="https://denopkg.com/soremwar/deno_types/react-dom/v16.13.1/react-dom.d.ts"
import ReactDom from "https://dev.jspm.io/react-dom@17.0.1";

declare global {
    var __INITIAL_STATE__: any;
    var document: Document;
}

import App from "./app.tsx";
const props = { ...window.__INITIAL_STATE__ };

(ReactDom as any).hydrate(
    <App {...props} />,
    window.document.getElementById("root")
);
