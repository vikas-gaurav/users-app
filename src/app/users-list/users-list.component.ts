import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces';
import { DataService } from '../services/data.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public userList : IUser[];

  constructor(private dataService : DataService, private stateService : StateService, private router : Router) {
    console.log(`UsersListComponent :: constructor`);
  }

  ngOnInit() {
    console.log(`UsersListComponent :: ngOnInit`);
    this.updateUserList();
  }

  public viewUser(user_ : IUser){
    console.log(`UsersListComponent :: viewUser :: view user`, user_);
    // store user details in StateService, to reduce the API calls
    const userProfile_ = this.userList.find(user => user.id === user_.id);
    this.stateService.user = userProfile_;
    this.router.navigate([`user/${user_.id}`]);
  }

  //this function remove clicked user from the list in UI 
  // *** NO API CALL, only for demo purpose ***
  public deleteUser(id_ : number){
    console.log(`UsersListComponent :: deleteUser :: deleting user with id ${id_+1}`);
    this.userList.splice(id_,1);
  }

  private updateUserList(){
    console.log(`UsersListComponent :: updateUserList`);
    this.dataService.getAllUsers().subscribe((res : any) => {
      if(res){
        this.userList = res.data;
      }
    })
  }

}
