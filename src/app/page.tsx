"use client"
import Image from "next/image";
import CruzImg from '../assets/img/cruz.png'
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { StudyCard } from "@/components/studyCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StudyCardSecondary } from "@/components/StudyCardSecondary";
import { studies } from "@/utils/studies";
import { TStudy } from "@/utils/types";

export default function Home() {
  const [studiesCatalog, setStudies] = useState<TStudy[]>(studies);
  const [defaultTab, setDefaultTab] = useState('all');
  const [search, setSearch] = useState('');

  const filteredNameStudy = search.length > 0 
        ? studiesCatalog.filter(a => a.title.toUpperCase().includes(search.toUpperCase()))
        : studiesCatalog;

  function filterOrderStudies(type: 'asc' | 'dec'){
    if(type === 'asc'){
      const studiesAsc = filteredNameStudy.sort(function(a, b){
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
        return 0;
      })
      return studiesAsc
    } else {
      const studiesDec = filteredNameStudy.sort(function(a, b){
        if(b.title < a.title) { return -1; }
        if(b.title > a.title) { return 1; }
        return 0;
      })
      return studiesDec
    }
  }


  return (
    <main className="min-h-screen bg-[#F5F8FA] pb-5 pt-12">
      <div className="bg-[#9CD9F8]/[0.4] rounded-s-[65px] max-w-[95%] md:max-w-[70%]" dir="rtl">
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
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="mt-6">
          <h2 className="text-[#3D3D45] text-xl md:text-2xl font-bold">
            Categorias
          </h2>
          <div className="mt-2">
            <Tabs defaultValue={defaultTab} >
              <TabsList>
                <TabsTrigger value="all">Todos</TabsTrigger>
                {/* @TO-DO: Implementar Depois quando tiver o analytics */}
                {/* <TabsTrigger value="moreViews">Mais acessados</TabsTrigger> */}
                <TabsTrigger value="az">A - Z</TabsTrigger>
                <TabsTrigger value="za">Z - A</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="grid grid-cols-2 gap-3 md:flex md:flex-row md:flex-wrap md:w-full mt-2">
                  {filteredNameStudy.map(study => (
                    <StudyCard 
                      key={study.id} 
                      imageStudy={study.image}
                      slugStudy={study.slug}
                      tagsStudy={study.tags}
                      titleStudy={study.title}
                    />
                  ))}
                </div>
              </TabsContent>
              {/* @TO-DO: Implementar Depois quando tiver o analytics */}
              {/* <TabsContent value="moreViews">Change your password here.</TabsContent> */}
              <TabsContent value="az">
                <div className="grid grid-cols-2 gap-3 md:flex md:flex-row md:flex-wrap md:w-full mt-2">
                  {filterOrderStudies('asc').map(study => (
                    <StudyCard 
                      key={study.id} 
                      imageStudy={study.image}
                      slugStudy={study.slug}
                      tagsStudy={study.tags}
                      titleStudy={study.title}
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="za">
                <div className="grid grid-cols-2 gap-3 md:flex md:flex-row md:flex-wrap md:w-full mt-2">
                  {filterOrderStudies('dec').map(study => (
                    <StudyCard 
                      key={study.id} 
                      imageStudy={study.image}
                      slugStudy={study.slug}
                      tagsStudy={study.tags}
                      titleStudy={study.title}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-[#3D3D45] text-xl md:text-2xl font-bold">
            Séries de estudos
          </h2>
          <div className="mt-2">
            <Tabs defaultValue="all" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="moreViews">Mais acessados</TabsTrigger>
                <TabsTrigger value="az">A - Z</TabsTrigger>
                <TabsTrigger value="za">Z - A</TabsTrigger>
              </TabsList>
              <TabsContent value="all">Make changes to your account here.</TabsContent>
              <TabsContent value="moreViews">Change your password here.</TabsContent>
            </Tabs>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2 mt-2">
            {studies.map(study => (
              <StudyCardSecondary key={study.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
