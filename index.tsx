// @deno-types="https://denopkg.com/soremwar/deno_types/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@17.0.1";
// @deno-types="https://denopkg.com/soremwar/deno_types/react-dom/v16.13.1/server.d.ts"
import ReactDomServer from "https://dev.jspm.io/react-dom@17.0.1/server";

import { Webview } from "https://deno.land/x/webview/mod.ts";;

import App from "./app.tsx";

async function main(): Promise<void> {
  try {
    const result = await Deno.emit("./client.tsx", {
      bundle: "esm",
      compilerOptions: {
        lib: ["dom"],
      },
    });
    const bundle = result.files["deno:///bundle.js"];

    const body = ReactDomServer.renderToString(
      <App />
    );
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script>
        window.__INITIAL_STATE__ = {};
      </script>
    </head>
    <body >
      <div id="root">${body}</div>
      <script>${bundle}</script>
    </body>
    </html>`;

    const webview = new Webview(
      { url: `data:text/html,${encodeURIComponent(html)}` },
    );

    await webview.run();
  } catch (error) {
    console.error(error);
  }
}

if (import.meta.main) {
  main()
}
