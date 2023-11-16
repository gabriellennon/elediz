"use client"
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import { usePathname, useRouter } from 'next/navigation'
import { StudyCard } from '@/components/studyCard'
import { useEffect, useState } from 'react'
import { groupsStudies, studies } from '@/utils/studies'
import { TGroup, TStudy } from '@/utils/types'
 
export default function Guide() {
  const [studiesList, setStudies] = useState(studies)
  const [studiesToShow, setStudiesToShow] = useState<TStudy[]>([]);
  const [groupInfo, setGroupInfo] = useState<TGroup | undefined>()
  const pathname = usePathname()
  const router = useRouter()
  
  function handleGoBack(){
    router.back()
  }

  function mountStudiesGroups(groupId: string){
    const studiesInThisGroup = studiesList.filter(e => e.grupoId === groupId)
    setStudiesToShow(studiesInThisGroup)
    }

  useEffect(() => {
    const slugActive = pathname.split('/');
    setGroupInfo(groupsStudies.find(e => e.grupoId === slugActive[2]))
    mountStudiesGroups(slugActive[2]);
  },[setStudiesToShow])

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
                    {groupInfo?.grupoName}
                </h1>
                <p className="font-normal text-base text-[#3d3d45]">
                    Estudos contidos nesse guia
                </p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:flex md:flex-row md:flex-wrap md:w-full px-8">
            {studiesToShow && studiesToShow.length > 0 ? (
                studiesToShow.map((st, index) => (
                    <StudyCard 
                        key={`${st.id}-${index}`}
                        imageStudy={st.image}
                        slugStudy={st.slug}
                        tagsStudy={st.tags}
                        titleStudy={st.title}
                    />
                ))
            ) : (
                <p>No studies to display.</p>
            )}
        </div>
    </section>
  )
}