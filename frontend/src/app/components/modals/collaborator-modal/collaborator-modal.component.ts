import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { collaboratorModel } from '../../../pages/dashboard/collaborators/model/collaborator.model';

/**
 * Componente que renderiza un modal para mostrar y editar la información de un colaborador.
 */
@Component({
    selector: 'app-collaborator-modal',
    templateUrl: './collaborator-modal.component.html'
})
export class CollaboratorModalComponent {

    /**
     * Formulario con la información general del colaborador.
     */
    collaboratorForm: FormGroup;

    /**
     * Formulario con la información bancaria del colaborador.
     */
    bankForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private snackBar: MatSnackBar,
        public dialogRef: MatDialogRef<CollaboratorModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { collaborator: collaboratorModel },
    ) {
        /**
         * Crea el formulario con la información general del colaborador.
         */
        this.collaboratorForm = this.fb.group({
            fullName: [this.data.collaborator.fullName, Validators.required],
            description: [this.data.collaborator.description, Validators.required],
            documentType: [this.data.collaborator.documentType, Validators.required],
            documentNumber: [this.data.collaborator.documentNumber, Validators.required],
            email: [this.data.collaborator.email, [Validators.required, Validators.email]],
            country: [this.data.collaborator.country, Validators.required],
            department: [this.data.collaborator.department, Validators.required],
            city: [this.data.collaborator.city, Validators.required],
            address: [this.data.collaborator.address, Validators.required],
            phone: [this.data.collaborator.phone, Validators.required],
            position: [this.data.collaborator.position, Validators.required]
        });

        /**
         * Crea el formulario con la información bancaria del colaborador.
         */
        this.bankForm = this.fb.group({
            bank: [this.data.collaborator.bank, Validators.required],
            numberBank: [this.data.collaborator.numberBank, Validators.required]
        });
    }

    /**
     * Eliminar todos los datos del colaborador
     */
    deleteCollaborator(): void {
        const snackBarRef = this.snackBar.open('¿Estás seguro de que deseas eliminar este colaborador?', 'Eliminar', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['snackbar-confirm'],
        });

        snackBarRef.onAction().subscribe(() => {
            this.snackBar.open('Colaborador eliminado exitosamente.', 'Cerrar', {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                panelClass: ['snackbar-success'],
            });

            this.dialogRef.close({ deleted: true, id: this.data.collaborator.id });
        });

        snackBarRef.afterDismissed().subscribe(({ dismissedByAction }) => {
            if (!dismissedByAction) {
                this.snackBar.open('Eliminación cancelada.', 'Cerrar', {
                    duration: 3000,
                    horizontalPosition: 'center',
                    verticalPosition: 'top',
                    panelClass: ['snackbar-error'],
                });
            }
        });
    }

    /**
     * Guarda la información general del colaborador.
     */
    saveGeneralInfo(): void {
        const updatedCollaborator: collaboratorModel = {
            ...this.data.collaborator,
            fullName: this.collaboratorForm.value.fullName,
            description: this.collaboratorForm.value.description,
            documentType: this.collaboratorForm.value.documentType,
            documentNumber: this.collaboratorForm.value.documentNumber,
            email: this.collaboratorForm.value.email,
            country: this.collaboratorForm.value.country,
            department: this.collaboratorForm.value.department,
            city: this.collaboratorForm.value.city,
            address: this.collaboratorForm.value.address,
            phone: this.collaboratorForm.value.phone,
            position: this.collaboratorForm.value.position
        };
        this.snackBar.open('Información general actualizada exitosamente.', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['snackbar-success']
        });
        this.dialogRef.close(updatedCollaborator);
    }

    /**
     * Guarda la información bancaria del colaborador.
     */
    saveBankInfo(): void {
        const updatedCollaborator: collaboratorModel = {
            ...this.data.collaborator,
            bank: this.bankForm.value.bank,
            numberBank: this.bankForm.value.numberBank
        };
        this.snackBar.open('Información bancaria actualizada exitosamente.', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['snackbar-success']
        });
        this.dialogRef.close(updatedCollaborator);
    }
}