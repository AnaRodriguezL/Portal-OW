import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html'
})
export class AgendaComponent {
    constructor(
        public dialogRef: MatDialogRef<AgendaComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
