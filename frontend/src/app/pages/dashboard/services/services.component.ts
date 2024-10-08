import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SharedModule } from '../../../shared/shared.module';

import { serviceItem } from './service-items/service-item';
import { serviceItems } from './service-items/service-data';

import { AddServiceModalComponent } from '../../../components/modals/add-service-modal/add-service-modal.component';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [
        SharedModule
    ],
    templateUrl: './services.component.html',
})
export class ServicesComponent {

    serviceItems: serviceItem[] = serviceItems;

    displayedColumns: string[] = ['name', 'description'];

    files: File[] = [];

    onFileDropped(event: FileList): void {
        if (event.length > 0) {
            this.files = [event[0]];
        }
    }

    onRemove(file: File): void {
        this.files = [];
    }

    openAddServiceModal() {
        const dialogRef = this.dialog.open(AddServiceModalComponent, {
            width: '500px',
        });

        dialogRef.afterClosed().subscribe((newService: serviceItem) => {
            if (newService) {
                this.serviceItems.push(newService);
            }
        });
    }

    constructor(private dialog: MatDialog) { }
}

