/**
 * Componente que representa el menú lateral de la aplicación
 *
 * Contiene un array de objetos que representan los items del menú
 * y un servicio que se encarga de gestionar la navegación.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navItems } from "./sidebar-data";
import { NavService } from '../../services/nav.service';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { SharedModule } from "../../shared/shared.module";

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, SharedModule, NgScrollbarModule],
    templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {
    /**
     * Array de objetos que representan los items del menú lateral
     */
    navItems = navItems;

    /**
     * Servicio que se encarga de gestionar la navegación
     */
    constructor(public navService: NavService) { }

    ngOnInit(): void { }
}

