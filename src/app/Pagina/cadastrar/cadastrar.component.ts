import { Component, OnInit } from '@angular/core';
import {ContatoService} from '../../shared/contato.service';
import { map } from 'rxjs/operators';
import Usuario from 'src/app/Modulo/usuario';




@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario();
  submitted = false;
  usuarios: any;

  constructor(private contatoService: ContatoService) { }

  ngOnInit() { 
    this.retrieveUsuarios();
  }
  retrieveUsuarios(): void {
    this.contatoService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.usuarios = data;
    });
  }
  

  saveUsuario(): void {
    var email_db = this.usuarios.valueOf(this.usuarios.email);

    if(this.usuario.email && this.usuario.senha){
      for (let i in email_db){
        if (email_db[i]["email"] === this.usuario.email){
          alert("Email ja cadastrado.Tente outro")}else{
            this.contatoService.create(this.usuario).then(() => {
              this.submitted = true;  
              //ir para pagina login cliente
              window.location.href = ('home_cliente')
              })
          }}  
    }else{
      alert("Digite todas as informações nescessarias")
    } 

  }

}