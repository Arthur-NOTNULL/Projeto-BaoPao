import { Component, OnInit } from '@angular/core';
import {ProdutosService} from '../../../shared/produtos.service';
import { map } from 'rxjs/operators';
import Produto from 'src/app/Modulo/produto';

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrls: ['./cad-produto.component.css']
})
export class CadProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  submitted = false;

  produtos: any;
  

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() { 
    this.retrieveProdutos();
  }
 
  retrieveProdutos(): void {
    this.produtosService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.produtos = data;
    });
  }
  

  saveProduto(): void {
    this.produtosService.create(this.produtos).then(() => {
      this.submitted = true;  
    alert("Objeto cadastrado com sucesso ")
      
      })  
            


}
}