import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userProfile?: IUser;

  constructor(private stateService : StateService) {
    console.log(`UserComponent :: constructor :: Initialized`);
    this.showProfile();
   }

  ngOnInit() {
  }

  private showProfile(){
    console.log(`UserComponent :: showProfile :: Entering... `);
    //fetch current user details from state service
    this.userProfile = this.stateService.user;
  }

}
