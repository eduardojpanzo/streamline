export type ListType = {
    title: string;
    creatable: boolean;
    cards:CardType[];
    done?:boolean
}

export type CardType = {
    id: number;
    content: string;
    labels: string[];
    user: string;
}