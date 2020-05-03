import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ComponentsService {
    baseUrl = 'https://localhost:44330/api/component';

    constructor(
        private http: HttpClient
    ) { }

    get() {
        return this.http.get(this.baseUrl);
    }
}