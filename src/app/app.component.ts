import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Configurator-PC';
  loadedFeature = 'configuration';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
