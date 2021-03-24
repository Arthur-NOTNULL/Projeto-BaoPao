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

  ngOnInit() { 
  }

  saveUsuario(): void {
    
    if(this.usuario.email == "" || this.usuario.senha == ""){alert("Digite todas as informações nescessarias")
  }else{this.contatoService.create(this.usuario).then(() => {
      console.log('Usuario Criado com sucesso!');
      this.submitted = true;  
      //ir para pagina login cliente
      window.location.href = ('home_cliente')
      
      
    });
    }
  }
  
  // newTutorial(): void {
    //this.submitted = false;
    //this.usuario = new Usuario();
  //}

}

