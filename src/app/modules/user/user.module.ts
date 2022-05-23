import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { UseComponent } from './components/use/use.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';



@NgModule({
  declarations: [
    UsersComponent,
    UseComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
