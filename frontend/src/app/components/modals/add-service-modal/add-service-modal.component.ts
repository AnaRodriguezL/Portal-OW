import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { serviceItem } from '../../../pages/dashboard/services/service-items/service-item';

@Component({
    selector: 'app-add-service-modal',
    templateUrl: './add-service-modal.component.html'
})
export class AddServiceModalComponent {

    serviceForm: FormGroup;
    files: File[] = [];
    imagePreview: any;

    onFileDropped(event: any) {
        this.files = event.addedFiles;
    }

    onRemove(file: File) {
        this.files = this.files.filter(f => f !== file);
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.serviceForm.valid) {
            const newService: serviceItem = {
                id: 1,
                name: this.serviceForm.value.name,
                description: this.serviceForm.value.description,
                // category: this.serviceForm.value.category,
                icon: this.files.length ? URL.createObjectURL(this.files[0]) : 'default-icon.png'
            };

            this.dialogRef.close(newService);
        }
    }

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<AddServiceModalComponent>
    ) {
        this.serviceForm = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            category: ['', Validators.required]
        });
    }
}
