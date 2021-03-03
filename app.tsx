import React from "./deps/react.ts";
//@ts-ignore
const { useState } = React;

function App() {
    let [count, setCount] = useState(0);
    return <div>
        <p>Hello world!</p>
        <button onClick={() => setCount((c: number) => c + 1)}>Counted <span>{count}</span></button>
    </div>
}

export default App;
