export interface AgendaItem {
    id: number;
    time: string;
    date: string;
    color: string;
    title?: string;
    subtext?: string;
    link?: string;
}