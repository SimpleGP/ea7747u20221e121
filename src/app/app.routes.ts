import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', redirectTo:'home'},
  /*{path:'home',loadComponent:()=>import('./shared/presentation/views/home/home').then (m) =>
    m.HomeComponent,
    ),
  }*/
];
