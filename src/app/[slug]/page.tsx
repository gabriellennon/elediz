"use client"
import { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Toggle } from "@/components/ui/toggle";
import Image from "next/image";
import JesusQuadriculadoImg from '../../assets/img/estudos/jesus.jpeg'
import { QuestionAccordion } from "@/components/QuestionAccordion";
import { TStudy } from "@/utils/types";
import { studies } from "@/utils/studies";

export default function RedirectLink() {
  const pathname = usePathname()
  const router = useRouter()
  
  const [study, setStudy] = useState<TStudy>();


  function handleGoBack(){
    router.back()
  }

  function handelGoToTagsPage(tag: string){
    router.push(`/tags/${tag}`)
  }


  useEffect(() => {
    const slugActive = pathname.split('/')
    const studyNow = studies.filter(e => e.slug === slugActive[1])
    setStudy(studyNow[0])
  },[pathname, study])

  return (
    <section  className="min-h-screen bg-[#F5F8FA] pb-5">
        <div
            className="p-8"
        >
            <Button 
                variant="outline" 
                size="icon"
                className="bg-white rounded-[14px] shadow-indigo-[#B6D9EB]/40"
                onClick={handleGoBack}
            >
                <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <div className="mt-8">
                {!!study ? (
                    <>
                        <h1 className="text-[#3D3D45] text-2xl font-medium">
                            {study?.title}
                        </h1>
                        <div className="flex flex-row gap-[4px] mt-2">
                            {study?.tags.map((tag, index) => (
                                <Toggle 
                                    key={`${tag}-${index}`}
                                    variant="outline" 
                                    className="bg-[#D9D9D9] text-[#50555A] p-1"
                                    onClick={() => handelGoToTagsPage(tag)}
                                >
                                    <span className="font-medium text-xs">
                                        {tag}
                                    </span>
                                </Toggle>
                            ))}
                        </div>
                    </>
                ):(
                    <h1 className="text-[#3D3D45] text-2xl font-medium">
                        Ops! 😵‍💫 Algo deu errado, volte na tela anterior e tente novamente.
                    </h1>
                )}
            </div>
        </div>
        <div>
            {!!study && (
                <Image
                    src={study?.image}
                    alt="Imagem de uma cruz e um céu azul"
                    className="h-64 object-cover w-full"
                />
            )}
            <div className="p-8 flex flex-col gap-4">
                {!!study && (
                    <>
                        {study?.content.map(cont => {
                            if(cont.isQuestion){
                                return (
                                    <div className="mt-10" key={cont.id}>
                                        <h3 className="text-[#3D3D45] text-xl font-medium mb-4">
                                            Sua vez de procurar na bíblia
                                        </h3>
                                        <div className="flex flex-col gap-5">
                                            <QuestionAccordion 
                                                citation={cont.citation!}
                                                explanation={cont.explanation!}
                                                question={cont.question!}
                                                key={cont.id}
                                            />
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <p className="font-normal text-base text-[#3d3d45]" key={cont.id}>
                                        {cont.text}
                                    </p>
                                )
                            }
                        })}
                    </>
                )}
            </div>
        </div>
    </section>
  )
}