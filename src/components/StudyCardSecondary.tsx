import Image from "next/image"
import { Card, CardContent, CardFooter } from "./ui/card"
import JesusQuadriculadoImg from '../assets/img/estudos/jesus.jpeg'
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { useRouter } from 'next/navigation'

type TProps = {
  image: any;
  id: string;
  title: string;
}

export const StudyCardSecondary = ({ id, image, title }: TProps) => {
  const router = useRouter()
  
  function handleGoToGuideStudy(){
    router.push(`/guias/${id}`)
  }

  return (
    <Card 
      className="w-full p-3 flex flex-row justify-between items-center hover:cursor-pointer"
      onClick={handleGoToGuideStudy}
    >
      <CardContent 
        className="flex flex-row gap-2 items-center p-0"
      >
        <Image
          src={image}
          alt={title}
          className="w-16 h-12 object-cover rounded-[14px]"
        />
        <p className="font-medium text-[#3D3D45]">
            {title}
        </p>
      </CardContent>
      <CardFooter className="p-0">
            <ChevronRightIcon/>
      </CardFooter>
    </Card>
  )
}