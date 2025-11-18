"use client"

import { useEffect, useState } from "react"

export default function Func() {
    const [contadorIniciado, setContadorIniciado] = useState(false);
    const [dataAlvo, setDataAlvo] = useState("");
    const [tempoRestante, setTempoRestante] = useState(0);

    const start = () => {
        setContadorIniciado(true);
        const alvo = Date.now() + 10_000;
        setDataAlvo(alvo);
        setTempoRestante(10_000);
    }

    useEffect(() => {
        if (!contadorIniciado) { return; }

        const id = setInterval(() => {
            const agora = Date.now();
            let restante = dataAlvo - agora;

            if (restante <= 0) {
                restante = 0;
                clearInterval(id);
                alert("ACABOU!")
            }

            setTempoRestante(restante);
        }, 1000);
        
        return () => clearInterval(id);

    }, [setContadorIniciado, dataAlvo]);

    return (
        <div className="w-full h-dvh flex flex-col items-center">
            <div className="w-8/10 mt-70 flex flex-col gap-4 items-center justify-center">
                <p className="text-3xl font-light">Contador</p>

                <p className="text-3xl font-light">{Math.floor(tempoRestante / 1000)}</p>

                <button className="w-full text-black p-2 bg-yellow-300 hover:text-black hover:bg-yellow-400 hover:border-yellow-500 border-solid border-yellow-400 border-b-2 border-r-2 rounded-md" onClick={start}>Start</button>
            </div>
        </div>
    )
}