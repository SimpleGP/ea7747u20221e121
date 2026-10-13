/**
 * @summary app.config for the CrewAI practice.
 * @author Giuliano Pelaez (assisted practice with OpenAI Codex)
 */
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import spanishLocale from '@angular/common/locales/es';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';

registerLocaleData(spanishLocale, 'es');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: './i18n/',
        suffix: '.json',
      }),
    }),
  ],
};
