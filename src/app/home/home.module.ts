import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeComponent } from '@src/app/home/home.component';
import { NativeScriptCommonModule, NativeScriptRouterModule } from 'nativescript-angular';

import { ModalGambs } from './gambs/gambs.component';
import { ModalOne } from './modal1/modal1.component';
import { ModalTwo } from './modal2/modal2.component';


@NgModule({
  declarations: [
    HomeComponent,
    ModalOne,
    ModalTwo,
    ModalGambs
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule
  ],
  providers: [],
  exports: [ModalOne, ModalTwo],
  bootstrap: [],
  entryComponents: [ModalGambs],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {
}
