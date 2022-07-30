import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items:string[] = [];
  item:string = '';

  addItem() {
    this.items.unshift(this.item)
  }
  setItemName(event:any) {
    this.item = event.target.value;
  }
}
