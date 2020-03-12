import { Component, ViewContainerRef } from '@angular/core';
import { ModalDialogService } from 'nativescript-angular';

import { ModalGambs } from './gambs/gambs.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.tns.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(
    private modal: ModalDialogService,
    private vcRef: ViewContainerRef) {
      console.log('home');
  }

  tapOpen() {
    this.modal.showModal(ModalGambs, {
      fullscreen: true,
      context: {
      },
      viewContainerRef: this.vcRef
    }).then((res) => {
      if (res) {
        alert(`modal returned ${res}`);
      }
    });
  }

}
