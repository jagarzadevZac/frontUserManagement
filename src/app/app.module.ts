import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { AddComponent } from './COMPONENTS/add/add.component';
import { InicioComponent } from './COMPONENTS/inicio/inicio.component';
import { ModifiedComponent } from './COMPONENTS/modified/modified.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    InicioComponent,
    ModifiedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
