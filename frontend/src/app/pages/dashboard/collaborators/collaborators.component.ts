import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SharedModule } from '../../../shared/shared.module';

import { collaboratorModel } from './model/collaborator.model';
import { collaboratorItems } from './model/collaborator-data';

import { CollaboratorModalComponent } from '../../../components/modals/collaborator-modal/collaborator-modal.component';
import { AddCollaboratorModalComponent } from '../../../components/modals/add-collaborator-modal/add-collaborator-modal.component';

@Component({
    selector: 'app-collaborators',
    standalone: true,
    imports: [
        SharedModule
    ],
    templateUrl: './collaborators.component.html'
})
export class CollaboratorsComponent {
    /**
     * Array con los colaboradores
     */
    collaboratorItems: collaboratorModel[] = collaboratorItems;

    /**
     * Abre el modal de edición de un colaborador
     */
    openCollaboratorModal(collaborator: collaboratorModel): void {
        const dialogRef = this.dialog.open(CollaboratorModalComponent, {
            width: '1000px',
            data: {
                collaborator
            }
        });

        dialogRef.afterClosed().subscribe((updatedCollaborator: collaboratorModel) => {
            if (updatedCollaborator) {
                const index = this.collaboratorItems.findIndex(item => item.id === updatedCollaborator.id);
                if (index !== -1) {
                    this.collaboratorItems[index] = updatedCollaborator;
                }
            }
        });
    }

    /**
     * Abre el modal de creación de un nuevo colaborador
     */
    openAddCollaboratorModal(): void {
        const dialogRef = this.dialog.open(AddCollaboratorModalComponent, {
            width: '1000px',
            data: {
                collaborator: {}
            }
        });

        dialogRef.afterClosed().subscribe((newCollaborator: collaboratorModel) => {
            if (newCollaborator) {
                this.collaboratorItems.push(newCollaborator);
            }
        });
    }

    constructor(private dialog: MatDialog) { }
}