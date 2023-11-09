"use client"
import { useEffect } from "react";
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Toggle } from "@/components/ui/toggle";
import Image from "next/image";
import JesusQuadriculadoImg from '../../assets/img/estudos/jesus.jpeg'
import { QuestionAccordion } from "@/components/QuestionAccordion";

export default function RedirectLink() {
  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname)
  },[pathname])

  return (
    <section  className="min-h-screen bg-[#F5F8FA] pb-5">
        <div
            className="p-8"
        >
            <Button 
                variant="outline" 
                size="icon"
                className="bg-white rounded-[14px] shadow-indigo-[#B6D9EB]/40"
            >
                <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <div className="mt-8">
                <h1 className="text-[#3D3D45] text-2xl font-medium">
                    Como ser perdoado?
                </h1>
                <div className="flex flex-row gap-[4px] mt-2">
                    <Toggle variant="outline" className="bg-[#D9D9D9] text-[#50555A] p-1">
                        <span className="font-medium text-xs">
                            perdão
                        </span>
                    </Toggle>
                </div>
            </div>
        </div>
        <div>
            <Image
                src={JesusQuadriculadoImg}
                alt="Imagem de uma cruz e um céu azul"
                className="h-64 object-cover"
            />
            <div className="p-8 flex flex-col gap-4">
                <p className="font-normal text-base text-[#3d3d45]">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                </p>
                <div className="mt-10">
                    <h3 className="text-[#3D3D45] text-xl font-medium mb-4">
                        Sua vez de procurar na bíblia
                    </h3>
                    <div className="flex flex-col gap-5">
                        <QuestionAccordion />
                        <QuestionAccordion />
                    </div>
                </div>
                <p className="font-normal text-base text-[#3d3d45]">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                </p>
            </div>
        </div>
    </section>
  )
}