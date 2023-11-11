
export type TContentStudy = {
    id: string;
    isQuestion: boolean;
    text?: string;
    question?: string;
    citation?: string;
    explanation?: string;
}

export type TStudy = {
    id: number;
    title: string;
    image: any;
    tags: string[];
    content: TContentStudy[];
    writer: string;
    slug: string;
}