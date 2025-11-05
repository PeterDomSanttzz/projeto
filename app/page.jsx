"use client"

import { useState } from "react"

export default function PrimeiroTeste() {
    
    const [agenda, setAgenda] = useState([])
    const [selected, setSelected] = useState(false)
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState(0)
    const [nasc, setNasc] = useState("")
    const [email, setEmail] = useState("")
    const [data, setData] = useState("")
    const [horario, setHorario] = useState("")
    const [prof, setProf] = useState("")

    if (selected == true) 
    {
        console.log("Seu nome completo: " + nome + sobrenome)
        console.log("Seu CPF: " + cpf)
    }

    const exec = () => {
        const agendamento = {
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf,
            nasc: nasc,
            email: email,
            data: data,
            horario: horario,
            prof: prof
        }

        setAgenda((prev) => [...prev, agendamento])
    }

    return (
        <div className="flex justify-center w-full mt-43">
            <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-light font-arial">Faça seu agendamento!</h1>

                <div className="flex flex-col">
                    <label htmlFor="txtNome">Nome:</label>
                    <input className="p-2 border-solid border-[#c9c9c9] border rounded-md" type="text" id="txtNome" onChange={(e) => setNome(e.target.value)}/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="txtNome">Sobrenome:</label>
                    <input className="p-2 border-solid border-[#c9c9c9] border rounded-md" type="text" id="txtSobrenome" onChange={(e) => setSobrenome(e.target.value)}/>
                </div>

                <div className="flex justify-between gap-2">
                    <div className="flex flex-col w-full">
                        <label htmlFor="txtCpf">CPF:</label>
                        <input className="p-2 border-solid border-[#c9c9c9] border rounded-md" type="number" id="txtCpf" onChange={(e) => setCpf(e.target.value)}/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="txtNasc">Data de Nascimento:</label>
                        <input className="p-2 border-solid border-[#c9c9c9] border rounded-md" type="date" id="txtNasc" onChange={(e) => setNasc(e.target.value)}/>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="txtEmail">Email para contato:</label>
                    <input className="p-2 border-solid border-[#c9c9c9] border rounded-md" type="text" id="txtEmail" onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="">Escolha sua data para agendamento:</label>
                    <input className="p-2 border-solid border-[#c9c9c9] border rounded-md" type="date" id="txtData" onChange={(e) => setData(e.target.value)}/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="">Escolha seu horário de agendamento:</label>
                    <input className="p-2 border-solid border-[#c9c9c9] border rounded-md" type="time" id="txtHorario" onChange={(e) => setHorario(e.target.value)}/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="txtNome">Informe um nome fictício de profissional:</label>
                    <input className="p-2 border-solid border-[#c9c9c9] border rounded-md" type="text" id="txtProf" onChange={(e) => setProf(e.target.value)}/>
                </div>

                <div>
                    <label>
                        <input type="checkbox" checked={selected} onChange={(e) => setSelected(e.target.checked)}/>
                        Log
                    </label>
                </div>

                <div>
                    <button className="w-full text-white p-2 bg-red-400 border-solid border-red-600 border-b-2 border-r-2 rounded-md" onClick={exec}>Concluir Agendamento</button>
                </div>

                <div className="flex flex-col gap-20 mb-50">
                    {agenda.map((el, i) => (
                        <Estrutura nome={el.nome} sobrenome={el.sobrenome} cpf={el.cpf} nasc={el.nasc} email={el.email} data={el.data} horario={el.horario} prof={el.prof} index={i} key={i}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Estrutura({nome, sobrenome, cpf, nasc, email, data, horario, prof}) {
    return (
        <div className="w-full h-full flex flex-col gap-2 p-4 border-solid border-[#c9c9c9] border rounded-md">
            <div className="w-full flex justify-center mb-10 mt-5">        
                <p className="text-2xl">Agendamento concluído, {nome}!</p>
            </div>

            <div className="bg-[#f3f3f3] p-4 border-solid border-[#c9c9c9] border rounded-md">
                <p className="mb-3 font-bold">Informações pessoais:</p>

                <div className="flex gap-1">
                    <p>Nome:</p>
                    <p className="text-[#767676]">{nome}</p>
                </div>

                <div className="flex gap-1">
                    <p>Sobrenome:</p>
                    <p className="text-[#767676]">{sobrenome}</p>
                </div>

                <div className="flex gap-1">
                    <p>CPF:</p>
                    <p className="text-[#767676]">{cpf}</p>
                </div>

                <div className="flex gap-1">
                    <p>Data de Nascimento:</p>
                    <p className="text-[#767676]">{nasc}</p>
                </div>

                <div className="flex gap-1">
                    <p>Email fornecido:</p>
                    <p className="text-[#767676]">{email}</p>
                </div>
            </div>    

            <div className="bg-blue-400 p-2 border-solid border-[#c9c9c9] border rounded-md">
                <p className="mb-3 mt-2 text-white font-bold">Dados do agendamento:</p>

                <div className="p-2 bg-white border-solid border-white border rounded-md">   
                    <div className="flex gap-1">
                        <p>Data:</p>
                        <p className="text-[#767676]">{data}</p>
                    </div>

                    <div className="flex gap-1">
                        <p>Horário:</p>
                        <p className="text-[#767676]">{horario}</p>
                    </div>

                    <div className="flex gap-1">
                        <p>Profissional:</p>
                        <p className="text-[#767676]">{prof}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

