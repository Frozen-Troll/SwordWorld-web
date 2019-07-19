import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  rand: number;
  sum: number;
  diceUrl1: string;
  diceUrl2: string;
  picUrl: string;
  dice1_on: boolean;
  dice2_on: boolean;

  constructor(
  ) { }

  ngOnInit() {
    this.resetDice();
  }

  getNextRand() {
    let num = Math.random() * 10;
    while (num > 6) {
      num = Math.random() * 10;
    }
    this.rand = Math.floor(num % 6) + 1;
  }

  resetDice() {
    this.sum = 0;
    this.dice1_on = false;
    this.dice2_on = false;
  }

  roll2D6() {
    this.resetDice();

    this.getNextRand();
    this.diceUrl1 = "../../assets/" + this.rand + ".png";
    this.sum += this.rand;
    this.getNextRand();
    this.diceUrl2 = "../../assets/" + this.rand + ".png";
    this.sum += this.rand;

    this.dice1_on = true;
    this.dice2_on = true;
  }

  roll1D6() {
    this.resetDice();

    this.getNextRand();
    this.diceUrl1 = "../../assets/" + this.rand + ".png";
    this.sum += this.rand;
    
    this.dice1_on = true;
  }

}
