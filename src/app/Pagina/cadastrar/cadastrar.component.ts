import { Component, OnInit } from '@angular/core';
import {ContatoService} from '../../shared/contato.service';
import Usuario from 'src/app/Modulo/usuario';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario();
  submitted = false;

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
  }

  saveUsuario(): void {
    
    this.contatoService.create(this.usuario).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
      this.usuario.nome = "";
      this.usuario.email = "";
      this.usuario.senha = "";
      //ir para pagina login cliente
    });
  }

  // newTutorial(): void {
    //this.submitted = false;
    //this.usuario = new Usuario();
  //}

}

