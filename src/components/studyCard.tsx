import { Card, CardContent, CardFooter } from "./ui/card"
import { Toggle } from "./ui/toggle"
import { useRouter } from 'next/navigation'
import Image from "next/image"
import { TTags } from "@/utils/types"
 
type TProps = {
  slugStudy: string;
  imageStudy: string;
  titleStudy: string;
  tagsStudy: TTags[];
}

export const StudyCard = ({ imageStudy, slugStudy, tagsStudy, titleStudy }: TProps) => {
  const router = useRouter()
  
  function handleGoToStudy(slug: string){
    router.push(`/${slug}`)
  }

  return (
    <Card
      className="max-w-[280px] md:w-[280px] hover:cursor-pointer transition duration-0 ease-in-out hover:duration-700 hover:shadow-lg hover:shadow-gray-200"
      onClick={() => handleGoToStudy(slugStudy)}
    >
      <CardContent 
        className="p-0"
      >
        <Image
          src={imageStudy}
          alt="Imagem"
          height={112}
          width={243}
          className="w-full h-28 object-cover rounded-tl-[14px] rounded-tr-[14px]"
        />
      </CardContent>
      <CardFooter className="p-[8px]">
        <div className="flex flex-col gap-2 flex-1 justify-between min-h-[92px]">
          <p className="font-medium text-[#D7AC49] uppercase text-base">
            {titleStudy}
          </p>
          <div className="flex flex-row gap-[4px]">
            {tagsStudy.map((tag,index) => {
              if(index <= 1){
                return (
                  <Toggle 
                    key={`tag-${tag.tagId}`}
                    variant="outline" 
                    className="bg-[#D9D9D9] text-[#50555A]"
                  >
                    <span className="font-medium text-xs">
                      {tag.tagName}
                    </span>
                  </Toggle>
                )
              }
            })}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}