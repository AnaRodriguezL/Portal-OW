// src/app/clientes/components/clientes-list/clientes-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientesService } from './models/client.service';
import { Cliente } from './models/client-model';

import { SharedModule } from '../../../shared/shared.module';

import { ClienteDetailsComponent } from '../../../components/modals/client-modal/client-modal.component';

@Component({
    selector: 'app-clientes-list',
    standalone: true,
    imports: [
        SharedModule
    ],
    templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {
    clientes: Cliente[] = [];

    constructor(
        private clientesService: ClientesService,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.loadClientes();
    }

    loadClientes(): void {
        this.clientesService.getClientes().subscribe(data => {
            this.clientes = data;
        });
    }

    openAddClienteModal(): void {
        // Implementa el modal para agregar un cliente
        // Puedes crear un componente separado para el formulario de agregar
    }

    openClienteDetailsModal(cliente: Cliente): void {
        const dialogRef = this.dialog.open(ClienteDetailsComponent, {
            width: '800px',
            data: { cliente }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'updated') {
                this.loadClientes();
            }
        });
    }
}
