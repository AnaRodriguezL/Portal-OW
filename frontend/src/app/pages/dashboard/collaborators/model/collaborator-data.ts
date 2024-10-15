import { collaboratorModel } from "./collaborator.model";

export const collaboratorItems: collaboratorModel[] = [
    {
        id: 1,
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
        fullName: 'Juan Pérez',
        description: 'Juan es un profesional comprometido con una sólida experiencia en desarrollo de software, destacándose por su enfoque orientado a resultados.',
        position: 'Desarrollador Senior',
        email: 'juan.perez@empresa.com',
        phone: '+34 600 123 456',
        country: 'España',
        bank: 'Banco Santander',
        numberBank: 123123,
        paymentHistory: [
            { date: '2024-01-15', amount: 1500 },
            { date: '2024-02-15', amount: 1500 },
            { date: '2024-03-15', amount: 1500 }
        ],
        documentType: 'cc',
        documentNumber: 12345678,
        department: 'Madrid',
        city: 'Madrid',
        address: 'adada'
    },
    {
        id: 2,
        photo: 'https://randomuser.me/api/portraits/women/2.jpg',
        fullName: 'María López',
        description: 'María es una diseñadora creativa con una pasión por la experiencia del usuario y la estética visual, siempre buscando la innovación en sus proyectos.',
        position: 'Diseñadora UX/UI',
        email: 'maria.lopez@empresa.com',
        phone: '+34 600 654 321',
        country: 'España',
        bank: 'Banco BBVA',
        numberBank: 123123,
        paymentHistory: [
            { date: '2024-01-20', amount: 1200 },
            { date: '2024-02-20', amount: 1200 },
            { date: '2024-03-20', amount: 1200 }
        ],
        documentType: 'cc',
        documentNumber: 87654321,
        department: 'Barcelona',
        city: 'Barcelona',
        address: 'adada'
    }
];