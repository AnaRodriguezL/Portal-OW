// src/app/clientes/models/cliente.model.ts
export interface Cliente {
    id: number;
    photo: string;
    fullName: string;
    position: string;
    email: string;
    phone: string;
    country: string;
    // Información adicional
    contacto: Contacto;
    tributario: Tributario[];
    servicios: Servicio[];
    componentes: Componente[];
    actividades: Actividad[];
}

export interface Contacto {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    // Otros campos editables
}

export interface Tributario {
    id: number;
    fechaPago: Date;
    monto: number;
    metodoPago: string;
    // Otros campos relevantes
}

export interface Servicio {
    id: number;
    icon: string;
    nombre: string;
    descripcion: string;
}

export interface Componente {
    id: number;
    icon: string;
    nombre: string;
    descripcion: string;
    fechaInstalacion: Date;
    fechaVigencia: Date;
    precio: number;
}

export interface Actividad {
    id: number;
    titulo: string;
    descripcion: string;
    archivos: string[];
    comentarios: Comentario[];
    estado: 'Pendiente' | 'En Progreso' | 'Completada';
}

export interface Comentario {
    id: number;
    autor: string;
    contenido: string;
    fecha: Date;
}
