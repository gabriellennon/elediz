"use client"
import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import JesusQuadriculadoImg from '../../../assets/img/estudos/jesus.jpeg'
import { useRouter } from 'next/navigation'
import { StudyCard } from '@/components/studyCard'
import { useState } from 'react'
 
export default function Guide() {
  const [studies, setStudies] = useState([0,1])
  const router = useRouter()
  
  function handleGoBack(){
    router.back()
  }

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
                <h1 className="text-[#3D3D45] text-2xl font-medium">
                    Série Santuário
                </h1>
                <p className="font-normal text-base text-[#3d3d45]">
                    Descrição sobre o guia de estudo
                </p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:flex md:flex-row md:flex-wrap md:w-full px-8">
            {/* {studies.map(study => (
              <StudyCard key={study} />
            ))} */}
        </div>
    </section>
  )
}