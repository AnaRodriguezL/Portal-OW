import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { collaboratorItem } from '../../../pages/dashboard/collaborators/collaborator-items/collaborator-item';

@Component({
    selector: 'app-collaborator-modal',
    templateUrl: './collaborator-modal.component.html'
})
export class CollaboratorModalComponent {

    collaboratorForm: FormGroup;
    securityForm: FormGroup;
    bankForm: FormGroup;

    saveGeneralInfo(): void {
        if (this.collaboratorForm.valid) {
            const updatedCollaborator: collaboratorItem = {
                ...this.data.collaborator,
                fullName: this.collaboratorForm.value.fullName,
                position: this.collaboratorForm.value.position,
                email: this.collaboratorForm.value.email,
                phone: this.collaboratorForm.value.phone
            };
            alert('Información general actualizada exitosamente.');
            this.dialogRef.close();
        } else {
            alert('Por favor, completa todos los campos obligatorios.');
        }
    }

    updatePassword(): void {
        if (this.securityForm.valid) {
            // Aquí deberías implementar la lógica para verificar la contraseña actual y actualizarla.
            // Para este ejemplo, simplemente mostraremos un mensaje.
            alert('Contraseña actualizada exitosamente.');
            this.securityForm.reset();
        } else {
            alert('Por favor, completa todos los campos obligatorios y asegúrate de que la nueva contraseña tenga al menos 6 caracteres.');
        }
    }

    saveBankInfo(): void {
        if (this.bankForm.valid) {
            const updatedCollaborator: collaboratorItem = {
                ...this.data.collaborator,
                paymentMethod: this.bankForm.value.paymentMethod,
                bank: this.bankForm.value.bank
            };
            alert('Información bancaria actualizada exitosamente.');
            this.dialogRef.close();
        } else {
            alert('Por favor, completa todos los campos obligatorios.');
        }
    }

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<CollaboratorModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { collaborator: collaboratorItem },
    ) {
        this.collaboratorForm = this.fb.group({
            fullName: [this.data.collaborator.fullName, Validators.required],
            position: [this.data.collaborator.position, Validators.required],
            email: [this.data.collaborator.email, [Validators.required, Validators.email]],
            phone: [this.data.collaborator.phone, Validators.required]
        });

        this.securityForm = this.fb.group({
            currentPassword: ['', Validators.required],
            newPassword: ['', [Validators.required, Validators.minLength(6)]]
        });

        this.bankForm = this.fb.group({
            paymentMethod: [this.data.collaborator.paymentMethod, Validators.required],
            bank: [this.data.collaborator.bank, Validators.required]
        });
    }
}