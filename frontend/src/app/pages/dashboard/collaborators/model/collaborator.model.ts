export interface paymentItem {
    date: string;
    amount: number;
}

export interface collaboratorModel {
    id: number;
    photo: string;
    fullName: string;
    description: string;
    documentType: string;
    documentNumber: number;
    email: string;
    country: string;
    department: string;
    city: string;
    address: string;
    phone: string;
    position: string;
    bank: string;
    numberBank: number;
    paymentHistory: paymentItem[];
}