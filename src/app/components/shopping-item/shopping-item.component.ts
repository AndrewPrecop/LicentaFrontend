import { Component, OnInit, Input } from '@angular/core';
import { Piece } from 'src/app/configurations/Models/piece';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class PieceItemComponent implements OnInit {
  @Input() piece: Piece;

  ngOnInit() {
  }
}
