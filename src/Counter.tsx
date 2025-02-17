import React from "react";

export default function Counter() {
    const [count, setCount] = React.useState(0);
    return <>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
            +
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
            -
        </button>
    </>
}

