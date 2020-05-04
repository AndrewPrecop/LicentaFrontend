import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Piece } from '../Models/piece';

@Injectable()
export class PiecesService {

    private url: string;

    constructor(private http: HttpClient) {
        this.url = `https://localhost:44330/api/component/`;
    }

    getAll(): Observable<Piece[]> {
        return this.http.get<Piece[]>(this.url);
    }

    getById(id: string): Observable<Piece> {
        return this.http.get<Piece>(this.url + id);
    }

    add(item: Piece): Observable<Piece> {
        
         return this.http.post<Piece>(this.url, item);
    }

    update(id: string, item: Piece): Observable<Piece> {
        console.log(id, item);
        return this.http
            .put<Piece>(this.url + id, item);
    }

    delete(id: string): Observable<any> {
        return this.http.delete(this.url + id);
    }
}
