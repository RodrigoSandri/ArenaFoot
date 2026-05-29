import { Component, signal } from '@angular/core';
import { Navbar} from './components/navbar/navbar';
import { ChuteiraForm } from './components/chuteira-form/chuteira-form';
import { ChuteiraList } from './components/chuteira-list/chuteira-list';

@Component({
  selector: 'app-root',
  imports: [Navbar, ChuteiraForm, ChuteiraList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  Estoque = 'Nike'
}
