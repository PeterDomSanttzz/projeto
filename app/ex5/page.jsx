"use client"

import { useEffect, useState } from "react"

export default function Func() {
    const [items, setItems] = useState([]);
    const [nome, setNome] = useState("");
    const [disable, setDisable] = useState(false);

    const add = () => {
        const n = nome.trim()
        if (!n) return
        setItems(prev => [...prev, { id: crypto.randomUUID(), nome: n }]);
        setNome("");
        setDisable(true);
    }

    const remove = (id) => {
        setItems(prev => prev.filter(it => it.id !== id))
    }
    
    useEffect ( () => {
        console.log("opaaaa")
    }, [])

    return (
        <div className="w-full h-dvh flex flex-col items-center">
            <div className="w-8/10 mt-70 flex flex-col gap-4 items-center justify-center">
                <p className="text-3xl font-light">Teste de digitação</p>

                <label htmlFor="">Nome do item:</label>
                <input className="p-2 text-center border-solid border-[#c9c9c9] border rounded-md" type="text" id="txtNome" disabled={disable} value={nome} onChange={(e) => setNome(e.target.value)}/>

                <button className="w-full text-black p-2 bg-yellow-300 hover:text-black hover:bg-yellow-400 hover:border-yellow-500 border-solid border-yellow-400 border-b-2 border-r-2 rounded-md" onClick={add}>Start</button>

                <div className="w-full mb-10 p-6 flex flex-col border-solid border-[#c9c9c9] border rounded-md">

                    {items.map((el, i) => (
                        <List key={i} index={i + 1} nome={el.nome} onRemove={() => remove(el.id)}/>
                    ))}

                </div>
            </div>
        </div>
    )
}

function List({nome, index, onRemove}) {
    return (
        <div className="w-full p-5 flex items-center justify-between">
            <p>{index} - {nome}</p>
            
            <button className="p-2 bg-red-500 hover:text-red-300 hover:bg-red-700 hover:border-red-500 hover:border-white border-solid border-red-300 border-b-2 border-r-2 rounded-md" onClick={onRemove}><img src="/icons/trash.png" alt="Excluir" /></button>

        </div>
    )
}