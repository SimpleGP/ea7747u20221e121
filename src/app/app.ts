import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Toolbar} from './shared/presentation/components/toolbar/toolbar';

@Component({
  imports: [ Toolbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ea7747u20221e121');
}
