import { Component } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";
@Component({
    selector: 'app-register',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './register.component.html'
})
export class RegisterComponent {

}
