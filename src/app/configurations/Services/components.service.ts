import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Component } from '../Models/Component';

@Injectable()
export class ComponentsService {

    private url: string;

    constructor(private http: HttpClient) {
        this.url = `https://localhost:44330/api/component/`;
    }

    getAll(): Observable<Component[]> {
        return this.http.get<Component[]>(this.url);
    }

    getById(id: string): Observable<Component> {
        return this.http.get<Component>(this.url + id);
    }

    add(item: Component): Observable<Component> {
        return this.http.post<Component>(this.url, item);
    }

    update(id: string, item: Component): Observable<Component> {
        return this.http
            .put<Component>(this.url + id, item);
    }

    delete(id: string): Observable<any> {
        return this.http.delete(this.url + id);
    }
}
