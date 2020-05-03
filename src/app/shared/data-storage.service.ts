import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

//import { Configuration } from '../configurations-models/piece.model';
//import { ConfigurationsService } from '../configurations-models/configuration.service';
import { AuthService } from '../authentication/auth.service';
import { ConfigurationsService } from '../configurations-models/Services/configurations.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private configurationService: ConfigurationsService,
    private authService: AuthService) { }

  storeConfigurations() {
    const configurations =null;
    this.http
      .put(
        'https://localhost:44330/api/configuration',
        configurations
      )
      .subscribe(response => {
        console.log(response);
      });
  }

}

