
export type TContentStudy = {
    id: string;
    isQuestion: boolean;
    text?: string;
    question?: string;
    citation?: string;
    explanation?: string;
}

export type TTags = {
    tagName: string;
    tagId: string;
}

export type TStudy = {
    id: number;
    title: string;
    image: any;
    tags: TTags[];
    content: TContentStudy[];
    writer: string;
    slug: string;
    grupoId?: string;
    grupoName?: string;
}

export type TGroup = {
    grupoId: string;
    grupoName: string;
    imageGroup: any;
}