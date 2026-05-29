import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Chuteira } from '../../models/chuteira';
import { ChuteiraService } from '../../services/chuteira.service';

@Component({
  selector: 'app-chuteira-list',
  imports: [CurrencyPipe],
  templateUrl: './chuteira-list.html',
  styleUrl: './chuteira-list.css',
})
export class ChuteiraList {
  private readonly chuteirasService = inject(ChuteiraService);

  chuteiras: Chuteira[] = [];
  carregando: boolean = false;

  ngOnInit(): void {
    this.carregarChuteiras();
  }

  carregarChuteiras(): void {
    this.carregando = true;

    this.chuteirasService.listar().subscribe({
      next: (dados) => {
        this.chuteiras = dados;
        this.carregando = false;
      },
      error: (error) => {
        console.error('Erro ao carregar chuteiras:', error);
        this.carregando = false;
      }
    });
  }
}