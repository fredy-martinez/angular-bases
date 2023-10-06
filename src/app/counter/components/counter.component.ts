import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h3> Counter: {{counter}}</h3>

  <button (click)="increasBy(+1)">+1</button>
  <button (click)="clear()">RESET</button>
  <button (click)="increasBy(-1)">-1</button>`

})

export class CounterComponent {
  public counter: number = 10;

  increasBy( value: number): void{
    this.counter += value;
  }
  clear (): void{
    this.counter = 10;
  }
}
