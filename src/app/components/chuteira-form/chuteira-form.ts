import { Component, EventEmitter, inject, output, Output, ɵinjectChangeDetectorRef } from '@angular/core';
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

  @Output() salvo = new EventEmitter<void>();

  private readonly cdr = inject(ɵinjectChangeDetectorRef);
  private readonly chuteiraService = inject(ChuteiraService);


  salvar(): void {
    this.chuteiraService.criar(this.chuteira).subscribe({
      next: () => {
        this.chuteira = { nome: '', 
          descricao: '', preco: 0}
          this.salvo.emit();
          this.cdr.detectChanges();
      }    
    })
  }
}
