import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { serviceItem } from '../../../pages/dashboard/services/service-items/service-item';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html'
})
export class ServicesComponentModal {
    serviceForm: FormGroup;
    files: File[] = [];
imagePreview: any;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<ServicesComponentModal>
    ) {
        this.serviceForm = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            category: ['', Validators.required]
        });
    }

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
}
