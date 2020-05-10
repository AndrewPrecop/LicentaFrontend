import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Configuration } from '../Models/Configuration';
import { ConfigurationsService } from '../Services/configurations.service';


@Component({
  selector: 'app-configuration-detail',
  templateUrl: './configuration-detail.component.html',
  styleUrls: ['./configuration-detail.component.css']
})
export class ConfigurationDetailComponent implements OnInit {
  configuration: Configuration;
  //component : Component;
  id: string;

  constructor(private configurationsService: ConfigurationsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params.id;
          this.configurationsService.getById(this.id).subscribe(
            (configuration: Configuration) => {
              this.configuration = configuration;
            }
          );
        }
      );
  }

 

  onEditConfiguration() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  onDeleteConfiguration() {
    this.configurationsService.delete(this.id).subscribe(result => {
    this.router.navigate(['/configurations']);
    });
  }
}
