import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration } from '../Models/Configuration';

@Injectable()
export class ConfigurationsService {

    private url: string;

   
    constructor(private http: HttpClient) {
        this.url = `https://localhost:44330/api/configuration/`;
    }

    getAll(): Observable<Configuration[]> {
        return this.http.get<Configuration[]>(this.url);
    }

    getById(id: string): Observable<Configuration> {
        return this.http.get<Configuration>(this.url + id);
    }

    add(item: Configuration): Observable<Configuration> {
        return this.http.post<Configuration>(this.url, item);
    }

    update(id: string, item: Configuration): Observable<Configuration> {
        return this.http
            .put<Configuration>(this.url + id, item);
    }

    delete(id: string): Observable<any> {
        return this.http.delete(this.url + id);
    }
}