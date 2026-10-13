import {Component, inject} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {MatButtonToggleGroup, MatButtonToggleModule,} from '@angular/material/button-toggle';
import {LanguageStore} from '../../../application/language.store';

@Component({
  imports: [MatButtonToggleModule, TranslatePipe],
  selector: 'app-language-switcher',
  styleUrl: './language-switcher.css',
  templateUrl: './language-switcher.html',
})
export class LanguageSwitcher {
  readonly store = inject(LanguageStore);
  async changeLanguage(
    language: string,
    group: MatButtonToggleGroup,
  ): Promise<void> {
    await this.store.switchLanguage(language);
    group.value = this.store.language();
  }
}
