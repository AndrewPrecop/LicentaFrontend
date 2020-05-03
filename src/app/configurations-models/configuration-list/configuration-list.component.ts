import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';


//import { ConfigurationService } from '../configuration.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Configuration } from '../Models/Configuration';
import { ConfigurationsService } from '../Services/configurations.service';

@Component({
  selector: 'app-configuration-list',
  templateUrl: './configuration-list.component.html',
  styleUrls: ['./configuration-list.component.css']
})
export class ConfigurationListComponent implements OnInit {
  configurations: Configuration[];
  subscription: Subscription;

  constructor(private configurationsService: ConfigurationsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.configurationsService.getAll().subscribe(
      (configurations: Configuration[]) => {
        this.configurations = configurations;
      }
    );
  }
  onNewConfiguration() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }


}
