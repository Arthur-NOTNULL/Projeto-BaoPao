import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoComponent } from './Pagina/contato/contato.component';
import { HomeComponent } from './Pagina/home/home.component';
import { CadastrarComponent } from './Pagina/cadastrar/cadastrar.component';
import { HomeClienteComponent } from './Pagina/Cliente/home-cliente/home-cliente.component';
import { GerenteComponent } from './Pagina/gerente/gerente.component';
import { CadProdutoComponent } from './Pagina/gerente/cad-produto/cad-produto.component';


const routes: Routes = [
  {path: 'contato', component: ContatoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'home_cliente', component: HomeClienteComponent},
  {path: 'home-gerente', component: GerenteComponent},
  {path: 'Cad_produto', component: CadProdutoComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
