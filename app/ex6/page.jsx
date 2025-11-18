"use client"

import { useEffect, useState } from "react"

export default function Func() {

    const [text, setText] = useState("");
    const [CPF, setCPF] = useState("");
    const [enviado, setEnviado] = useState(false);

    const Send = () => {
        setEnviado(true);

        console.log("BATEU!");
    }

    const ValNow = () => {
        const id = setInterval(() => {
            if (enviado === false) {
                setCPF("");
                setText("Campo limpo por segurança");
                clearInterval(id);
            }
        }, 10000);

        return () => clearInterval(id);
    }

    useEffect(() => {
        ValNow();
    }, [CPF]);

    return (
        <div className="w-full h-dvh flex flex-col items-center">
            <div className="w-8/10 mt-70 flex flex-col gap-4 items-center justify-center">
                <p className="text-3xl font-light">Digite seu CPF</p>

                <input className="p-2 text-center border-solid border-[#c9c9c9] border rounded-md" type="text" id="txtCPF" value={CPF} onChange={(e) => setCPF(e.target.value)}/>
                <Component text={text}/>

                <button className="w-full text-black p-2 bg-yellow-300 hover:text-black hover:bg-yellow-400 hover:border-yellow-500 border-solid border-yellow-400 border-b-2 border-r-2 rounded-md" onClick={Send}>Enviar</button>
            </div>
        </div>
    )
}

function Component({text}) {
    return (
        <div>
            <p className="text-red-500 font-light">{text}</p>
        </div>
    )
}