import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

export const QuestionAccordion = () => {
    return (
        <div>
            <div className="flex flex-row items-center gap-1">
                <p className="text-[#115D8C] text-base font-medium">
                    1) Onde o mal começou?
                </p>
                <span className="text-sm text-[#3d3d45]">
                    Apocalipse 12:7 a 10
                </span>
            </div>
            <div className="px-3 py-1">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Explicação</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}