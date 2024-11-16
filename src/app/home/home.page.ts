import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  yeah = "yeah"
  letters = ["b","a"]
  books = [
    {a:"Энтони Берджесс", n:"Заводной апельсин"},
    {a:"Чак Паланник", n:"Бойцовский клуб"}
  ]
  constructor() {}

}
