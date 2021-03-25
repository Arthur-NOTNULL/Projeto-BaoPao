
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Produto from '../Modulo/produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private dbPath = '/Produtos';
    
  
  produtoRef: AngularFireList<Produto> 

  constructor(private db: AngularFireDatabase) {
    this.produtoRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Produto> {
    return this.produtoRef;
    
  }

  create(produto: Produto): any {
    return this.produtoRef.push(produto);
  }
}
