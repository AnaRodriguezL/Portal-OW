import { Component } from '@angular/core';

// Import Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule],
    templateUrl: './register.component.html'
})
export class RegisterComponent {

}
