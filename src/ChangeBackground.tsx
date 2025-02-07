import {useState} from "react";
import randomColor from 'randomcolor';

export default function ChangeBackground() {
    const [color, setColor] = useState(randomColor());
    return <>
        <style>
            body {"{"} background-color: {color + ";}"}
        </style>
        <button onClick={() => setColor(randomColor())}>random color</button>
    </>
}