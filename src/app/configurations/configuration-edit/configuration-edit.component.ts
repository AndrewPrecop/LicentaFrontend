import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ConfigurationsService } from '../Services/configurations.service';
import { ComponentsService } from '../Services/components.service';
import { Configuration } from '../Models/Configuration';

@Component({
  selector: 'app-configuration-edit',
  templateUrl: './configuration-edit.component.html',
  styleUrls: ['./configuration-edit.component.css'],
})
export class ConfigurationEditComponent implements OnInit {
  id: string;
  editMode = false;
  configurationForm: FormGroup;
  componentOptions = [];
  loaded = false;
  componentLabels = ["Case", "Monitor", "CPU", "GPU", "RAM", "StorageDevice", "Cooling", "PSU", "OperatingSystem", "InputDevice"];

  constructor(private route: ActivatedRoute,
    private configurationsService: ConfigurationsService,
    private componentsService: ComponentsService,
    private router: Router) {

  }

  ngOnInit() {
    this.componentsService.getAll().subscribe(result => {
      this.componentOptions = result;
      console.log(this.componentOptions);
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = params.id;
            this.editMode = params.id != null;
            this.initForm();
            this.loaded = true;
          }
        );
    });
  }
  onSubmit() {
    const body = this.configurationForm.value as Configuration;
    body.components = this.configurationForm.get('components').value.map(o => { return { id: o.option, amount: o.amount } });

    (this.editMode ? this.configurationsService.update(this.id, body) :
      this.configurationsService.add(body)).subscribe(result => {
        this.onCancel();
      });
  }
  onAddComponent() {
    (this.configurationForm.get('components') as FormArray).push(
      new FormGroup({
        option: new FormControl(null, Validators.required)

      })
    );
  }

  onDeleteComponent(index: number) {
    (this.configurationForm.get('components') as FormArray).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let configurationName = '';
    let configurationImagePath = '';
    let configurationDescription = '';
    const configurationPieces = new FormArray([]);

    if (this.editMode) {
      this.configurationsService.getById(this.id).subscribe(configuration => {
        configurationName = configuration.name;
        configurationImagePath = configuration.imagePath;
        configurationDescription = configuration.description;
        if (configuration.components) {
          for (const component of configuration.components) {
            configurationPieces.push(
              new FormGroup({
                option: new FormControl(component.id, Validators.required),
                amount: new FormControl(component.amount, Validators.required)

              })
            );
          }
        }
        this.initHelper(configurationName, configurationImagePath, configurationDescription, configurationPieces);
      });
    } else {
      for (let i = 0; i < 10; i++) {
        configurationPieces.push(
          new FormGroup({
            option: new FormControl(null, Validators.required),
            amount: new FormControl(1, Validators.required)

          })
        );
      }

      this.initHelper(configurationName, configurationImagePath, configurationDescription, configurationPieces);
    }
  }

  private initHelper(configurationName, configurationImagePath, configurationDescription, configurationPieces) {
    this.configurationForm = new FormGroup({
      name: new FormControl(configurationName, Validators.required),
      imagePath: new FormControl(configurationImagePath, Validators.required),
      description: new FormControl(configurationDescription, Validators.required),
      components: configurationPieces
    });


  }

  getFiltered(type: number) {
    return this.componentOptions.filter(f => f.type === type);
  }

}
