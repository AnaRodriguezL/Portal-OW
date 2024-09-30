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

/**
 * Módulo del calendario
 */
import { FullCalendarModule } from '@fullcalendar/angular';

/**
 * Componente de item de navegación
 */
import { AppNavItemComponent } from '../components/sidebar/nav-item/nav-item.component';

import { BrandingComponent } from '../components/sidebar/branding.component';
import { UserPanelComponent } from '../components/sidebar/user-panel.component';

/**
 * Modales
 */
import { AgendaComponent } from '../components/modals/agenda/agenda.component';

registerLocaleData(localeEs);

@NgModule({
    declarations: [
        AppNavItemComponent,
        BrandingComponent,
        UserPanelComponent,
        AgendaComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        IconsModule,
        FullCalendarModule
    ],
    exports: [
        CommonModule,
        MaterialModule,
        IconsModule,
        FullCalendarModule,
        AppNavItemComponent,
        BrandingComponent,
        UserPanelComponent
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'es' } 
    ]
})
export class SharedModule { }