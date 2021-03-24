import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './Pagina/cadastrar/cadastrar.component';
import { HomeClienteComponent } from './Pagina/Cliente/home-cliente/home-cliente.component';
import { ContatoComponent } from './Pagina/contato/contato.component';
import { HomeComponent } from './Pagina/home/home.component';

const routes: Routes = [
  {path: 'contato', component: ContatoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'home_cliente', component: HomeClienteComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
