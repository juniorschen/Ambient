import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    template: '<page-router-outlet></page-router-outlet>'
})
export class ModalGambs implements OnInit {
    constructor(private routerExt: RouterExtensions, private activeRoute: ActivatedRoute) {
        console.log('gambs');
    }

    ngOnInit() {
        this.routerExt.navigate(['modalOne'], { relativeTo: this.activeRoute });
    }
}
