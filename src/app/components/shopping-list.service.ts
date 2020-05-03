// //import { Piece } from '../shared/piece.model';

// import { Subject } from 'rxjs/Subject';

// export class ShoppingListService {
// //   piecesChanged = new Subject<Piece[]>();
// //   startedEditing = new Subject<number>();

// //   private pieces: Piece[] = [
// //     new Piece('Placa video', 5), 
// //     new Piece('Placa de baza', 12),
// //     new Piece('Placa de sunet', 7), 
// //     new Piece('Memorii', 10), 
// //     new Piece('Procesoare', 9), 
// //     new Piece('Solid-State Drive(SSD)', 5), 
// //     new Piece('Hard Disk-uri', 3), 
// //     new Piece('Carcase', 7), 
// //     new Piece('Surse PC', 2), 
// //     new Piece('Accesorii IT', 100), 
// //     new Piece('DVD Writer', 4), 
// //     new Piece('Blue Ray', 2), 
// //     new Piece('Tape drive', 7),
//   ];

//   getPieces() {
//     return this.pieces.slice();
//   }
//   getPiece(index: number) {
//     return this.pieces[index];
//   }
//   addPiece(piece: Piece) {
//     this.pieces.push(piece);
//     this.piecesChanged.next(this.pieces.slice());
//   }

//   addPieces(pieces: Piece[]) {
   
//     this.pieces.push(...pieces);
//     this.piecesChanged.next(this.pieces.slice());
//   }
//   updatePiece(index: number, newPiece: Piece) {
//     this.pieces[index] = newPiece;
//     this.piecesChanged.next(this.pieces.slice());
//   }

//   deletePiece(index: number) {
//     this.pieces.splice(index, 1);
//     this.piecesChanged.next(this.pieces.slice());
//   }
// }
