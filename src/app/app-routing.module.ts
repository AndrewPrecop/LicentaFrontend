import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurationsModelsComponent } from './configurations-models/configurations-models.component';
//import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ConfigurationStartComponent } from './configurations-models/configuration-start/configuration-start.component';
import { ConfigurationDetailComponent } from './configurations-models/configuration-detail/configuration-detail.component';
import { ConfigurationEditComponent } from './configurations-models/configuration-edit/configuration-edit.component';
//import { ConfigurationsResolverService } from './configurations-models/configurations-resolver.service';
import {AuthComponent} from './authentication/auth.component';
import { AuthGuard } from './authentication/auth.guard';


const appRoutes: Routes = [
  { path: '', redirectTo: '/configurations-models', pathMatch: 'full' },
  { path: 'configurations-models', 
  component: ConfigurationsModelsComponent, 
  canActivate: [AuthGuard],
  children: [
    { path: '', component: ConfigurationStartComponent },
    { path: 'new', component: ConfigurationEditComponent },
    { 
      path: ':id', 
      component: ConfigurationDetailComponent,
     // resolve: [ConfigurationsResolverService]},
    },{ 
      path: ':id/edit', 
      component: ConfigurationEditComponent ,
     // resolve: [ConfigurationsResolverService]
   }
  ]
},
  //{ path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth',component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
