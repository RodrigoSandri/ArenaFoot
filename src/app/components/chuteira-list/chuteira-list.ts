import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-chuteira-list',
  imports: [CurrencyPipe],
  templateUrl: './chuteira-list.html',
  styleUrl: './chuteira-list.css',
})
export class ChuteiraList {
  chuteiras = [
    {
      id: 1, 
      nome:"Chuteira Nike Air Zoom Mercurial Vapor 16 Elite FG",
      descricao:"Chuteira Nike Air Zoom Mercurial Vapor",
      preco: 3500
    }, 
    {
      id: 2, 
      nome:"Chuteira Campo Adidas Predador League",
      descricao: "Chuteira de couro",
      preco: 4000
    }
  ]
}
