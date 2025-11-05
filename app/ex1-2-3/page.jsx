"use client"

import { useState } from "react"

export default function Func() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    const exec = () => {
        console.log(nome)
        console.log(email)
    }

    return (
        <div className="w-full h-dvh flex flex-col items-center">
            <div className="w-8/10 h-dvh flex flex-col gap-10 items-center justify-center">
                <p className="text-3xl">Escreva abaixo o seu nome</p>

                <input
                    type="text"
                    className="p-2 border-solid border-[#c9c9c9] border rounded-md w-100 text-center"
                    onChange={(e) => setNome(e.target.value)}
                />

                <p className="text-3xl">Escreva abaixo o seu email</p>

                <input
                    type="text"
                    className="p-2 border-solid border-[#c9c9c9] border rounded-md w-100 text-center"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button onClick={exec}>Enviar</button>

                <div>
                    <Component nome={nome} email={email}/>
                </div>
            </div>
        </div>
    )
}

function Component({nome, email}) {
    return (
        <div>
            <p className="text-3xl">Olá, {nome}!</p><br/><br/>
            <p className="text-3xl">Seu Email é: {email}</p>
        </div>
    )
}