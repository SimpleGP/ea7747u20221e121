import { Routes } from '@angular/router';
import {Home} from './shared/presentation/views/home/home';

export const routes: Routes = [
  {path:'', redirectTo:'home'},
  /*{path:'home',loadComponent:()=>import('./shared/presentation/views/home/home').then (m) =>
    m.HomeComponent,
    ),
  }*/{path:'home', component:Home, title:'Home'},
];
