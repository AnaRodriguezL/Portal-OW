// src/app/clientes/servicios/clientes.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './client-model';

@Injectable({
    providedIn: 'root'
})
export class ClientesService {
    private clientes: Cliente[] = [
        // Datos de ejemplo
        {
            id: 1,
            photo: 'assets/images/client1.jpg',
            fullName: 'Juan Pérez',
            position: 'Gerente',
            email: 'juan.perez@example.com',
            phone: '+57 300 1234567',
            country: 'Colombia',
            contacto: {
                fullName: 'Juan Pérez',
                email: 'juan.perez@example.com',
                phone: '+57 300 1234567',
                address: 'Calle 123 #45-67, Bogotá'
            },
            tributario: [
                {
                    id: 1,
                    fechaPago: new Date('2024-01-15'),
                    monto: 150000,
                    metodoPago: 'Transferencia Bancaria'
                }
            ],
            servicios: [
                {
                    id: 1,
                    icon: 'build',
                    nombre: 'Desarrollo Web',
                    descripcion: 'Desarrollo de sitio web corporativo.'
                }
            ],
            componentes: [
                {
                    id: 1,
                    icon: 'storage',
                    nombre: 'Base de Datos',
                    descripcion: 'PostgreSQL para gestión de datos.',
                    fechaInstalacion: new Date('2024-02-01'),
                    fechaVigencia: new Date('2025-02-01'),
                    precio: 500000
                }
            ],
            actividades: [
                {
                    id: 1,
                    titulo: 'Revisión de Sitio Web',
                    descripcion: 'Revisar el funcionamiento del sitio web.',
                    archivos: ['reporte.pdf'],
                    comentarios: [
                        {
                            id: 1,
                            autor: 'Ana Gómez',
                            contenido: 'Todo en orden.',
                            fecha: new Date('2024-03-10')
                        }
                    ],
                    estado: 'Pendiente'
                }
            ]
        }
        // Puedes agregar más clientes aquí
    ];

    constructor() { }

    getClientes(): Observable<Cliente[]> {
        return of(this.clientes);
    }

    getClienteById(id: number): Observable<Cliente | undefined> {
        const cliente = this.clientes.find(c => c.id === id);
        return of(cliente);
    }

    addCliente(cliente: Cliente): Observable<Cliente> {
        cliente.id = this.clientes.length + 1;
        this.clientes.push(cliente);
        return of(cliente);
    }

    updateCliente(updatedCliente: Cliente): Observable<Cliente | undefined> {
        const index = this.clientes.findIndex(c => c.id === updatedCliente.id);
        if (index !== -1) {
            this.clientes[index] = updatedCliente;
            return of(updatedCliente);
        }
        return of(undefined);
    }

    // Métodos para manejar servicios, componentes, actividades, etc., pueden añadirse aquí
}
