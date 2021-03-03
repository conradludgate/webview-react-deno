import React from "./deps/react.ts";
import ReactDomServer from "./deps/react-dom/server.ts";
import { Webview } from "./deps/webview.ts";

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

    //@ts-ignore
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
    // console.log(html)
  } catch (error) {
    console.error(error);
  }
}

if (import.meta.main) {
  main()
}
