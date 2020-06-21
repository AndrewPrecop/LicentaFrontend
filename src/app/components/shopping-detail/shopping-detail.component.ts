import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Piece } from 'src/app/configurations/Models/piece';
import { PiecesService } from 'src/app/configurations/Services/pieces.service';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../shared/confirmdialog/confirm-dialog.component'

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.css']
})
export class PieceDetailComponent implements OnInit {
  piece: Piece;
  id: string;
  dialog: any;

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

//       // let's call our modal window
//   const dialogRef = this.dialog.open(ConfirmDialogComponent, {
//     maxWidth: "400px",
//     data: {
//         title: "Are you sure?",
//         message: "You are about to delete user "}
//   });

//   // listen to response
//   dialogRef.afterClosed().subscribe(dialogResult => {
//     // if user pressed yes dialogResult will be true, 
//     // if he pressed no - it will be false
//     console.log(dialogResult);
    
//  });
//  ///pana aici am pus cod

    this.piecesService.delete(this.id).subscribe(result => {
    this.router.navigate(['/pieces']);

     

    });
  }
}
