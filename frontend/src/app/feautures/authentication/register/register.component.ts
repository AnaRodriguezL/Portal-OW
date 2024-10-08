import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Import Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, ReactiveFormsModule, CommonModule, RouterModule],
    templateUrl: './register.component.html'
})
export class RegisterComponent {

  registerForm: FormGroup;
  registroExitoso = false;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const formValues = this.registerForm.value;
      console.log('Formulario enviado:', formValues);
      // Lógica para registrar al usuario.
    } else {
      console.log('El formulario no es válido.');
    }
  }
  exito(): void {
    this.registroExitoso = true;
  }
}
