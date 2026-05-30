import { Component, inject } from '@angular/core';
import { ChuteiraService } from '../../services/chuteira.service';
import { Chuteira } from '../../models/chuteira';

@Component({
  selector: 'app-chuteira-form',
  standalone: true,
  imports: [],
  templateUrl: './chuteira-form.html',
  styleUrl: './chuteira-form.css',
})
export class ChuteiraForm {
  title = 'Nova Chuteira';

  chuteira: Chuteira = {
    nome: '',
    descricao: '',
    preco: 0,
  };

  private readonly chuteiraService = inject(ChuteiraService);

  salvar(): void {
    this.chuteiraService.criar(this.chuteira).subscribe({
      next: () => {
        alert('Chuteira salva com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao salvar chuteira:', err);
      }
    });
  }
}