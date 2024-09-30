/**
 * Módulo que contiene las rutas de la aplicación
 * 
 * Contiene las rutas que se utilizarán en la aplicación. La ruta
 * vacía se redirige a la ruta del dashboard, y la ruta '**' se
 * redirige a la ruta del login. Las rutas del login y del registro
 * se definen aquí también. La ruta del dashboard se define con
 * rutas hijas.
 */
import { Routes } from '@angular/router';

// Rutas de autenticación
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';

// Rutas del dashboard
import { DashboardComponent } from './pages/dashboard/dashboard.component'; // Importa directamente el componente standalone
import { HomeComponent } from './pages/dashboard/home/home.component';
import { ClientsComponent } from './pages/dashboard/clients/clients.component';
import { ServicesComponent } from './pages/dashboard/services/services.component';
import { ChatComponent } from './pages/dashboard/chat/chat.component';
import { NotificationsComponent } from './pages/dashboard/notifications/notifications.component';
import { CollaboratorsComponent } from './pages/dashboard/collaborators/collaborators.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Ruta vacía

    // { path: '**', redirectTo: 'login' }, // Ruta '**' se redirige a la ruta del login

    { path: 'login', component: LoginComponent }, // Ruta del login
    { path: 'registro', component: RegisterComponent }, // Ruta del registro

    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: 'inicio', component: HomeComponent, data: { Title: 'Inicio' } }, // Ruta para inicio
            { path: 'clientes', component: ClientsComponent, data: { Title: 'Clientes' } }, // Ruta para clientes
            { path: 'servicios', component: ServicesComponent, data: { Title: 'Servicios' } }, // Ruta para servicios
            { path: 'chat', component: ChatComponent, data: { Title: 'Chat' } }, // Ruta para chat
            { path: 'notificaciones', component: NotificationsComponent, data: { Title: 'Notificaciones' } }, // Ruta para notificaciones
            { path: 'colaboradores', component: CollaboratorsComponent, data: { Title: 'Colaboradores' } }, // Ruta para colaboradores
        ]
    }
];