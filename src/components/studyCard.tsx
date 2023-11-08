import Image from "next/image"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Toggle } from "./ui/toggle"
import JesusQuadriculadoImg from '../assets/img/estudos/jesus.jpeg'

export const StudyCard = () => {
  return (
    <Card
      className="max-w-md"
    >
      <CardContent 
        className="p-0"
      >
        <Image
          src={JesusQuadriculadoImg}
          alt="Imagem"
          className="w-full h-28 object-cover rounded-tl-[14px] rounded-tr-[14px]"
        />
      </CardContent>
      <CardFooter className="p-[8px]">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-[#50555A]">
            Como ser perdoado?
          </p>
          <div className="flex flex-row gap-[4px]">
            <Toggle variant="outline" className="bg-[#D9D9D9] text-[#50555A]">
              <span className="font-medium text-xs">
                perdão
              </span>
            </Toggle>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}