// @deno-types="https://denopkg.com/soremwar/deno_types/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@17.0.1";
const { useState } = React;

function App() {
    let [count, setCount] = useState(0);
    return <div>
        <p>Hello world!</p>
        <button onClick={() => setCount(c => c + 1)}>Counted <span>{count}</span></button>
    </div>
}

export default App;
