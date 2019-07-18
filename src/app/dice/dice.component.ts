import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  rand: number;
  diceUrl1: string;
  diceUrl2: string;
  picUrl: string;
  constructor(
  ) { }

  ngOnInit() {
  }

  getNextRand() {
    let num = Math.random() * 10;
    while (num > 6) {
      num = Math.random() * 10;
    }
    this.rand = Math.floor(num % 6) + 1;



  }

  getNextDice() {
    this.getNextRand();
    this.diceUrl1 = "../../assets/" + this.rand + ".png";
    this.getNextRand();
    this.diceUrl2 = "../../assets/" + this.rand + ".png";
  }

}
