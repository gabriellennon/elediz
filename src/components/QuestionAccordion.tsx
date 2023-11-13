import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

type TProps = {
    question: string;
    citation: string;
    explanation: string;
}

export const QuestionAccordion = ({ citation, explanation, question }: TProps) => {
    return (
        <div>
            <div className="flex flex-row flex-wrap items-center gap-1">
                <p className="text-[#115D8C] text-base font-medium">
                    {question}
                </p>
                <span className="text-sm text-[#3d3d45]">
                    {citation}
                </span>
            </div>
            <div className="px-3 py-1">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Explicação</AccordionTrigger>
                        <AccordionContent>
                            {explanation}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}