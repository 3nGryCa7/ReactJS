import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    function getPoint() {
        setCount(count + 1);
    }

    return (
        <>
        Now you have {count} points.<br/>
        <button onClick={getPoint}>Click me! Then you will get 1 point.</button>
        </>
    )
}