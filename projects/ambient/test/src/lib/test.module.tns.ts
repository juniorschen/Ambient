import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular';

import { TestComponent } from './test.component';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    NativeScriptCommonModule
  ],
  exports: [TestComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TestModule {
}
export { TestComponent };
