import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home/home.component';
import { ModalOne } from './home/modal1/modal1.component';
import { ModalTwo } from './home/modal2/modal2.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children:
    [
      { path: 'modalOne', component: ModalOne },
      { path: 'modalTwo', component: ModalTwo }
    ]
  }
];
@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
