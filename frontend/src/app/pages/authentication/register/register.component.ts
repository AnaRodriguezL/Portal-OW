import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Import Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
// CRUD
import { ApiService } from '../../../services/api.service';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, ReactiveFormsModule, CommonModule, RouterModule],
    templateUrl: './register.component.html'
})
export class RegisterComponent {

  registerForm: FormGroup;
  registroExitoso = false;
  constructor(private formBuilder: FormBuilder, private apiService:ApiService) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      const formValues = this.registerForm.value;
      console.log('Formulario enviado:', formValues);
      const { terms, ...rest } = formValues;
      try {
        const data = await firstValueFrom(this.apiService.postData("Users/signup/",rest));
        // Guardar el token en localStorage
        localStorage.setItem('token', data.token);
        console.log('Register successful:', data);
        this.registroExitoso = true;
      } catch (error) {
        console.error('Register failed:', error);
      }
    } else {
      console.log('El formulario no es válido.');
    }
  }

}
