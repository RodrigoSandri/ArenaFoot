import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Chuteira } from '../../models/chuteira';
import { ChuteiraService } from '../../services/chuteira.service';

@Component({
  selector: 'app-chuteira-list',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './chuteira-list.html',
  styleUrl: './chuteira-list.css',
})
export class ChuteiraList {
  private readonly chuteirasService = inject(ChuteiraService);
  private readonly cdr = inject(ChangeDetectorRef);

  chuteiras: Chuteira[] = [];
  carregando = false;

  ngOnInit(): void {
    this.carregarChuteiras();
  }

  carregarChuteiras(): void {
    this.carregando = true;

    this.chuteirasService.listar().subscribe({
      next: (dados) => {
        this.chuteiras = dados;
        this.carregando = false;
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao carregar chuteiras:', erro);
        this.carregando = false;
        this.cdr.detectChanges();
      },
    });
  }

  editar(chuteira: Chuteira): void {
    if (!chuteira.id) {
      return;
    }

    this.chuteirasService.atualizar(chuteira, chuteira.id).subscribe({
      next: () => this.carregarChuteiras(),
      error: (erro) => console.error('Erro ao atualizar', erro),
    });
  }

  excluir(chuteira: Chuteira): void {
    if (!chuteira.id) {
      return;
    }
    this.chuteirasService.excluir(chuteira.id).subscribe({
      next: () => this.carregarChuteiras(),
      error: (erro) => console.error('Erro ao excluir', erro),
    });
  }
}