import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { DragdropComponent } from './modules/dragdrop/dragdrop.component';

const appRoutes: Routes = [
  
  { path: 'login', component: LoginComponent },
  {path:'dragdrop', component:DragdropComponent}];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
