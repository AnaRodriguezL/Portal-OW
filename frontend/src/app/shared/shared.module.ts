/**
 * Módulo compartido que importa los módulos de Material Design y los iconos
 * de Tabler, y declara el componente de item de navegación.
 */
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

/**
 * Módulo de Material Design
 */
import { MaterialModule } from '../material.module';

/**
 * Módulo de iconos de Tabler
 */
import { IconsModule } from '../icons.module';

import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { NgxDropzoneModule } from 'ngx-dropzone';

/**
 * Módulo del calendario
 */
import { FullCalendarModule } from '@fullcalendar/angular';

/**
 * Componente de item de navegación
 */
import { AppNavItemComponent } from '../components/sidebar/nav-item/nav-item.component';

import { BrandingComponent } from '../components/sidebar/branding.component';

/**
 * Modales
 */
import { AddAgendaModalComponent } from '../components/modals/add-agenda-modal/add-agenda-modal.component';
import { AddServiceModalComponent } from '../components/modals/add-service-modal/add-service-modal.component';
import { ClienteDetailsComponent } from '../components/modals/client-modal/client-modal.component';
import { AddCollaboratorModalComponent } from '../components/modals/add-collaborator-modal/add-collaborator-modal.component';
import { CollaboratorModalComponent } from '../components/modals/collaborator-modal/collaborator-modal.component';

registerLocaleData(localeEs);

@NgModule({
    declarations: [
        AppNavItemComponent,
        BrandingComponent,
        AddAgendaModalComponent,
        AddServiceModalComponent,
        ClienteDetailsComponent,
        AddCollaboratorModalComponent,
        CollaboratorModalComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        IconsModule,
        FullCalendarModule,
        NgxDropzoneModule,
        PickerModule
    ],
    exports: [
        CommonModule,
        MaterialModule,
        IconsModule,
        FullCalendarModule,
        NgxDropzoneModule,
        AppNavItemComponent,
        BrandingComponent
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'es' } 
    ]
})
export class SharedModule { }