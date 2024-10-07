// src/app/clientes/components/cliente-details/cliente-details.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cliente, Contacto, Servicio, Componente, Actividad } from '../../../pages/dashboard/clients/models/client-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ClientesService } from '../../../pages/dashboard/clients/models/client.service';

@Component({
    selector: 'app-cliente-details',
    templateUrl: './client-modal.component.html',
})
export class ClienteDetailsComponent implements OnInit {
    cliente: Cliente;
    contactoForm: FormGroup;
    tributarioDisplayedColumns: string[] = ['fechaPago', 'monto', 'metodoPago'];
    componentesDisplayedColumns: string[] = ['icon', 'nombre', 'descripcion', 'fechaInstalacion', 'fechaVigencia', 'precio'];

    constructor(
        public dialogRef: MatDialogRef<ClienteDetailsComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { cliente: Cliente },
        private fb: FormBuilder,
        private clientesService: ClientesService
    ) {
        this.cliente = data.cliente;
        this.contactoForm = this.fb.group({
            fullName: [this.cliente.contacto.fullName, Validators.required],
            email: [this.cliente.contacto.email, [Validators.required, Validators.email]],
            phone: [this.cliente.contacto.phone, Validators.required],
            address: [this.cliente.contacto.address, Validators.required]
        });
    }

    ngOnInit(): void { }

    close(): void {
        this.dialogRef.close();
    }

    saveContacto(): void {
        if (this.contactoForm.valid) {
            const updatedContacto: Contacto = {
                ...this.cliente.contacto,
                ...this.contactoForm.value
            };
            const updatedCliente: Cliente = {
                ...this.cliente,
                contacto: updatedContacto
            };
            this.clientesService.updateCliente(updatedCliente).subscribe(result => {
                if (result) {
                    this.cliente = result;
                    this.dialogRef.close('updated');
                }
            });
        }
    }

    addServicio(): void {
        // Implementa la lógica para agregar un servicio
    }

    removeServicio(servicioId: number): void {
        this.cliente.servicios = this.cliente.servicios.filter(s => s.id !== servicioId);
        this.clientesService.updateCliente(this.cliente).subscribe();
    }

    addComponente(): void {
        // Implementa la lógica para agregar un componente
    }

    addActividad(): void {
        // Implementa la lógica para agregar una actividad
    }
}
