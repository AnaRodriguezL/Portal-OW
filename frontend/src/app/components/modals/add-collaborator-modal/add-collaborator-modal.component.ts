import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { collaboratorModel } from '../../../pages/dashboard/collaborators/model/collaborator.model';

/**
 * Componente que renderiza un modal para agregar un nuevo colaborador.
 */
@Component({
    selector: 'app-add-collaborator-modal',
    templateUrl: './add-collaborator-modal.component.html'
})
export class AddCollaboratorModalComponent {

    /**
     * Formulario para la información general del colaborador.
     */
    collaboratorForm: FormGroup;

    /**
     * Formulario para la información bancaria del colaborador.
     */
    bankForm: FormGroup;

    /**
     * Archivos cargados por el usuario.
     */
    files: File[] = [];

    /**
     * Vista previa de la imagen cargada por el usuario.
     */
    imagePreview: any;

    /**
     * Índice de la pestaña seleccionada.
     */
    selectedTabIndex = 0;

    /**
     * Indica si se muestra la pestaña de información bancaria.
     */
    isBankInfoVisible = false;

    constructor(
        private fb: FormBuilder,
        private snackBar: MatSnackBar,
        public dialogRef: MatDialogRef<AddCollaboratorModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { collaborator: collaboratorModel }
    ) {
        /**
         * Crea el formulario con la información general del colaborador.
         */
        this.collaboratorForm = this.fb.group({
            fullName: ['', Validators.required],
            description: ['', Validators.required],
            documentType: ['', Validators.required],
            documentNumber: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            country: ['', Validators.required],
            department: ['', Validators.required],
            city: ['', Validators.required],
            address: ['', Validators.required],
            phone: ['', Validators.required],
            position: ['', Validators.required]
        });

        /**
         * Crea el formulario con la información bancaria del colaborador.
         */
        this.bankForm = this.fb.group({
            bank: ['', Validators.required],
            numberBank: ['', Validators.required]
        });
    }

    /**
     * Función llamada cuando el usuario arrastra un archivo a la zona de carga.
     * @param event Evento de arrastre.
     */
    onFileDropped(event: any) {
        this.files = event.addedFiles;
    }

    /**
     * Función llamada cuando el usuario elimina un archivo de la zona de carga.
     * @param file Archivo a eliminar.
     */
    onRemove(file: File) {
        this.files = this.files.filter(f => f !== file);
    }

    /**
     * Función llamada cuando el usuario completa la información general del colaborador.
     */
    saveGeneralInfo(): void {
        this.selectedTabIndex = 1;
        this.isBankInfoVisible = true;
    }

    /**
     * Función llamada cuando el usuario completa la información bancaria del colaborador.
     */
    saveBankInfo(): void {
        const newCollaborator: collaboratorModel = {
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
            position: this.collaboratorForm.value.position,
            id: 0,
            photo: '',
            bank: this.bankForm.value.bank,
            numberBank: this.bankForm.value.numberBank,
            paymentHistory: []
        };
        this.snackBar.open('Colaborador añadido exitosamente.', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['snackbar-success']
        });
        this.dialogRef.close(newCollaborator);
    }
}
