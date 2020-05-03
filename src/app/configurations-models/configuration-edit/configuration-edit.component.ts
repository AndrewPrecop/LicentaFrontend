import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

//import { ConfigurationService } from '../configuration.service';
import { ConfigurationsService } from '../Services/configurations.service';
//import { Configuration } from '../piece.model';

@Component({
  selector: 'app-configuration-edit',
  templateUrl: './configuration-edit.component.html',
  styleUrls: ['./configuration-edit.component.css'],
})
export class ConfigurationEditComponent implements OnInit {
  id: string;
  editMode = false;
  configurationForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private configurationsService: ConfigurationsService,
    private router: Router) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }
  onSubmit() {

    if (this.editMode) {
      this.configurationsService.update(this.id, this.configurationForm.value);
    } else {
      this.configurationsService.add(this.configurationForm.value);
    }
    this.onCancel();
  }
  onAddPiece() {
    // (<FormArray>this.configurationForm.get('pieces')).push(
    //   new FormGroup({
    //     'name': new FormControl(null, Validators.required),
    //     'amount': new FormControl(null, [
    //       Validators.required,
    //       Validators.pattern(/^[1-9]+[0-9]*$/)
    //     ])
    //   })
    // );
  }

  onDeletePiece(index: number) {
    // (<FormArray>this.configurationForm.get('pieces')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let configurationName = '';
    let configurationImagePath = '';
    let configurationDescription = '';
    let configurationPieces = new FormArray([]);

    if (this.editMode) {
      this.configurationsService.getById(this.id).subscribe(configuration => {
        configurationName = configuration.name;
        configurationImagePath = configuration.imagePath;
        configurationDescription = configuration.description;
        if (configuration['components']) {
          for (let component of configuration.components) {
            configurationPieces.push(
              new FormGroup({
                'name': new FormControl(component.name, Validators.required),
                'amount': new FormControl(component.amount, [
                  // Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
              })
            );
          }
        }
      });
    }
    console.log(configurationPieces);
    this.configurationForm = new FormGroup({
      'name': new FormControl(configurationName, Validators.required),
      'imagePath': new FormControl(configurationImagePath, Validators.required),
      'description': new FormControl(configurationDescription, Validators.required),
      'pieces': configurationPieces
    });
  }

}
