import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { PiecesService } from 'src/app/configurations/Services/pieces.service';
import { Piece } from 'src/app/configurations/Models/piece';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class PieceEditComponent implements OnInit {
  id: string;
  editMode = false;
  pieceForm: FormGroup;
  pieceOptions = [];
  
  constructor(private route: ActivatedRoute,
              private piecesService: PiecesService,
              
              private router: Router) {

  }

  ngOnInit() {
    this.piecesService.getAll().subscribe(result => {
      this.pieceOptions = result;
      
      
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = params.id;
            this.editMode = params.id != null;
            this.initForm();
          }
        );
        });
  }
  onSubmit() {
    
  }
  onAddPiece() {
   
  }

  onDeletePiece() {
    //(this.pieceForm.get('pieces') as FormArray).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let pieceName = '';
    let pieceBrand = '';
    let pieceDescription = '';
    let pieceImagePath = '';
    let piecePrice ;
    let pieceAmount ;
   

    if (this.editMode) {
      this.piecesService.getById(this.id).subscribe(piece => {
        pieceName = piece.name;
        pieceBrand = piece.brand;
        pieceDescription =piece.description;
        pieceImagePath = piece.imagePath;
        piecePrice = piece.price;
        pieceAmount = piece.amount;
        
        this.initHelper(pieceName, pieceBrand,pieceDescription,pieceImagePath, piecePrice,pieceAmount);
      });
    } else {
      this.initHelper(pieceName, pieceBrand,pieceDescription,pieceImagePath, piecePrice,pieceAmount);
    }
  }

  private initHelper(pieceName, pieceBrand,pieceDescription,pieceImagePath, piecePrice,pieceAmount) {
    this.pieceForm = new FormGroup({
      name: new FormControl(pieceName, Validators.required),
      brand: new FormControl(pieceBrand, Validators.required),
      description: new FormControl(pieceDescription, Validators.required),
      imagePath: new FormControl(pieceImagePath, Validators.required),
      price: new FormControl(piecePrice, Validators.required),
      amount: new FormControl(pieceAmount, Validators.required),
      
    });
  }

}
