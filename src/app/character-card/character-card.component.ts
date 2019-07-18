import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  name:string;
  constructor(
  ) { }

  ngOnInit() {
    this.name="gty";
  }

}
