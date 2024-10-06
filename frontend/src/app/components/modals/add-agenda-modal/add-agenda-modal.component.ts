import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-agenda-modal',
    templateUrl: './add-agenda-modal.component.html'
})
export class AddAgendaModalComponent {
    eventForm: FormGroup;

    onCancel(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.eventForm.valid) {
            this.dialogRef.close(this.eventForm.value);
        }
    }

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<AddAgendaModalComponent>
    ) {
        this.eventForm = this.fb.group({
            title: ['', Validators.required],
            date: ['', Validators.required],
            time: ['', Validators.required],
            description: [''],
            completed: [false],
            color: ['primary']
        });
    }
}
