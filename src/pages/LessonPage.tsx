import { FileArrowDown, CaretRight } from "phosphor-react";
import { Header } from "../components/Header";

export function LessonPage(){


  return (
    <div>
      <Header />
      <div className="bg-gray-700 flex gap-96 justify-center items-center m-auto p-28 w-full">
      <h1 className="font-bold text-4xl leading-relaxed">
      <p><strong className="text-red-500">def</strong> estudar(qtd_horas, valor_hora):<br/></p>
        <strong className="text-blue-600 text-start ml-10">var a</strong> = "Selecione";<br />
        <strong className="text-blue-600 ml-10">var b</strong> = "disciplina";<br />
        <strong className="text-green-300 ml-10">print</strong> (a, "a",b);<br />
        <strong className="text-red-500 ml-10">return</strong> Engenheiro;<br />
      </h1>

      <div className="flex flex-col gap-8">
      <a 
          href="/lesson/fabricio-ferrari/apresentacao-da-disciplina" 
          className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Fisica</strong>
              <p className="text-sm text-gray-200 mt-2">Acesse o Material da disciplina disponivel no AVA FURG!</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24}/>
            </div>
          </a>
      <a 
          href="/lesson/gustavo-guanabara/introducao-a-algoritmos"  
          className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Algoritimos</strong>
              <p className="text-sm text-gray-200 mt-2">Acesse o Material da disciplina disponivel no AVA FURG!</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24}/>
            </div>
          </a>

          <a 
          href="/lesson/karen-melo-da-silva/materiais" 
          className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Desenho Tecnico</strong>
              <p className="text-sm text-gray-200 mt-2">Acesse o Material da disciplina disponivel no AVA FURG!</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24}/>
            </div>
          </a>

          <a 
          href="/lesson/denise-varella-martinez/funcoes1" 
          className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Calculo</strong>
              <p className="text-sm text-gray-200 mt-2">Acesse o Material da disciplina disponivel no AVA FURG!</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24}/>
            </div>
          </a>

          <a 
          href="/lesson/edite-taufer/equacao-geral-de-plano"
          className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Geometria Analitica</strong>
              <p className="text-sm text-gray-200 mt-2">Acesse o Material da disciplina disponivel no AVA FURG!</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24}/>
            </div>
          </a>
      </div>
      
      </div>
      
      </div>
  )
}