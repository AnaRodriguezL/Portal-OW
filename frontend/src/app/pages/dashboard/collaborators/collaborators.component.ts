import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SharedModule } from '../../../shared/shared.module';

import { collaboratorItem } from './collaborator-items/collaborator-item';
import { collaboratorItems } from './collaborator-items/collaborator-data';

import { CollaboratorModalComponent } from '../../../components/modals/collaborator-modal/collaborator-modal.component';

@Component({
    selector: 'app-collaborators',
    standalone: true,
    imports: [
        SharedModule
    ],
    templateUrl: './collaborators.component.html'
})
export class CollaboratorsComponent {
    collaboratorItems: collaboratorItem[] = collaboratorItems;

    openCollaboratorModal(collaborator: collaboratorItem): void {
        const dialogRef = this.dialog.open(CollaboratorModalComponent, {
            width: '800px',
            data: { 
                collaborator
            }
        });

        dialogRef.afterClosed().subscribe((newCollaborator: collaboratorItem) => {
            if (newCollaborator) {
                this.collaboratorItems.push(newCollaborator);
            }
        });
    }

    openAddCollaboratorModal(): void {
        alert('Funcionalidad de agregar colaborador no implementada.');
    }

    constructor(private dialog: MatDialog) { }
}
