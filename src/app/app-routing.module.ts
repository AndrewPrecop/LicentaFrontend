import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { ConfigurationStartComponent } from './configurations/configuration-start/configuration-start.component';
import { ConfigurationDetailComponent } from './configurations/configuration-detail/configuration-detail.component';
import { ConfigurationEditComponent } from './configurations/configuration-edit/configuration-edit.component';
import { AuthComponent } from './authentication/auth.component';
import { AuthGuard } from './authentication/auth.guard';
import { PieceEditComponent } from './components/shopping-edit/shopping-edit.component';
import { ComponentsComponent } from './components/components.component';
import { PieceDetailComponent } from './components/shopping-detail/shopping-detail.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/configurations', pathMatch: 'full' },
  {
    path: 'configurations',
    component: ConfigurationsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ConfigurationStartComponent },
      { path: 'new', component: ConfigurationEditComponent },
      {
        path: ':id',
        component: ConfigurationDetailComponent
      }, {
        path: ':id/edit',
        component: ConfigurationEditComponent
      }
    ]
  },
  
  { path: '', redirectTo: '/components', pathMatch: 'full' },
  
  {
    path: 'components',
    component: ComponentsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'new', component: PieceEditComponent },
      {
        path: ':id',
        component: PieceDetailComponent
      }, {
        path: ':id/edit',
        component: PieceEditComponent
      }
    ]
  },


  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
