// import { AuthService, User } from '@core/authentication';
// import { TranslateModule } from '@ngx-translate/core';
// import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';


@Component({
    selector: 'app-user-panel',
    template: `
    <div class="matero-user-panel" routerLink="/profile/overview">
        <!-- <img class="matero-user-panel-avatar" [src]="user.avatar" alt="avatar" width="64" /> -->
        <img class="matero-user-panel-avatar" src="/assets/img/profile/user-1.jpg" alt="avatar" width="64" />
        <div class="matero-user-panel-info">
            <h4>Andrea Doe</h4>
            <h5>andreadoegmail.com</h5>
            <!-- <h4>{{ user.name }}</h4>
            <h5>{{ user.email }}</h5> -->
        </div>
    </div>
    `
})

export class UserPanelComponent { }

// export class UserPanelComponent implements OnInit {
//     private readonly auth = inject(AuthService);

//     user!: User;

//     ngOnInit(): void {
//         this.auth.user().subscribe(user => (this.user = user));
//     }
// }
