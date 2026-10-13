import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {TranslatePipe} from '@ngx-translate/core';
import {MatButton} from '@angular/material/button';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  imports: [
    MatToolbar,
    LanguageSwitcher,
    TranslatePipe,
    MatButton,
    RouterLink,
    RouterLinkActive
  ],
  selector: 'app-toolbar',
  styleUrl: './toolbar.css',
  templateUrl: './toolbar.html',
})
export class Toolbar {}
