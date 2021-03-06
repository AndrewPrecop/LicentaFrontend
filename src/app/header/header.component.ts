import { Component, OnInit, OnDestroy} from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../authentication/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit,OnDestroy {
  isAuthenticated=false;
  private userSub:Subscription;


  constructor(
    private dataStorageService: DataStorageService,
    private authService:AuthService) {}

  ngOnInit(){
    this.userSub=this.authService.user.subscribe(user=>{
      this.isAuthenticated=!!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onSaveData() {
    this.dataStorageService.storeConfigurations();
  }
  onLogout() {
    this.authService.logout();
  }
  onFetchData() {
    //this.dataStorageService.fetchConfigurations().subscribe();
  }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
