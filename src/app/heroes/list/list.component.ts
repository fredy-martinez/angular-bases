import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {
  heroesNames: string[] = ['Spiderman', 'Hulk', 'She Hulk', 'Thor', 'Ironman'];
  deletedHero?: string;

  removeLastHeroe(): void{
    this.deletedHero = this.heroesNames.pop();
  }


}
