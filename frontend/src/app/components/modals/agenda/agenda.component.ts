import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html'
})
export class AgendaComponentModal {
    eventForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<AgendaComponentModal>
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

    onCancel(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.eventForm.valid) {
            this.dialogRef.close(this.eventForm.value);
        }
    }
}
