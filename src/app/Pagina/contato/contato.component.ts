import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {ContatoService} from '../../shared/contato.service';
import { map } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';
import { AngularFireList } from '@angular/fire/database';
import Usuario from 'src/app/Modulo/usuario';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
 
  usuarios: any;
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
    //var emails = this.usuarios.valueOf(this.usuarios.email);
    
     
  
    //alert(emails);
  }
  
}
