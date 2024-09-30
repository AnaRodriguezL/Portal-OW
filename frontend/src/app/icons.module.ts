/**
 * Módulo que importa los iconos de Tabler y los exporta para
 * que sean accesibles en el resto de la aplicación.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Módulo de iconos de Tabler
 */
import { TablerIconsModule } from 'angular-tabler-icons';
/**
 * Iconos de Tabler
 */
import * as TablerIcons from 'angular-tabler-icons/icons';

/**
 * Módulo que importa los iconos de Tabler y los exporta para
 * que sean accesibles en el resto de la aplicación.
 */
@NgModule({
    imports: [
        /**
         * Importa los iconos de Tabler y los selecciona mediante
         * el método pick(). De esta manera, solo se importan los
         * iconos que se van a utilizar en la aplicación.
         */
        TablerIconsModule.pick(TablerIcons)
    ],
    exports: [
        /**
         * Exporta el módulo de iconos de Tabler para que sea
         * accesible en el resto de la aplicación.
         */
        TablerIconsModule
    ]
})
export class IconsModule { }