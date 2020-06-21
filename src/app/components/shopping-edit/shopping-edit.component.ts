import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { PiecesService } from 'src/app/configurations/Services/pieces.service';
//import { Piece } from 'src/app/configurations/Models/piece';
import { Piece} from 'src/app/configurations/Models/Piece';
import { from } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class PieceEditComponent implements OnInit {
  id: string;
  editMode = false;
  pieceForm: FormGroup;
  //pieceOptions = [];
  
  constructor(private route: ActivatedRoute,
              private piecesService: PiecesService,
              
              private router: Router) {

  }

  ngOnInit() {

    this.piecesService.getAll().subscribe(result => {
    // this.pieceOptions = result;
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
    
    const body = this.pieceForm.value as Piece;
    //body.pieces = this.pieceForm.get('pieces').value.map(o => o.option);

    (this.editMode ? this.piecesService.update(this.id, body) :
      this.piecesService.add(body)).subscribe(result => {
        this.onCancel();
      });

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
    let pieceType ;
   

    if (this.editMode) {
      this.piecesService.getById(this.id).subscribe(piece => {
        pieceName = piece.name;
        pieceBrand = piece.brand;
        pieceDescription =piece.description;
        pieceImagePath = piece.imagePath;
        piecePrice = piece.price;
        pieceAmount = piece.amount;
        pieceType = piece.type;
        
        this.initHelper(pieceName, pieceBrand,pieceDescription,pieceImagePath, piecePrice,pieceAmount,pieceType);
      });
    } else {
      this.initHelper(pieceName, pieceBrand,pieceDescription,pieceImagePath, piecePrice,pieceAmount,pieceType);
    }
  }

  private initHelper(pieceName, pieceBrand,pieceDescription,pieceImagePath, piecePrice,pieceAmount,pieceType) {
    this.pieceForm = new FormGroup({
      name: new FormControl(pieceName, Validators.required),
      brand: new FormControl(pieceBrand, Validators.required),
      description: new FormControl(pieceDescription, Validators.required),
      imagePath: new FormControl(pieceImagePath, Validators.required),
      price: new FormControl(piecePrice, Validators.required),
      amount: new FormControl(pieceAmount, Validators.required),
      type: new FormControl(pieceType, Validators.required),
      
    });
  }

}
