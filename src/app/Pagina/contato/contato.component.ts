import { Component, OnInit } from '@angular/core';
import {ContatoService} from '../../shared/contato.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
 
  usuarios: any;
  email:any;
  senha:any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
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
  
  
  Acessar()
  {
    var email_db = this.usuarios.valueOf(this.usuarios.email);
    var senha_db = this.usuarios.valueOf(this.usuarios.senha);
    var tipo_db = this.usuarios.valueOf(this.usuarios.tipo);
    console.log(tipo_db)
    
    var email_login = this.email;
    var senha_login = this.senha;
    var tipog = 'gerente'

    if(!email_login || !senha_login){
      alert('Preencha todos os dados')   
    }else{
      for (let i in email_db){
      if (email_db[i]["email"] === email_login && senha_db[i]["senha"] === senha_login){
          if(tipo_db[i]["tipo"] === tipog){
             
            window.location.href = ('home-gerente')
          }
           else{

            window.location.href = ('home_cliente')
            
           }
           

    }}}
    

  }
}
