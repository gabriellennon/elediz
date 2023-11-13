"use client"
import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import JesusQuadriculadoImg from '../../../assets/img/estudos/jesus.jpeg'
import { usePathname, useRouter } from 'next/navigation'
import { StudyCard } from '@/components/studyCard'
import { useEffect, useState } from 'react'
import { studies } from '@/utils/studies'
import { TStudy } from '@/utils/types'
 
export default function TagsScreen() {
  const [studiesList, setStudies] = useState<TStudy[]>([])
  const [tagActive, setTagActive] = useState('');
  const pathname = usePathname()
  const router = useRouter()
  
  function handleGoBack(){
    router.back()
  }

  useEffect(() => {
    const tagActive = pathname.split('/tags/')
    setTagActive(tagActive[1])
    const studiesWithThisTag = studies.filter(e => e.tags.includes(tagActive[1]))

    console.log(tagActive[1])
    console.log(studiesWithThisTag)
    setStudies(studiesWithThisTag)
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
                onClick={handleGoBack}
            >
                <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <div>
                {studiesList.length ? (
                    <>
                        <div className="mt-8 mb-4">
                            <h1 className="text-[#3D3D45] text-2xl font-medium">
                                Estudos relacionados com a tag: <span className='text-sky-950'>{tagActive}</span>
                            </h1>
                        </div>
                        <div className="grid grid-cols-2 gap-3 md:flex md:flex-row md:flex-wrap md:w-full mt-2">
                            {studiesList.map(study => (
                                <StudyCard 
                                    key={study.id} 
                                    imageStudy={study.image}
                                    slugStudy={study.slug}
                                    tagsStudy={study.tags}
                                    titleStudy={study.title}
                                />
                            ))}
                        </div>
                    </>
                ): (
                    <h1 className="text-[#3D3D45] text-2xl font-medium">
                        Ops! 😵‍💫 Algo deu errado, tente novamente.
                    </h1>
                )}
            </div>
        </div>
    </section>
  )
}