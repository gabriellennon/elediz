"use client"
import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import { usePathname, useRouter } from 'next/navigation'
import { StudyCard } from '@/components/studyCard'
import { useEffect, useState } from 'react'
import { studies } from '@/utils/studies'
import { TStudy } from '@/utils/types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
 

export default function EstudosScreen() {
    const [studiesList, setStudies] = useState<TStudy[]>(studies)
    const [search, setSearch] = useState('');
    const [defaultTab, setDefaultTab] = useState('all');
    const router = useRouter()
    
    function handleGoBack(){
        router.back()
    }

    const filteredNameStudy = search.length > 0 ? studiesList.filter(a => a.title.toUpperCase().includes(search.toUpperCase())): studiesList;

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

    const filterActive = () => {
        switch (defaultTab) {
          case 'all':
            return filteredNameStudy;
          case 'az':
            return filterOrderStudies('asc');
        
          case 'za':
            return filterOrderStudies('dec');
          default:
            return filteredNameStudy;
        }
    }

    function handleClickTab(tab: string){
        setDefaultTab(tab)
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
                <div>
                    {studiesList.length ? (
                        <>
                            <div className="mt-8 mb-4">
                                <h1 className="text-[#3D3D45] text-2xl font-medium">
                                    Todos os estudos
                                </h1>
                                <Input
                                    className="border-[#DCE2E5] rounded-full mt-3 h-11"
                                    placeholder="Busque por um assunto ou estudo específico"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <div className="mt-2">
                                <Tabs defaultValue={defaultTab} >
                                <TabsList>
                                    <TabsTrigger value="all" onClick={() => handleClickTab('all')}>Todos</TabsTrigger>
                                    <TabsTrigger value="az" onClick={() => handleClickTab('az')}>A - Z</TabsTrigger>
                                    <TabsTrigger value="za" onClick={() => handleClickTab('za')}>Z - A</TabsTrigger>
                                </TabsList>
                                <TabsContent value={defaultTab}>
                                    <div className="grid grid-cols-2 gap-3 md:flex md:flex-row md:flex-wrap md:w-full mt-2">
                                    {filterActive().map((study, index) => {
                                        if(index <= 9){
                                        return (
                                            <StudyCard 
                                            key={`${defaultTab}-${study.id}`} 
                                            imageStudy={study.image}
                                            slugStudy={study.slug}
                                            tagsStudy={study.tags}
                                            titleStudy={study.title}
                                            />
                                        )
                                        }
                                    })}
                                    </div>
                                </TabsContent>
                                </Tabs>
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