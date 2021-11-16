import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public api = `https://reqres.in/api/users`;

    constructor(private http : HttpClient){
        console.log(`DataService :: constructor :: Initialized`)
    }

    public getAllUsers(){
        return this.http.get(this.api);
    }

    public deleteUserById(id_ : number){
        return this.http.delete(this.api + `/` + id_);
    }
}