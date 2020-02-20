import { Component } from '@angular/core';

@Component({
  selector: 'lib-test',
  templateUrl: './test.component.tns.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
    public message = 'Its really Works';

    constructor() {
      console.log('Oh really work');
    }
}
