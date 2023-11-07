"use client"
import Image from "next/image";
import CruzImg from '../assets/img/cruz.png'
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { StudyCard } from "@/components/studyCard";

export default function Home() {
  const [studies, setStudies] = useState([0,1])

  return (
    <main className="min-h-screen bg-[#F5F8FA]">
      <div className="mt-12 bg-[#9CD9F8]/[0.4] rounded-s-[65px] max-w-[95%] md:max-w-[70%]" dir="rtl">
        <div className="flex items-center flex-row-reverse justify-between p-2">
          <h1 className="text-left text-[#3D3D45] font-medium text-lg">
            Descubra o que Deus quer te dizer sobre diversos temas através da bíblia
          </h1>
          <Image
            src={CruzImg}
            width={120}
            height={125}
            alt="Imagem de uma cruz e um céu azul"
            className="rounded-full md:max-w-[200px] md:max-h-[205px]"
          />
        </div>
      </div>
      <section className="mt-6 p-4">
        <h2 className="text-[#3D3D45] text-lg font-medium">
          Estude o que Ele diz através da bíblia
        </h2>
        <Input 
          className="border-[#DCE2E5] rounded-full mt-3 h-11"
          placeholder="Busque por um assunto de interesse"
        />

        <div className="mt-6">
          <h2 className="text-[#3D3D45] text-xl font-bold">
            Categorias
          </h2>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {studies.map(study => (
              <StudyCard key={study} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
