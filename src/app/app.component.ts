import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public list: Array<string> = [];

  addItem(item) {
    this.list.push(item);
  }

  removeItem(item) {
    /* 
    Wiem, skasuje pierwsze wystąpienie ale chodzi jedynie o wykorzystanie ng-template 
      - nalezałoby generować unikalny identyfikator dla kazdego itemu
      - wtedy kasowanie oparte byłoby na wyszukiwaniu po wygenerowanym id
    */
    const index = this.list.indexOf(item);

    if (index >= 0) {
      this.list.splice(index, 1);
    }
  }
}
