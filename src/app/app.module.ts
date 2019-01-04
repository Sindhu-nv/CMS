import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { DragdropComponent } from './modules/dragdrop/dragdrop.component';
import { DragdropDirective } from './modules/dragdrop/dragdrop.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DragdropComponent,
    DragdropDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
