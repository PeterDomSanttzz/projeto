"use client"

import { useState } from "react"

export default function Func() {
    const [items, setItems] = useState([])
    const [nome, setNome] = useState("")

    const add = () => {
        const n = nome.trim()
        if (!n) return
        setItems(prev => [...prev, { id: crypto.randomUUID(), nome: n }])
        setNome("")
    }

    const remove = (id) => {
        setItems(prev => prev.filter(it => it.id !== id))
    }

    return (
        <div className="w-full h-dvh flex flex-col items-center">
            <div className="w-8/10 mt-70 flex flex-col gap-4 items-center justify-center">
                <p className="text-3xl font-light">Lista de itens editável</p>

                <label htmlFor="">Nome do item:</label>
                <input className="p-2 text-center border-solid border-[#c9c9c9] border rounded-md" type="text" id="txtNome" onChange={(e) => setNome(e.target.value)}/>

                <button className="w-full text-white p-2 bg-blue-500 hover:text-blue-300 hover:bg-blue-700 hover:border-blue-500 border-solid border-blue-300 border-b-2 border-r-2 rounded-md" onClick={add}>Adicionar</button>

                <div className="w-full p-6 flex flex-col items-center border-solid border-[#c9c9c9] border rounded-md">

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
        <div className="w-full p-5 flex justify-between">
            <p>{index} - {nome}</p>
            
            <button className="p-2 bg-blue-500 hover:text-blue-300 hover:bg-blue-700 hover:border-blue-500 border-solid border-blue-300 border-b-2 border-r-2 rounded-md" onClick={onRemove}><img src="/icons/trash.png" alt="Excluir" /></button>

        </div>
    )
}