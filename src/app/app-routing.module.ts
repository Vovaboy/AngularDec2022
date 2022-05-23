import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutsComponent} from "./layouts/main-layouts/main-layouts.component";

const routes:Routes = [
  {
    path:'',component: MainLayoutsComponent, children:[
      {path:'', redirectTo:'users', pathMatch: 'full'},
      {path: 'users',loadChildren: () => import('./modules').then(value => value.UserModule )},
      {path: 'posts',loadChildren: () => import('./modules').then(value => value.UserModule )},
      {path: 'commetns',loadChildren: () => import('./modules').then(value => value.UserModule )},

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
