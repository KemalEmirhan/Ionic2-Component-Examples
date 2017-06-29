import { Component } from '@angular/core';
import { NavController, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = ['Apples', 'Bananas', 'Berries','Avocados'];

  constructor(public navCtrl: NavController) {

  }

  onClick() {
    console.log('OK');
  }

  reorderItems(indexes) {
    this.items = reorderArray(this.items, indexes);
  }


}
