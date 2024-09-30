import { Component } from '@angular/core';

/**
 * Componente que se encarga de mostrar el logo de la aplicación en la barra de navegación superior.
 */
@Component({
    selector: 'app-branding',
    /**
     * Template que se utiliza para mostrar el logo de la aplicación.
     */
    template: `
    <a class="branding" href="/">
        <img src="/assets/img/Logo.png" class="branding-logo" alt="Logo"/>
        <span class="branding-name">Portal OW</span>
    </a>
  `,
})
export class BrandingComponent {
    /**
     * Constructor del componente. No hace nada en este caso.
     */
    constructor() { }
}