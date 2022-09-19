import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-unit-test-app';
  count: number = 0;

  showMessage(msg: string): string {
    return msg;
  }

  incraseCount(num: number) {
    this.count += num;
  }

  decraseCount(num: number) {
    this.count -= num;
  }

}
