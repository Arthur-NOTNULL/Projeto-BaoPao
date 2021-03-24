import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Usuario from '../Modulo/usuario';


@Injectable({
  providedIn: 'root'
})

export class ContatoService {
  

  private dbPath = '/Usuarios';
    
  
  usuarioRef: AngularFireList<Usuario> 

  constructor(private db: AngularFireDatabase) {
    this.usuarioRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Usuario> {
    return this.usuarioRef;
    
  }

  create(usuario: Usuario): any {
    return this.usuarioRef.push(usuario);
  }
  

 
}
