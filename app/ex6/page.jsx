"use client"

import { useEffect, useState } from "react"

export default function Func() {

    const [text, setText] = useState("");
    const [Email, setEmail] = useState("");
    const [Pass, setPass] = useState("");

    const Send = () => {
        if (Email.length === 0 || Pass.length === 0) {
            setText("Preencha os campos sugeridos!");

            const id2 = setInterval(() => {
                setText("");
                clearInterval(id2);
                }, 3000);

            return () => clearInterval(id2);
        }
        else {
            setEmail("");
            setPass("");

            alert("Dados enviados com sucesso!");
        }
    }

    useEffect(() => {
        if (Email.length > 0 || Pass.length > 0) {
            const id = setInterval(() => {
                setEmail("");
                setPass("");
                setText("Campos limpos por segurança");
                clearInterval(id);

                const id2 = setInterval(() => {
                setText("");
                clearInterval(id2);
                }, 3000);

                return () => clearInterval(id2);

            }, 10000);

            return () => clearInterval(id);
        }
    }, [Email, Pass]);

    return (
        <div className="w-full h-dvh flex flex-col items-center">
            <div className="w-8/10 mt-70 flex flex-col gap-4 items-center justify-center">
                <p className="text-3xl font-light">Digite seu Email e Senha:</p>

                <p className="text-2xl font-light">Email:</p>
                <input className="p-2 w-80 text-center border-solid border-[#c9c9c9] border rounded-md" type="email" value={Email} onChange={(e) => setEmail(e.target.value)}/>

                <p className="text-2xl font-light">Senha:</p>
                <input className="p-2 w-80 text-center border-solid border-[#c9c9c9] border rounded-md" type="password" value={Pass} onChange={(e) => setPass(e.target.value)}/>

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