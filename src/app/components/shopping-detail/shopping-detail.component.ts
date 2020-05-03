import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Piece } from 'src/app/configurations/Models/piece';
import { PiecesService } from 'src/app/configurations/Services/pieces.service';


@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.css']
})
export class PieceDetailComponent implements OnInit {
  piece: Piece;
  id: string;

  constructor(private piecesService: PiecesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params.id;
          this.piecesService.getById(this.id).subscribe(
            (piece: Piece) => {
              this.piece = piece;
            }
          );
        }
      );
  }

  onEditPiece() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  onDeletePiece() {
    this.piecesService.delete(this.id).subscribe(result => {
    this.router.navigate(['/pieces']);
    });
  }
}
