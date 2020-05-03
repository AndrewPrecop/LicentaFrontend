import { Component, OnInit,Input } from '@angular/core';
import { Configuration } from '../../Models/Configuration';



@Component({
  selector: 'app-configuration-item',
  templateUrl: './configuration-item.component.html',
  styleUrls: ['./configuration-item.component.css']
})
export class ConfigurationItemComponent implements OnInit {
  @Input() configuration: Configuration;
  @Input() index: number;
  
  ngOnInit() {
  }
  
}
