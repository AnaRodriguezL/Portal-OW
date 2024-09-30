/**
 * Componente que representa la barra de navegación superior
 * de la aplicación.
 *
 * Tiene los botones de toggle para mostrar u ocultar el menú
 * lateral, el botón de notificaciones, el botón de perfil y
 * el botón de logout.
 *
 * @export
 * @class HeaderComponent
 */
import {
    Component,
    Output,
    EventEmitter,
    Input,
    ViewEncapsulation
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";

/**
 * Componente que representa la barra de navegación superior
 * de la aplicación.
 *
 * Tiene los botones de toggle para mostrar u ocultar el menú
 * lateral, el botón de notificaciones, el botón de perfil y
 * el botón de logout.
 *
 * @export
 * @class HeaderComponent
 */
@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, SharedModule],
    templateUrl: './header.component.html',
    encapsulation: ViewEncapsulation.Emulated
})

export class HeaderComponent {

    /**
     * Muestra el título actual de la ruta en la barra de navegación
     *
     * @type {string}
     * @memberof HeaderComponent
     */
    currentRoute: string = 'Inicio';

    /**
     * Muestra u oculta el botón de toggle del menú lateral
     *
     * @type {boolean}
     * @memberof HeaderComponent
     */
    @Input() showToggle = true;

    /**
     * Indica si el botón de toggle del menú lateral está seleccionado
     *
     * @type {boolean}
     * @memberof HeaderComponent
     */
    @Input() toggleChecked = false;

    /**
     * Evento emitido cuando se hace clic en el botón de toggle del menú lateral
     *
     * @type {EventEmitter<void>}
     * @memberof HeaderComponent
     */
    @Output() toggleMobileNav = new EventEmitter<void>();

    /**
     * Evento emitido cuando se hace clic en el botón de toggle del menú lateral de
     * filtros
     *
     * @type {EventEmitter<void>}
     * @memberof HeaderComponent
     */
    @Output() toggleMobileFilterNav = new EventEmitter<void>();

    /**
     * Evento emitido cuando se hace clic en el botón de toggle del menú lateral
     * principal
     *
     * @type {EventEmitter<void>}
     * @memberof HeaderComponent
     */
    @Output() toggleCollapsed = new EventEmitter<void>();

    /**
     * Muestra u oculta el botón de filler
     *
     * @type {boolean}
     * @memberof HeaderComponent
     */
    showFiller = false;

    /**
     * Constructor del componente
     *
     * @param {MatDialog} dialog
     * @memberof HeaderComponent
     */
    constructor(public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) { }

    /**
     * Called when the component is initialized
     *
     * @memberof HeaderComponent
     */
    ngOnInit() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                const currentRoute = this.activatedRoute.snapshot.firstChild;
                this.currentRoute = currentRoute?.data['Title'] || currentRoute?.routeConfig?.path || '';
            });
    }
}