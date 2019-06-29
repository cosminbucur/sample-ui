import { NgModule } from '@angular/core';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../core/services/user.service';

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent,
  ],
  imports: [
    SharedModule,
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
