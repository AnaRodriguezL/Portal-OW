import { NavItem } from './nav-item/nav-item';

/**
 * Array de objetos que representan los items del menú lateral
 */
export const navItems: NavItem[] = [
    {
        displayName: 'Inicio',
        iconName: 'layout-dashboard',
        route: '/inicio'
    },
    {
        displayName: 'Clientes',
        iconName: 'users',
        route: '/clientes'
    },
    {
        displayName: 'Servicios',
        iconName: 'list',
        route: '/servicios'
    },
    {
        displayName: 'Chat',
        iconName: 'message',
        route: '/chat',
        badge: 5
    },
    {
        displayName: 'Notificaciones',
        iconName: 'bell',
        route: '/notificaciones',
        badge: 5
    },
    {
        displayName: 'Colaboradores',
        iconName: 'heart-handshake',
        route: '/colaboradores'
    }
];

