import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { Piece } from 'src/app/configurations/Models/piece';
import { PiecesService } from 'src/app/configurations/Services/pieces.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class PieceListComponent implements OnInit {
  pieces: Piece[];
  subscription: Subscription;
  isAdmin: boolean;

  constructor(private piecesService: PiecesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.piecesService.getAll().subscribe(
      (pieces: Piece[]) => {
        this.isAdmin = localStorage.getItem("isAdmin")=='true';
        this.pieces = pieces;
      }
    );
  }
  onNewPiece() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
