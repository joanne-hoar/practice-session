import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Joanne\'s Market');
}
