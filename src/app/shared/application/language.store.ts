
import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class LanguageStore {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);
  private readonly languageState = signal<'en' | 'es'>('en');
  private readonly loadingState = signal(false);
  private readonly errorState = signal(false);
  readonly language = this.languageState.asReadonly();
  readonly loading = this.loadingState.asReadonly();
  readonly error = this.errorState.asReadonly();

  async switchLanguage(language: string): Promise<void> {
    if ((language !== 'en' && language !== 'es') || this.loading()) {
      return;
    }

    this.loadingState.set(true);
    this.errorState.set(false);

    try {
      await firstValueFrom(this.translate.use(language));
      this.languageState.set(language);
      this.document.documentElement.lang = language;
    } catch {
      this.translate.resetLang(language);
      this.errorState.set(true);
    } finally {
      this.loadingState.set(false);
    }
  }
}
