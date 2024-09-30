import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { serviceItems } from './service-items/service-data';
import { serviceItem } from './service-items/service-item';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [
        SharedModule
    ],
    templateUrl: './services.component.html'
})
export class ServicesComponent {
    serviceItems: serviceItem[] = serviceItems; // Asegúrate de que esta línea esté correctamente tipada

    displayedColumns: string[] = ['name', 'description'];
}
