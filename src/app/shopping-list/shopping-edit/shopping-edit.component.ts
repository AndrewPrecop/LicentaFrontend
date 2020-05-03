// import {
//   Component,
//   OnInit,
//   OnDestroy,
//   ViewChild
// }
//   from '@angular/core';

// import { NgForm } from '@angular/forms';
// import { Subscription } from 'rxjs/Subscription';


// import { Piece } from 'src/app/shared/piece.model';
// import { ShoppingListService } from '../shopping-list.service';
// import { ComponentsService } from 'src/app/shared/components.service';


// @Component({
//   selector: 'app-shopping-edit',
//   templateUrl: './shopping-edit.component.html',
//   styleUrls: ['./shopping-edit.component.css']
// })
// export class ShoppingEditComponent implements OnInit {
//   @ViewChild('f', { static: false }) slForm: NgForm;
//   subscription: Subscription;
//   editMode = false;
//   editedItemIndex: number;
//   editedItem: Piece;


//   constructor(private slService: ShoppingListService, private componentsService: ComponentsService) { }

//   ngOnInit() {
//     this.componentsService.get().subscribe(result => {
//       console.log(result);
//     });

//     this.subscription = this.slService.startedEditing
//       .subscribe(
//         (index: number) => {
//           this.editedItemIndex = index;
//           this.editMode = true;
//           this.editedItem = this.slService.getPiece(index);
//           this.slForm.setValue({
//             name: this.editedItem.name,
//             amount: this.editedItem.amount
//           })
//         }
//       );
//   }
//   onSubmit(form: NgForm) {
//     const value = form.value;
//     const newPiece = new Piece(value.name, value.amount);
//     if (this.editMode) {
//       this.slService.updatePiece(this.editedItemIndex, newPiece);
//     } else {
//       this.slService.addPiece(newPiece);
//     }
//     this.editMode = false;
//     form.reset();
//   }

//   onClear() {
//     this.slForm.reset();
//     this.editMode = false;
//   }

//   onDelete() {
//     this.slService.deletePiece(this.editedItemIndex);
//     this.onClear();
//   }

//   ngOnDestroy() {
//     this.subscription.unsubscribe();
//   }

// }
