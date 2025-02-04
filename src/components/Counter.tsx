import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>カウント: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
};

export default Counter;
