import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ApiService } from '../../../services/api.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule, CommonModule ]  // Importando módulos directamente en el componente standalone
})
export class LoginComponent {
  loginForm: FormGroup;
  recuperarpassword = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const formValues = this.loginForm.value;
      console.log('Formulario enviado:', formValues);

      const { rememberMe, ...rest } = formValues;

      try {
        const data = await firstValueFrom(this.apiService.postData("Users/login/",rest));
        // Guardar el token en localStorage
        localStorage.setItem('authToken', data.token);
        console.log('Login successful:', data);
      } catch (error) {
        console.error('Login failed:', error);
      }
    } else {
      console.log('El formulario no es válido.');
    }
  }
     // metodo para pasar al registro empleando funciones click en lugar de routerlink (segunda opcion)
  goToRegister(): void {
    // console.log("holaaaaa")
    this.router.navigate(['/registro']);

  }

  exito(): void {
    this.recuperarpassword = true;
  }
}