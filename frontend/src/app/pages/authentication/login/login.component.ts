import { Component } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './login.component.html'
})
export class LoginComponent {
    // Tu lógica del componente
}
