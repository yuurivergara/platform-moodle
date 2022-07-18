import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_USER = gql`
mutation createUser ($matricula: String!, $senha: String!){
  createSubscriber(data: {matricula: $matricula, senha: $senha}) {
    id
  }
}
`

export function Home(){
  const navigate = useNavigate();

  const [matricula, setMatricula] = useState("")
  const [senha, setSenha] = useState("")

  const [createUser, {loading}] = useMutation(CREATE_USER)

  async function handleLogin(event: FormEvent){
    event.preventDefault()

    await createUser({
      variables:{
        matricula,
        senha,
      }
    })

    navigate("/lesson")
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px] ">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">Torne-se um <strong className="text-blue-500">engenheiro da computacao completo</strong>, com a plataforma <strong className="text-blue-500">AVA FURG</strong>.</h1>
          <p className="mt-4 text-gray-200 leading-relaxed">Plataforma criada de engenheiros para engenheiros, para facilitar o processo de aprendizagem das disciplinas.</p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded ">
          <strong>Faca seu login</strong>
          <form onSubmit={handleLogin} className="flex flex-col gap-2 w-full">
            <input 
            className="bg-gray-900 rounded px-5 h-14"
            type="text" 
            name="" 
            id="" 
            placeholder="Matricula"
            onChange={event => setMatricula(event.target.value)}/>
            <input 
            className="bg-gray-900 rounded px-5 h-14"
            type="password" 
            name="" id="" 
            placeholder="Senha"
            onChange={event => setSenha(event.target.value)}/>
            
            <button 
            type="submit"
            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 disabled:opacity-50"
            disabled={loading}>
              Login
            </button>
          </form>
        </div>
      </div>
      
      <img src="/src/images/group.png" alt=""/>
    </div>
  );
}