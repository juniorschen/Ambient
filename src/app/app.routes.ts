import { Routes } from '@angular/router';
import { HomeComponent } from '@src/app/home/home.component';

import { ModalOne } from './home/modal1/modal1.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, children: [ { path: 'modalOne', component: ModalOne }] }
];
