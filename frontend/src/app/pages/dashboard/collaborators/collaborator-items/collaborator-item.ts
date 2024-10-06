export interface paymentItem {
    date: string;
    amount: number;
}

export interface collaboratorItem {
    id: number;
    photo: string;
    fullName: string;
    position: string;
    email: string;
    phone: string;
    country: string;
    paymentMethod: string;
    bank: string;
    paymentHistory: paymentItem[];
}
