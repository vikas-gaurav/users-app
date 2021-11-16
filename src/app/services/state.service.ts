import { Injectable } from "@angular/core";
import { IUser } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class StateService {

    public user: IUser;

    constructor(){
        console.log(`StateService :: constructor :: Initialized with currentUserProfile :`,this.user );
    }
}