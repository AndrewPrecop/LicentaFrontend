import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
 
import { PieceListComponent } from './components/shopping-list/shopping-list.component';
import { PieceEditComponent } from './components/shopping-edit/shopping-edit.component';

import { ComponentsComponent } from './components/components.component';

import { ConfigurationsComponent } from './configurations/configurations.component';
import { ConfigurationListComponent } from './configurations/configuration-list/configuration-list.component';
import { ConfigurationDetailComponent } from './configurations/configuration-detail/configuration-detail.component';
import { ConfigurationItemComponent } from './configurations/configuration-list/configuration-item/configuration-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import { ConfigurationStartComponent } from './configurations/configuration-start/configuration-start.component';
import { ConfigurationEditComponent } from './configurations/configuration-edit/configuration-edit.component';
import { AuthComponent } from './authentication/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinners/loading-spinner.componetn';
import { AuthInterceptorService } from './authentication/auth-interceptor.service';
import { ConfigurationsService } from './configurations/Services/configurations.service';
import {ComponentsService} from './configurations/Services/components.service';
import { PiecesService } from './configurations/Services/pieces.service';
//import { Piece } from './configurations/Models/piece';
import { PieceDetailComponent } from './components/shopping-detail/shopping-detail.component';
import { PieceItemComponent } from './components/shopping-item/shopping-item.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConfigurationsComponent,
    ConfigurationListComponent,
    ConfigurationDetailComponent,
    ConfigurationItemComponent,
    DropdownDirective,
    ConfigurationStartComponent,
    ConfigurationEditComponent,
    
   
    ComponentsComponent,
    PieceListComponent,
    PieceDetailComponent,
    PieceItemComponent,
    
    PieceEditComponent,

    AuthComponent,
    LoadingSpinnerComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ConfigurationsService,
    ComponentsService,
    PiecesService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
