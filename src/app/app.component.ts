import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BaoPao';
  nome = '';
  itens = ['Pao','bisnaga','arroz'];
  add(){
    let n = this.nome;
    this.itens.push(n);
    this.nome = "";
  };
  excluir(x){
    
    this.itens.splice(x,1);
  };
}
