import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { ContatoComponent } from './Pagina/contato/contato.component';
import { HomeComponent } from './Pagina/home/home.component';
import { CadastrarComponent } from './Pagina/cadastrar/cadastrar.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { HomeClienteComponent } from './Pagina/Cliente/home-cliente/home-cliente.component';




@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    HomeComponent,
    CadastrarComponent,
    HomeClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
