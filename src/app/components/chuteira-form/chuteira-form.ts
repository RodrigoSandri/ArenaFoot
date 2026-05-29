import { Component } from '@angular/core';

@Component({
  selector: 'app-chuteira-form',
  imports: [],
  templateUrl: './chuteira-form.html',
  styleUrl: './chuteira-form.css',
})
export class ChuteiraForm {
  title = "Nova Chuteira";

  salvar(): void{
    alert('As Chuteiras serão salvas aqui');
  }
}
