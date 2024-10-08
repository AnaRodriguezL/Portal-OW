import { collaboratorItem } from "./collaborator-item";

export const collaboratorItems: collaboratorItem[] = [
    {
        id: 1,
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
        fullName: 'Juan Pérez',
        position: 'Desarrollador Senior',
        email: 'juan.perez@empresa.com',
        phone: '+34 600 123 456',
        country: 'España',
        paymentMethod: 'Transferencia',
        bank: 'Banco Santander',
        paymentHistory: [
            { date: '2024-01-15', amount: 1500 },
            { date: '2024-02-15', amount: 1500 },
            { date: '2024-03-15', amount: 1500 }
        ]
    },
    {
        id: 2,
        photo: 'https://randomuser.me/api/portraits/women/2.jpg',
        fullName: 'María López',
        position: 'Diseñadora UX/UI',
        email: 'maria.lopez@empresa.com',
        phone: '+34 600 654 321',
        country: 'España',
        paymentMethod: 'PayPal',
        bank: 'Banco BBVA',
        paymentHistory: [
            { date: '2024-01-20', amount: 1200 },
            { date: '2024-02-20', amount: 1200 },
            { date: '2024-03-20', amount: 1200 }
        ]
    }
]