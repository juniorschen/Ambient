import { Component } from '@angular/core';
import { ModalDialogParams, RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'modal-two',
  templateUrl: './modal2.component.tns.html',
  styleUrls: ['./modal2.component.css'],
})
export class ModalTwo {

  constructor(private _params: ModalDialogParams, private router: RouterExtensions) {
    console.log('modal two');
   }

  onBack(): void {
      this.router.back();
  }
  onClose(): void {
      this._params.closeCallback('return modal two');
  }
}
