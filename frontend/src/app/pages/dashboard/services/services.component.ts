import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { serviceItems } from './service-items/service-data';
import { serviceItem } from './service-items/service-item';

import { ServicesComponentModal } from '../../../components/modals/services/services.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [SharedModule],
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
        const dialogRef = this.dialog.open(ServicesComponentModal, {
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

