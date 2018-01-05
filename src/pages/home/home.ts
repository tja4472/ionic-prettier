/**
 * @prettier
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  public method1(): void {
    // prettier: "arrowParens": "always"
    (a) => {};
  }
}
