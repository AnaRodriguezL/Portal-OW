/**
 * Componente principal de la aplicación
 *
 * Este componente se encarga de renderizar el router outlet
 * que contiene el contenido de la aplicación.
 *
 */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html'
})

export class AppComponent {
    /**
     * Título de la aplicación
     */
    title = 'CRM Portal OW';
}