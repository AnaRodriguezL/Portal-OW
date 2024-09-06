import { Component } from '@angular/core';

// Import Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule],
    templateUrl: './login.component.html'
})
export class LoginComponent {
    // Tu lógica del componente
}
