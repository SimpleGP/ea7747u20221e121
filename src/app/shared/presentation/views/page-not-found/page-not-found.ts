import { TranslatePipe } from '@ngx-translate/core';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [TranslatePipe, MatButtonModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
})
export class PageNotFoundComponent {
  private readonly router = inject(Router);
  readonly path = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
    ),
    {
      initialValue:
        this.router.getCurrentNavigation()?.extractedUrl.toString() ??
        this.router.url,
    },
  );

  returnHome(): void {
    void this.router.navigate(['/home']);
  }
}
