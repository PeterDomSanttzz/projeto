"use client"

import { useEffect, useState } from "react"

export default function Func() {

    const [value, setValue] = useState(0);
    const [n, setN] = useState(0);

    useEffect(() => {
        if (value > 0) {
            setN((prevN) => prevN + 12);
        }
    }, [value]);

    return (
        <div className="w-full h-dvh flex flex-col items-center">
            <div className="w-8/10 mt-70 flex flex-col gap-4 items-center justify-center">
                <p className="text-3xl font-light">Aperte o botão para adicionar mais 1 ao valor</p>

                <Component value={value} n={n}/>

                <button onClick={() => setValue((prevValue) => prevValue + 1)} className="w-full text-black p-2 bg-purple-300 hover:text-black hover:bg-purple-400 hover:border-purple-500 border-solid border-purple-400 border-b-2 border-r-2 rounded-md">Add</button>
            </div>
        </div>
    );
}

function Component({value, n}) {
    return (
        <div>
            <p className="text-2xl text-blue-500 font-light">Normal value: {value}</p>
            <p className="text-2xl text-red-500 font-light">useEffect value: {n}</p>
        </div>
    )
}