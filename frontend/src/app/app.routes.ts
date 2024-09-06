import { Routes } from '@angular/router';
import { LoginComponent } from './feautures/authentication/login/login.component';
import { RegisterComponent } from './feautures/authentication/register/register.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];
