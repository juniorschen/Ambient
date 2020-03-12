import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDialogParams, RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'modal-one',
  templateUrl: './modal1.component.tns.html',
  styleUrls: ['./modal1.component.css'],
})
export class ModalOne implements OnInit {

  constructor(
    private params: ModalDialogParams,
    private vcRef: ViewContainerRef,
    private router: RouterExtensions,
    private activeRoute: ActivatedRoute) {
      console.log('modalOne');
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.params.closeCallback('return modal one');
}

  onNavigate() {
    this.router.navigate(['../modalTwo'], { relativeTo: this.activeRoute });
  }
}
